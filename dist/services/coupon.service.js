"use strict";
exports.__esModule = true;
var coupon_model_1 = require("../api/coupon/coupon.model");
var order_model_1 = require("../api/order/order.model");
var datetime_service_1 = require("./datetime.service");
var cart_service_1 = require("./cart.service");
var dateTimeService = new datetime_service_1["default"]();
var cartService = new cart_service_1["default"]();
var CouponService = /** @class */ (function () {
    function CouponService() {
        var _this = this;
        this.applyCouponToOrder = function (order) {
            if (order.coupon) {
                return Promise.reject({ message: 'You already applied a coupon' });
            }
            return coupon_model_1.Coupon
                .findOne({ code: order.couponCode })
                .exec()
                .then(function (coupon) {
                if (!coupon) {
                    throw { message: 'Coupon not found!' };
                }
                else {
                    return coupon;
                }
            })
                .then(function (coupon) {
                return _this.isCouponExpired(coupon, order.createdAt);
            })
                .then(function (coupon) {
                return _this.isMaxUsesCrossed(coupon);
            })
                .then(function (coupon) {
                return _this.isMaxUsesUserCrossed(coupon, order.userID);
            })
                .then(function (coupon) {
                return _this.isValidOrderTotal(order, coupon);
            })
                .then(function (coupon) {
                return coupon_model_1.Coupon
                    .findOneAndUpdate({ _id: coupon._id }, { uses: coupon.uses + 1 })
                    .exec();
            })
                .then(function (coupon) {
                order.coupon = coupon;
                return order;
            });
        };
        this.isMaxUsesCrossed = function (coupon) {
            if (coupon.uses < coupon.maxUses) {
                return Promise.resolve(coupon);
            }
            else {
                return Promise.reject({ message: 'Coupon maximum uses limit crossed!' });
            }
        };
        this.isMaxUsesUserCrossed = function (coupon, userID) {
            return order_model_1["default"]
                .find({
                'userID': userID,
                'coupon._id': coupon._id
            })
                .exec()
                .then(function (orders) {
                console.log('total orders----', orders.length);
                if (orders.length < coupon.maxUsesUser) {
                    return coupon;
                }
                else {
                    throw { message: 'Your uses limit of this coupon crossed!' };
                }
            });
        };
        this.isCouponExpired = function (coupon, compareDate) {
            coupon.expiresAt = dateTimeService.bdMoment(coupon.expiresAt);
            coupon.startsAt = dateTimeService.bdMoment(coupon.startsAt);
            var now = compareDate ? dateTimeService.bdMoment(compareDate) : dateTimeService.bdMoment();
            // console.log(coupon);
            if (now.isSameOrAfter(coupon.expiresAt, 'second')) {
                return Promise.reject({ message: 'Coupon expired!' });
            }
            if (now.isBefore(coupon.startsAt, 'second')) {
                return Promise.reject({ message: 'Coupon has not published yet!' });
            }
            return Promise.resolve(coupon);
        };
        this.isValidOrderTotal = function (order, coupon) {
            // cart total
            var total = cartService.getCartTotal(order.cart);
            // service charge
            if (order.serviceCharge) {
                total = total + order.serviceCharge;
            }
            if (total < coupon.minOrderTotal) {
                return Promise.reject({ message: "Failed! Order total has to be atleast \u09F3 " + coupon.minOrderTotal + " for this coupon." });
            }
            else {
                return Promise.resolve(coupon);
            }
        };
    }
    return CouponService;
}());
exports["default"] = CouponService;
//# sourceMappingURL=coupon.service.js.map