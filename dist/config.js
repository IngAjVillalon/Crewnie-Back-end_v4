"use strict";
// Could not use import as this file is being shared with client
exports.__esModule = true;
// interface systemOptions {}
var Config = /** @class */ (function () {
    function Config() {
        this.secrets = { session: '098bd890' };
        this.smsEnabled = true;
        this.emailEnabled = true;
        this.mongoURL = 'mongodb://crewniedb:Jolpori23@ds119394.mlab.com:19394/crewnie';
        // mongoURL = 'mongodb://mongo:27017/bddb';
        this.facebook = {
            appID: '598992633816887',
            appSecret: '8ee3933df437c092f62d53780a2fa0be'
        };
        this.sendGridApiKey = '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';
        // onnorokom = {
        //   username: '01737899245',
        //   password: '8212',
        //   // API: `https://api2.onnorokomsms.com/HttpSendSms.ashx?op=OneToOne&type=TEXT&username=01737899245&password=8212`
        // };
        this.userRoles = ['SA', 'Admin', 'User'];
        this.deliveryTypes = ['SCHEDULED', 'EXPRESS'];
        this.orderStatus = ['PLACING', 'PLACED', 'CONFIRMED', 'PACKED', 'ONTHEWAY', 'DELIVERED', 'CANCELLED', 'RETURNED'];
        this.paymentMethods = ['COD', 'BKASH', 'ROCKET'];
        this.systemOptions = {
            express_delivery_first_hour: 'express_delivery_first_hour',
            express_delivery_last_hour: 'express_delivery_last_hour',
            scheduled_delivery_last_hour: 'scheduled_delivery_last_hour'
        };
        // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role,
        // where as admin will have the role of guest+user+vendor+manager+admin
        this.forgotPasswordEmail = function (body) {
            return {
                from: 'passwordreset@bazardesh.com',
                to: body.email,
                subject: 'bazardesh Password Reset Request',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://' + body.host + '/account/reset-password/' + body.token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };
        };
        this.resetPasswordEmail = function (body) {
            return {
                from: 'passwordreset@bazardesh.com',
                to: body.email,
                subject: 'bazardesh Password Changed',
                text: 'Hello,\n\n' +
                    'This is a confirmation that the password for your account ' + body.to + ' has just been changed.\n'
            };
        };
        this.orderPlacedEmail = function (body) {
            return {
                from: 'SA <superadmin@bazardesh.com>',
                to: body.to,
                subject: 'Order Placed Successfully',
                text: 'Order No: ' + body.orderNo
                    + '\n Status: ' + body.status
                    + '\n\n Payment Method: ' + body.payment_method
                    + '\n\n Payment ID: ' + body.id
                    + '\n Amount: ' + body.amount.total + ' ' + body.amount.currency
                    + '\n\n Address: \n Name: ' + body.address.recipient_name
                    + '\n Line: ' + body.address.line1
                    + '\n City: ' + body.address.city
                    + '\n State: ' + body.address.state
                    + '\n Zip: ' + body.address.postal_code
            };
        };
        this.orderUpdatedEmail = function (body) {
            return {
                from: 'SA <superadmin@bazardesh.com>',
                to: body.to,
                subject: 'Your Order Status Updated',
                text: 'Order No: ' + body.orderNo
                    + '\n Status: ' + body.status
                    + '\n\n Payment Method: ' + body.payment_method
                    + '\n\n Payment ID: ' + body.id
                    + '\n Amount: ' + body.amount.total + ' ' + body.amount.currency
                    + '\n\n Address: \n Name: ' + body.address.recipient_name
                    + '\n Line: ' + body.address.line1
                    + '\n City: ' + body.address.city
                    + '\n State: ' + body.address.state
                    + '\n Zip: ' + body.address.postal_code
            };
        };
        this.demo = false;
        this.currency = {
            code: 'USD',
            shop_currency: 'INR',
            symbol: 'Rs ',
            exchange_rate: '0.015' // Paypal currency code(USD) / Shop currency (INR) ***  exchange_rate should not be 0 else it will generate divided by 0 error
        };
    }
    return Config;
}());
exports["default"] = Config;
//# sourceMappingURL=config.js.map