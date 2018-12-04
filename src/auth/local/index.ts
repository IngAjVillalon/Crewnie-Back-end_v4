let express = require('express');
let passport = require('passport');
import AuthService from '../auth.service';
let router = express.Router();
import User from '../../api/user/user.model';

router.post('/', function (req, res, next) {
  // IF Authentication passed by passport middleware
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) {
      return res.status(401).json(error);
    }
    if (!user) {
      return res.status(404).json({ message: 'Something went wrong, please try again.' });
    }
    User.findById(user._id)
    .select('userID displayName firstName lastName phoneNumber email role avatar active')
    .exec()
    .then(function (usr: any) {
      // console.log('USR', usr);
      const token = AuthService.signToken(usr);
      usr.token = token;
      res.status(200).json({ token: token, user: usr });
    });
  })(req, res, next);
});

module.exports = router;