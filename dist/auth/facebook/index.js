"use strict";
exports.__esModule = true;
var express = require('express');
var passport = require('passport');
var auth_service_1 = require("../auth.service");
var router = express.Router();
var user_model_1 = require("../../api/user/user.model");
router.post('/', function (req, res, next) {
    // IF Authentication passed by passport middleware
    passport.authenticate('facebook-token', function (err, user, info) {
        var error = err || info;
        if (error) {
            return res.status(401).json(error);
        }
        if (!user) {
            return res.status(404).json({ message: 'Something went wrong, please try again.' });
        }
        user_model_1["default"].findById(user._id)
            .select('userID firstName middleName lastName displayName phoneNumber email role avatar active')
            // .populate('agencyId', 'name avatar')
            .exec()
            .then(function (usr) {
            // console.log('USR', usr);
            var token = auth_service_1["default"].signToken(usr);
            usr.token = token;
            res.status(200).json({ token: token, user: usr });
        });
    })(req, res, next);
});
module.exports = router;
//# sourceMappingURL=index.js.map