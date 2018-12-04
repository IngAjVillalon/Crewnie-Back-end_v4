"use strict";
exports.__esModule = true;
var Joi = require("joi");
exports.phoneSignup = {
    body: {
        displayName: Joi.string().required(),
        phoneNumber: Joi.string().min(11).required()
    }
};
exports.emailSignup = {
    body: {
        displayName: Joi.string().required(),
        email: Joi.string().email().required()
    }
};
//# sourceMappingURL=signup.js.map