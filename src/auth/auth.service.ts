import Config from './../config';
import * as jwt from 'jsonwebtoken';
import * as expressJwt from 'express-jwt';
import * as compose from 'composable-middleware';
import User from '../api/user/user.model';
import BaseCtrl from './../api/base';
import * as _ from 'lodash';
let config = new Config();

let validateJwt = expressJwt({
  secret: config.secrets.session
});

let jwtUserInfo = expressJwt({
  secret: config.secrets.session,
  credentialsRequired: false
});

export default class AuthService extends BaseCtrl {
  model = User;
  /**
   * Attaches the user object to the request if authenticated
   * Otherwise returns 403
   */
  isAuthenticated = () => {
    return compose()
      // Validate jwt
      .use(function (req, res, next) {
        // allow token to be passed through query parameter as well
        // console.log('-------',req.query, req.cookies);
        if (req.query && req.query.hasOwnProperty('token')) {
          req.headers.authorization = `Bearer ${req.query.token}`;
        }
        // IE11 forgets to set Authorization header sometimes. Pull from cookie instead.
        if (req.query && typeof req.headers.authorization === 'undefined') {
          req.headers.authorization = `Bearer ${req.cookies.token}`;
        }
        validateJwt(req, res, next);
      })
      // Attach user to request
      .use(function (req, res, next) {
        User.findById(req.user._id)
        .select('displayName firstName lastName email role agentRestricted accountLockedOut')
          // .populate('agencyId', 'name avatar')
          .exec()
          .then(user => {
            if (!user) {
              return res.status(401).end();
            }
            req.user = user;
            // console.log('isAuthenticated-------',user);
            next();
            return null;
          })
          .catch(err => next(err));
      });
  }

  /**
   * Attaches the user object to the request if authenticated
   * Otherwise blank
   */
  attachUserInfo = () => {
    return compose()
      // Validate jwt providing access to unregistered users
      .use(function (req, res, next) {
        jwtUserInfo(req, res, next)
      })
      .use(function (req, res, next) {
        if (req.user) {
          User.findById(req.user._id)
          .select('firstName lastName email accountLockedOut')
            // .populate('agencyId', 'name avatar')
            .exec()
            .then(user => {
                if (!user) {
                  return res.status(401).end();
                }
                req.user = user;
                next();
                return null;
              })
            .catch(err => next(err));
        } else {
          next();
        }
      });
  }

  /**
   * Checks if the user role meets the minimum requirements of the route
   */
  hasRole = (roleRequired: string) => {
    if (!roleRequired) {
      throw new Error('Required role needs to be set');
    }

    return compose()
      .use(this.isAuthenticated())
      .use(function meetsRequirements(req, res, next) {
        // console.log(req.user);
        if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
          // if (config.userRoles.indexOf(roleRequired) >= 0) {
          return next();
        } else {
          return res.status(403).send('Forbidden');
        }
      });
  }

  /**
   * Checks if the user role meets the minimum requirements of the route
   */
  hasRoles = (roleRequired: string[]) => {
    if (!roleRequired) {
      throw new Error('Required role needs to be set');
    }

    return compose()
      .use(this.isAuthenticated())
      .use(function meetsRequirements(req, res, next) {
        var authorized = false;
        _.each(roleRequired, function (role) {
          authorized = config.userRoles.indexOf(req.user.role) === config.userRoles.indexOf(role) || authorized;
        });
        // console.log('authorized', authorized);
        if (authorized) {
          return next();
        } else {
          return res.status(403).send('Forbidden');
        }
      });
  }

  isValidUserID = () => {
    return compose()
    // .use(this.isAuthenticated())
    .use((req, res, next) => {
      var paramUserID = req.params.userID;
      var loggedInUserID = req.user? req.user._id.toHexString() : null;

      if (paramUserID === loggedInUserID) {
        // console.log('user own this entity ---------');
        return next();
      } else {
        console.log('user does not own this entity ---------')
        return res.status(403).send('Forbidden');
      }
    })
  }

  /**
   * Returns a jwt token signed by the app secret
   */
  // tslint:disable-next-line:member-ordering
  static signToken = (user) => {
    // console.log('SIGN TOKEN', user);
    return jwt.sign({
      _id: user.id, 
      email: user.email,
      firstName: user.firstName, 
      lastName: user.lastName, 
      role: user.role,
      avatar: user.avatar, 
      active: user.active 
    }, 
      config.secrets.session, 
    {
      expiresIn: 60 * 60 * 24 * 7
    });
  }

  /**
   * Set token cookie directly for oAuth strategies
   */
  // tslint:disable-next-line:member-ordering
  static setTokenCookie = (req, res) => {
    if (!req.user) {
      return res.status(404).send('It looks like you aren\'t logged in, please try again.');
    }
    const token = AuthService.signToken(req.user);
    res.cookie('token', token);
    res.redirect('/');
  }

  static genVerificationCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
  static genPassCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }
}
