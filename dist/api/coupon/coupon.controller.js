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
var coupon_model_1 = require("./coupon.model");
var coupon_service_1 = require("../../services/coupon.service");
var couponService = new coupon_service_1["default"]();
var CouponCtrl = /** @class */ (function (_super) {
    __extends(CouponCtrl, _super);
    function CouponCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = coupon_model_1.Coupon;
        _this.getCouponInfo = function (req, res) {
            coupon_model_1.Coupon
                .findOne({ code: req.params.code })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError);
        };
        return _this;
    }
    return CouponCtrl;
}(base_1["default"]));
exports["default"] = CouponCtrl;
//# sourceMappingURL=coupon.controller.js.map