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
var user_model_1 = require("./user.model");
var base_1 = require("./../base");
var config_1 = require("../../config");
// import * as crypto from 'crypto';
// import * as _ from 'lodash';
// import * as mailer from '../sendmail/send';
// import * as helper from './../../components/helper';
var auth_service_1 = require("./../../auth/auth.service");
var sms_service_1 = require("./../../services/sms.service");
var email_service_1 = require("./../../services/email.service");
var cart_service_1 = require("./../../services/cart.service");
var auth = new auth_service_1["default"]();
var config = new config_1["default"]();
var sms = new sms_service_1["default"]();
var emailService = new email_service_1["default"]();
var cart = new cart_service_1["default"]();
var UsersCtrl = /** @class */ (function (_super) {
    __extends(UsersCtrl, _super);
    function UsersCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = user_model_1["default"];
        _this.validationError = function (res, statusCode) {
            statusCode = statusCode || 422;
            return function (err) {
                // console.log('ERR', err);
                if (err.errors && err.errors.email && err.errors.email.message) {
                    err = err.errors.email;
                }
                console.log('ERR', err);
                // if (err.errors && err.errors.email && err.errors.email.message) {
                //     err = err.errors.email;
                // }
                return res.status(statusCode).json(err);
            };
        };
        _this.handleError = function (res, statusCode) {
            statusCode = statusCode || 500;
            return function (err) {
                return res.status(statusCode).send(err);
            };
        };
        _this.hashPassword = function (user, newPassword) {
            return new Promise(function (resolve, reject) {
                user.password = newPassword;
                user.makeSalt(function (saltErr, salt) {
                    if (saltErr) {
                        return reject(saltErr);
                    }
                    user.salt = salt;
                    user.encryptPassword(user.password, function (encryptErr, hashedPassword) {
                        if (encryptErr) {
                            return reject(encryptErr);
                        }
                        user.password = hashedPassword;
                        return resolve(user);
                    });
                });
            });
        };
        /*
        * Creates a new user
        */
        _this.phoneSignUp = function (req, res) {
            var newUser = new user_model_1["default"](req.body);
            var randomPass = auth_service_1["default"].genPassCode();
            newUser.password = randomPass;
            newUser.role = 'User';
            newUser.save()
                .then(function (user) {
                // console.log('user', user);
                sms.sendSms(user.phoneNumber, 'Your Bazardesh account password is ' + randomPass);
                // var token = AuthService.signToken(user);
                // CREATE A CART FOR USER
                cart.createUserCart({ items: [] }, user._id);
                res
                    .status(200)
                    .json({ message: 'Sign up successful. Check your phone inbox.' });
            })["catch"](function (err) {
                if (err.errors && err.errors.phoneNumber && err.errors.phoneNumber.message) {
                    err = err.errors.phoneNumber.message;
                }
                res.status(400).json({ message: err });
            });
        };
        _this.emailSignUp = function (req, res) {
            var newUser = new user_model_1["default"](req.body);
            var randomPass = auth_service_1["default"].genPassCode();
            newUser.password = randomPass;
            newUser.role = 'User';
            newUser.save()
                .then(function (user) {
                // Send email here
                console.log('Your Bazardesh account password is ' + randomPass);
                emailService.sendEmail(user.email, 'Bazardesh account password', 'Your Bazardesh account password is ' + randomPass);
                // CREATE A CART FOR USER
                cart.createUserCart({ items: [] }, user._id);
                res.status(200)
                    .json({ message: 'Sign up successful. Check your email inbox.' });
            })["catch"](function (err) {
                if (err.errors && err.errors.email && err.errors.email.message) {
                    err = err.errors.email.message;
                }
                res.status(422).json({ message: err });
            });
        };
        /**
         * Change a users password
         */
        _this.changePassword = function (req, res) {
            var userId = req.user._id;
            var oldPass = String(req.body.oldPassword);
            var newPass = String(req.body.newPassword);
            return user_model_1["default"].findById(userId).exec()
                .then(function (user) {
                if (!user) {
                    return res.status(404).send({ message: 'User not found!' });
                }
                if (user.authenticate(oldPass)) {
                    return _this.hashPassword(user, newPass)
                        .then(function (updatedUser) {
                        return user_model_1["default"].update({ _id: userId }, updatedUser).exec();
                    })
                        .then(function () {
                        return res.status(200).send({ message: 'Password changed successfully' });
                    })["catch"](_this.handleError(res));
                }
                else {
                    return res.status(403).send({ message: 'Incorrect current password!' });
                }
            });
        };
        _this.resetPassword = function (req, res) {
            var phoneNumber = req.body.phoneNumber;
            var email = req.body.email;
            var randomPass = auth_service_1["default"].genPassCode();
            var isEmail = !!email;
            var UserQuery;
            if (email) {
                UserQuery = user_model_1["default"].findOne({ email: email });
            }
            else if (phoneNumber) {
                UserQuery = user_model_1["default"].findOne({ phoneNumber: phoneNumber });
            }
            else {
                return res.status(400).send({ message: 'Bad data!' });
            }
            UserQuery
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(function (user) {
                return new Promise(function (resolve, reject) {
                    user.password = randomPass;
                    user.makeSalt(function (saltErr, salt) {
                        if (saltErr) {
                            return reject(saltErr);
                        }
                        user.salt = salt;
                        user.encryptPassword(user.password, function (encryptErr, hashedPassword) {
                            if (encryptErr) {
                                return reject(encryptErr);
                            }
                            user.password = hashedPassword;
                            return resolve(user);
                        });
                    });
                });
            })
                .then(function (updatedUser) {
                return user_model_1["default"].update({ _id: updatedUser._id }, updatedUser).exec();
            })
                .then(function (updatedUser) {
                var userMessage = 'Your Bazardesh account password is ' + randomPass;
                console.log(userMessage);
                if (isEmail) {
                    // send email
                    emailService.sendEmail(email, 'Bazardesh account password', userMessage);
                    return {
                        message: 'New password has been sent to ' + email
                    };
                }
                else {
                    // send sms
                    sms.sendSms(phoneNumber, userMessage);
                    return {
                        message: 'New password has been sent to ' + phoneNumber
                    };
                }
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.addUserByAdmin = function (req, res) {
            var newUser = new user_model_1["default"](req.body);
            newUser.role = 'User';
            newUser.password = auth_service_1["default"].genPassCode();
            newUser.save()
                .then(function (user) {
                return user_model_1["default"].findOne({ phoneNumber: user.phoneNumber }).exec();
            })
                .then(function (user) {
                res
                    .status(200)
                    .json(user);
            })["catch"](function (err) {
                if (err.errors && err.errors.phoneNumber && err.errors.phoneNumber.message) {
                    err = err.errors.phoneNumber.message;
                }
                res.status(400).json({ message: err });
            });
        };
        _this.updateUserByAdmin = function (req, res) {
            if (req.body.role === 'User') {
                user_model_1["default"].update({ _id: req.body._id }, req.body)
                    .exec()
                    .then(function (user) {
                    res.json(user);
                })["catch"](function (e) {
                    res.status(500).json(e);
                });
            }
            else {
                res.status(401).send('Invalid user role');
            }
        };
        _this.getUsersByPhoneByAdmin = function (req, res) {
            req.query.where = {
                $or: [
                    { phoneNumber: { $regex: req.query.phoneNumber, $options: 'i' } }
                ]
            };
            // {phoneNumber: req.query.phoneNumber}
            return _this.index(req, res);
        };
        /**
         * Get my info
         */
        _this.profile = function (req, res, next) {
            var userId = req.user._id;
            console.log('profile');
            return user_model_1["default"].findOne({ _id: userId }, '-salt -password')
                .exec()
                .then(function (user) {
                if (!user) {
                    return res.status(401).end();
                }
                return res.json(user);
            })["catch"](function (err) { return next(err); });
        };
        // For SA
        _this.getUsersSA = function (req, res) {
            req.query.select = '-password -salt';
            _this.indexWithCount(req, res);
        };
        /**
         * Authentication callback
         */
        _this.authCallback = function (req, res) {
            res.redirect('/');
        };
        return _this;
    }
    return UsersCtrl;
}(base_1["default"]));
exports["default"] = UsersCtrl;
// Replace search with index
// Replace users with index(where: role: 'user')
//# sourceMappingURL=user.controller.js.map