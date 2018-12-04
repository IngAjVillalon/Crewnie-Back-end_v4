"use strict";
exports.__esModule = true;
var config_1 = require("../config");
var sgMail = require('@sendgrid/mail');
var config = new config_1["default"]();
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendEmail = function (email, subject, body) {
        sgMail.setApiKey(config.sendGridApiKey);
        var msg = {
            to: email,
            from: 'support@bazardesh.com',
            subject: subject,
            text: body
        };
        sgMail.send(msg);
    };
    return EmailService;
}());
exports["default"] = EmailService;
//# sourceMappingURL=email.service.js.map