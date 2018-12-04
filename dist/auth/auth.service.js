"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var config_1 = require("./../config");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
var compose = require("composable-middleware");
var user_model_1 = require("../api/user/user.model");
var base_1 = require("./../api/base");
var _ = require("lodash");
var config = new config_1["default"]();
var validateJwt = expressJwt({
    secret: config.secrets.session
});
var jwtUserInfo = expressJwt({
    secret: config.secrets.session,
    credentialsRequired: false
});
var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = user_model_1["default"];
        /**
         * Attaches the user object to the request if authenticated
         * Otherwise returns 403
         */
        _this.isAuthenticated = function () {
            return compose()
                // Validate jwt
                .use(function (req, res, next) {
                // allow token to be passed through query parameter as well
                // console.log('-------',req.query, req.cookies);
                if (req.query && req.query.hasOwnProperty('token')) {
                    req.headers.authorization = "Bearer " + req.query.token;
                }
                // IE11 forgets to set Authorization header sometimes. Pull from cookie instead.
                if (req.query && typeof req.headers.authorization === 'undefined') {
                    req.headers.authorization = "Bearer " + req.cookies.token;
                }
                validateJwt(req, res, next);
            })
                // Attach user to request
                .use(function (req, res, next) {
                user_model_1["default"].findById(req.user._id)
                    .select('displayName firstName lastName email role agentRestricted accountLockedOut')
                    // .populate('agencyId', 'name avatar')
                    .exec()
                    .then(function (user) {
                    if (!user) {
                        return res.status(401).end();
                    }
                    req.user = user;
                    // console.log('isAuthenticated-------',user);
                    next();
                    return null;
                })["catch"](function (err) { return next(err); });
            });
        };
        /**
         * Attaches the user object to the request if authenticated
         * Otherwise blank
         */
        _this.attachUserInfo = function () {
            return compose()
                // Validate jwt providing access to unregistered users
                .use(function (req, res, next) {
                jwtUserInfo(req, res, next);
            })
                .use(function (req, res, next) {
                if (req.user) {
                    user_model_1["default"].findById(req.user._id)
                        .select('firstName lastName email accountLockedOut')
                        // .populate('agencyId', 'name avatar')
                        .exec()
                        .then(function (user) {
                        if (!user) {
                            return res.status(401).end();
                        }
                        req.user = user;
                        next();
                        return null;
                    })["catch"](function (err) { return next(err); });
                }
                else {
                    next();
                }
            });
        };
        /**
         * Checks if the user role meets the minimum requirements of the route
         */
        _this.hasRole = function (roleRequired) {
            if (!roleRequired) {
                throw new Error('Required role needs to be set');
            }
            return compose()
                .use(_this.isAuthenticated())
                .use(function meetsRequirements(req, res, next) {
                // console.log(req.user);
                if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
                    // if (config.userRoles.indexOf(roleRequired) >= 0) {
                    return next();
                }
                else {
                    return res.status(403).send('Forbidden');
                }
            });
        };
        /**
         * Checks if the user role meets the minimum requirements of the route
         */
        _this.hasRoles = function (roleRequired) {
            if (!roleRequired) {
                throw new Error('Required role needs to be set');
            }
            return compose()
                .use(_this.isAuthenticated())
                .use(function meetsRequirements(req, res, next) {
                var authorized = false;
                _.each(roleRequired, function (role) {
                    authorized = config.userRoles.indexOf(req.user.role) === config.userRoles.indexOf(role) || authorized;
                });
                // console.log('authorized', authorized);
                if (authorized) {
                    return next();
                }
                else {
                    return res.status(403).send('Forbidden');
                }
            });
        };
        _this.isValidUserID = function () {
            return compose()
                // .use(this.isAuthenticated())
                .use(function (req, res, next) {
                var paramUserID = req.params.userID;
                var loggedInUserID = req.user ? req.user._id.toHexString() : null;
                if (paramUserID === loggedInUserID) {
                    // console.log('user own this entity ---------');
                    return next();
                }
                else {
                    console.log('user does not own this entity ---------');
                    return res.status(403).send('Forbidden');
                }
            });
        };
        return _this;
    }
    AuthService.genVerificationCode = function () {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };
    AuthService.genPassCode = function () {
        return Math.floor(1000 + Math.random() * 9000).toString();
    };
    /**
     * Returns a jwt token signed by the app secret
     */
    // tslint:disable-next-line:member-ordering
    AuthService.signToken = function (user) {
        // console.log('SIGN TOKEN', user);
        return jwt.sign({
            _id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            avatar: user.avatar,
            active: user.active
        }, config.secrets.session, {
            expiresIn: 60 * 60 * 24 * 7
        });
    };
    /**
     * Set token cookie directly for oAuth strategies
     */
    // tslint:disable-next-line:member-ordering
    AuthService.setTokenCookie = function (req, res) {
        if (!req.user) {
            return res.status(404).send('It looks like you aren\'t logged in, please try again.');
        }
        var token = AuthService.signToken(req.user);
        res.cookie('token', token);
        res.redirect('/');
    };
    return AuthService;
}(base_1["default"]));
exports["default"] = AuthService;
//# sourceMappingURL=auth.service.js.map