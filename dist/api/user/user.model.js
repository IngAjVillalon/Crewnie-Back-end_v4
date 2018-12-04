"use strict";
exports.__esModule = true;
var crypto = require("crypto");
var mongoose_1 = require("mongoose");
var config_1 = require("../../config");
// import AuditLog from '../auditLog/auditLog.model';
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var ObjectId = mongoose.Schema.ObjectId;
var authTypes = ['facebook', 'google'];
var config = new config_1["default"]();
var UserSchema = new mongoose_1.Schema({
    displayName: String,
    firstName: String,
    lastName: String,
    provider: String,
    email: {
        type: String,
        lowercase: true,
        validate: {
            isAsync: true,
            validator: function (value, cb) {
                this.constructor.findOne({ email: value }).exec()
                    .then(function (user) {
                    if (user) {
                        return cb(false);
                    }
                    return cb(true);
                })["catch"](function (err) {
                    // done
                    throw err;
                });
            },
            // Default error message, overridden by 2nd argument to `cb()` above
            message: 'Email already exists!'
        }
    },
    role: {
        type: String,
        "enum": config.userRoles,
        "default": 'User'
    },
    password: {
        type: String,
        required: function () {
            if (authTypes.indexOf(this.provider) === -1) {
                return true;
            }
            else {
                return false;
            }
        }
    },
    resetPasswordToken: String,
    resetPasswordExpires: String,
    salt: String,
    title: String,
    phoneNumber: {
        type: String,
        validate: {
            isAsync: true,
            validator: function (value, cb) {
                this.constructor
                    .findOne({ phoneNumber: value })
                    .exec()
                    .then(function (user) {
                    // console.log('-----', user)
                    if (user) {
                        return cb(false);
                    }
                    return cb(true);
                })["catch"](function (err) {
                    // done
                    throw err;
                });
            },
            // Default error message, overridden by 2nd argument to `cb()` above
            message: 'Phone number already exists!'
        }
    },
    phoneVerificationCode: String,
    phoneVerified: { type: Boolean, "default": false },
    avatar: String,
    active: { type: Boolean, "default": true },
    accountLockedOut: { type: Boolean, "default": false },
    restrictedBy: String,
    facebook: {},
    twitter: {},
    google: {},
    address: String
});
/**
 * Virtuals
 */
// UserSchema.virtual('displayName').get(function(){
//   return this.firstName + ' ' + this.lastName;
// });
// // Ensure virtual fields are serialised.
// UserSchema.set('toJSON', {
//   virtuals: true
// });
// Public profile information
UserSchema
    .virtual('profile')
    .get(function () {
    return {
        name: this.name,
        role: this.role
    };
});
// Non-sensitive info we'll be putting in the token
UserSchema
    .virtual('token')
    .get(function () {
    return {
        _id: this._id,
        role: this.role
    };
});
/**
 * Validations
 */
// Validate empty email
UserSchema
    .path('email')
    .validate(function (email) {
    if (authTypes.indexOf(this.provider) !== -1) {
        return true;
    }
    return email.length;
}, 'Email cannot be blank');
// Validate empty password
UserSchema
    .path('password')
    .validate(function (password) {
    if (authTypes.indexOf(this.provider) !== -1) {
        return true;
    }
    return password.length;
}, 'Password cannot be blank');
var validatePresenceOf = function (value) {
    return value && value.length;
};
UserSchema
    .pre('save', updatePassword);
// UserSchema
//   .pre('update', updatePassword);
function updatePassword(next) {
    var _this = this;
    console.log('pre save user ----------------');
    if (!this.isModified('password')) {
        console.log('pass not modified----------------');
        return next();
    }
    console.log('pass modified----------------');
    if (!validatePresenceOf(this.password)) {
        if (authTypes.indexOf(this.provider) === -1) {
            return next(new Error('Invalid password'));
        }
        else {
            return next();
        }
    }
    // Make salt with a callback
    this.makeSalt(function (saltErr, salt) {
        if (saltErr) {
            return next(saltErr);
        }
        _this.salt = salt;
        _this.encryptPassword(_this.password, function (encryptErr, hashedPassword) {
            if (encryptErr) {
                return next(encryptErr);
            }
            _this.password = hashedPassword;
            return next();
        });
    });
}
// UserSchema.post('save', function () {
//   let opType = 'New';
//   let uid = this.createdBy;
//   if (!this.wasNew) {
//     opType = 'Edit';
//     uid = this.updatedBy;
//   }
//   const auditLog = new AuditLog({
//     collectionName: 'User',
//     operationType: opType,
//     createdBy: uid
//   });
//   auditLog.save();
// });
UserSchema.methods = {
    authenticate: function (password, callback) {
        var _this = this;
        if (!callback) {
            return this.password === this.encryptPassword(password);
        }
        this.encryptPassword(password, function (err, pwdGen) {
            if (err) {
                return callback(err);
            }
            if (_this.password === pwdGen) {
                return callback(null, true);
            }
            else {
                return callback(null, false);
            }
        });
    },
    makeSalt: function (byteSize, callback) {
        var defaultByteSize = 16;
        if (typeof arguments[0] === 'function') {
            callback = arguments[0];
            byteSize = defaultByteSize;
        }
        else if (typeof arguments[1] === 'function') {
            callback = arguments[1];
        }
        else {
            throw new Error('Missing Callback');
        }
        if (!byteSize) {
            byteSize = defaultByteSize;
        }
        return crypto.randomBytes(byteSize, function (err, salt) {
            if (err) {
                return callback(err);
            }
            else {
                return callback(null, salt.toString('base64'));
            }
        });
    },
    encryptPassword: function (password, callback) {
        if (!password || !this.salt) {
            if (!callback) {
                return null;
            }
            else {
                return callback('Missing password or salt');
            }
        }
        var defaultIterations = 10000;
        var defaultKeyLength = 64;
        var salt = new Buffer(this.salt, 'base64');
        if (!callback) {
            return crypto.pbkdf2Sync(password, salt, defaultIterations, defaultKeyLength, 'sha512')
                .toString('base64');
        }
        return crypto.pbkdf2(password, salt, defaultIterations, defaultKeyLength, 'sha512', function (err, key) {
            if (err) {
                return callback(err);
            }
            else {
                return callback(null, key.toString('base64'));
            }
        });
    }
};
exports["default"] = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=user.model.js.map