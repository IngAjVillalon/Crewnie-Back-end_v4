"use strict";
exports.__esModule = true;
var moment = require("moment-timezone");
var DatetimeService = /** @class */ (function () {
    function DatetimeService() {
        var _this = this;
        this.timezone = 'Asia/Dhaka';
        this.bdMoment = function (date) {
            return moment(date).tz(_this.timezone);
        };
        this.getTodayDeliverySlots = function (timeSlots) {
            var currentTime = _this.bdMoment().hours();
            return timeSlots.filter(function (slot) {
                slot.status = currentTime < slot.start;
                return slot.status;
            });
        };
        this.makeDeliverySlotsDisable = function (timeSlots) {
            return timeSlots.map(function (slot) {
                slot.status = false;
                return slot;
            });
        };
    }
    return DatetimeService;
}());
exports["default"] = DatetimeService;
//# sourceMappingURL=datetime.service.js.map