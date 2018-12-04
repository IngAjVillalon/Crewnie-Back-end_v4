"use strict";
exports.__esModule = true;
var passport = require('passport');
var passport_local_1 = require("passport-local");
// Passport middleware
function localAuthenticate(User, username, password, done) {
    // console.log('local authenticate ------');
    User.findOne({
        phoneNumber: username.toLowerCase()
    }).exec()
        .then(function (user) {
        // If user is found by phone
        if (user) {
            // is authenticated
            if (user.authenticate(password)) {
                // console.log('passed');
                done(null, user);
                return Promise.resolve('done');
            }
            else {
                // not authenticated
                done(null, false, { message: 'Invalid credential.' });
                return Promise.resolve('done');
            }
        }
        else {
            // Not found by phone, search by email
            return User.findOne({ email: username.toLowerCase() }).exec();
        }
    })
        .then(function (user) {
        // console.log('passport email -----', user)
        if (user === 'done') {
            return;
        }
        if (user && user.authenticate(password)) {
            // Found by email and authenticated
            return done(null, user);
        }
        else {
            // FAILED
            return done(null, false, { message: 'Invalid credential.' });
        }
    })["catch"](function (err) { return done(err); });
}
function setup(User /*, config*/) {
    passport.use(new passport_local_1.Strategy({
        usernameField: 'username',
        passwordField: 'password' // this is the virtual field on the model
    }, function (username, password, done) {
        return localAuthenticate(User, username, password, done);
    }));
}
exports.setup = setup;
//# sourceMappingURL=passport.local.js.map