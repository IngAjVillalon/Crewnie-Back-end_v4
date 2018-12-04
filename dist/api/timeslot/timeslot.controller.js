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
var timeslot_model_1 = require("./timeslot.model");
var base_1 = require("./../base");
var moment = require("moment-timezone");
var option_service_1 = require("../../services/option.service");
var datetime_service_1 = require("../../services/datetime.service");
var config_1 = require("../../config");
var optionService = new option_service_1["default"]();
var datetimeService = new datetime_service_1["default"]();
var config = new config_1["default"]();
var TimeslotCtrl = /** @class */ (function (_super) {
    __extends(TimeslotCtrl, _super);
    function TimeslotCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = timeslot_model_1["default"];
        _this.getDeliverySlotsByDate = function (req, res) {
            if (!req.params.date) {
                res.status(400).send('Invalid date');
            }
            var date;
            try {
                date = datetimeService.bdMoment(req.params.date);
            }
            catch (e) {
                res.status(400).send('Invalid date');
            }
            timeslot_model_1["default"].find({ active: true })
                .sort('start')
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(function (timeSlots) {
                var currentDate = datetimeService.bdMoment();
                // console.log({
                //     isSame: date.isSame(currentDate, 'day'),
                //     isAfter: date.isAfter(currentDate, 'day'),
                //     isbefore: date.isBefore(currentDate, 'day'),
                // });
                if (date.isSame(currentDate, 'day')) {
                    return datetimeService.getTodayDeliverySlots(timeSlots);
                }
                else if (date.isAfter(currentDate, 'day')) {
                    return timeSlots;
                }
                else if (date.isBefore(currentDate, 'day')) {
                    return [];
                }
                else {
                    return Promise.reject('Invalid time');
                }
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getByID = function (req, res) {
            timeslot_model_1["default"].findOne({
                _id: req.params.id
            })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.updateByID = function (req, res) {
            if (req.body._id) {
                delete req.body._id;
            }
            req.body.updatedBy = req.user._id;
            timeslot_model_1["default"].findOne({
                _id: req.params.id
            })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.patchUpdates(req.body))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getExpressTimeSlot = function (req, res) {
            var slotStart = datetimeService.bdMoment().format('LT');
            var slotEnd = datetimeService.bdMoment().add(90, 'minutes').format('LT');
            optionService
                .getOptions()
                .then(function (options) {
                // console.log('------------',options, config.systemOptions)
                var firstHour = options[config.systemOptions.express_delivery_first_hour];
                var lastHour = options[config.systemOptions.express_delivery_last_hour];
                var currentHour = datetimeService.bdMoment().hours();
                if (currentHour >= lastHour || currentHour < firstHour) {
                    return { message: 'Express delivery is only available between ' +
                            moment(firstHour, 'H').format('ha') + ' to ' +
                            moment(lastHour, 'H').format('ha') };
                }
                else {
                    return { schedule_time: slotStart + ' - ' + slotEnd + ' (Exp)' };
                }
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        return _this;
    }
    return TimeslotCtrl;
}(base_1["default"]));
exports["default"] = TimeslotCtrl;
//# sourceMappingURL=timeslot.controller.js.map