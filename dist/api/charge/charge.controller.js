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
var base_1 = require("../base");
var charge_model_1 = require("./charge.model");
var charge_service_1 = require("../../services/charge.service");
var charService = new charge_service_1["default"]();
var ChargeCtrl = /** @class */ (function (_super) {
    __extends(ChargeCtrl, _super);
    function ChargeCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = charge_model_1["default"];
        _this.getDeliveryCharge = function (req, res) {
            var cartTotal = parseInt(req.query.total);
            // Set joi validation
            if (!cartTotal) {
                return res.status(400).send({ message: 'Invalid cart total' });
            }
            charService.getScheduledDeliveryCharge(cartTotal)
                .then(function (charge) {
                return { charge: charge };
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        return _this;
        // getDeliveryChargeList = (req, res) => {
        //     res.json(charService.getServiceCharges());
        // }
    }
    return ChargeCtrl;
}(base_1["default"]));
exports["default"] = ChargeCtrl;
//# sourceMappingURL=charge.controller.js.map