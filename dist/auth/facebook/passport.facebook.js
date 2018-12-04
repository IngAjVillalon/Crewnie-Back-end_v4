"use strict";
exports.__esModule = true;
var passport = require('passport');
var FacebookTokenStrategy = require('passport-facebook-token');
var cart_service_1 = require("./../../services/cart.service");
var config_1 = require("../../config");
var config = new config_1["default"]();
var cart = new cart_service_1["default"]();
function fbAuthenticate(User, profile, done) {
    User.findOne({
        'facebook.id': profile.id
    })
        .exec()
        .then(function (user) {
        if (user) {
            done(null, user);
        }
        else {
            var newUser = new User({
                provider: 'facebook',
                displayName: profile.displayName,
                email: getFBEmail(profile),
                avatar: getFBPhoto(profile),
                facebook: profile
            });
            newUser.save()
                .then(function (createdUser) {
                // console.log('----- created',createdUser)
                // CREATE A CART FOR USER
                cart.createUserCart({ items: [] }, createdUser._id);
                done(null, createdUser);
            });
        }
    })["catch"](function (err) { return done(err); });
}
function getFBEmail(profile) {
    if (!profile.emails) {
        return null;
    }
    if (!profile.emails.length) {
        return null;
    }
    return profile.emails[0].value;
}
function getFBPhoto(profile) {
    if (!profile.photos) {
        return null;
    }
    if (!profile.photos.length) {
        return null;
    }
    return profile.photos[0].value;
}
function setup(User) {
    passport.use(new FacebookTokenStrategy({
        clientID: config.facebook.appID,
        clientSecret: config.facebook.appSecret
    }, function (accessToken, refreshToken, profile, done) {
        // console.log('---------------', profile);
        return fbAuthenticate(User, profile, done);
    }));
}
exports.setup = setup;
//# sourceMappingURL=passport.facebook.js.map