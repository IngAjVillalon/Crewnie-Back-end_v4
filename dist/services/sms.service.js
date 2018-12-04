"use strict";
exports.__esModule = true;
// import Config from '../config';
var axios = require('axios');
// const config = new Config();
var SmsService = /** @class */ (function () {
    function SmsService() {
    }
    SmsService.prototype.sendSms = function (mobile, text) {
        var url = "https://api2.onnorokomsms.com/HttpSendSms.ashx?op=OneToOne&type=TEXT&mobile=" + mobile + "&smsText=" + text + "&username=01737899245&password=8212&maskName=&campaignName=Register";
        console.log(text);
        // const url = `${}&mobile=${mobile}&smsText=${text}`;
        axios.get(url)
            .then(function (response) {
            console.log('onnorokom response---------', response.data); // 200
            // console.log(response.headers['content-type']) // 'image/png'
        })["catch"](function (err) {
            console.log('onnorokom error ---------', err);
        });
    };
    return SmsService;
}());
exports["default"] = SmsService;
//# sourceMappingURL=sms.service.js.map