"use strict";
exports.__esModule = true;
var utils_service_1 = require("./utils.service");
var cart_service_1 = require("./cart.service");
var charge_model_1 = require("../api/charge/charge.model");
var utilsService = new utils_service_1["default"]();
var cartService = new cart_service_1["default"]();
var ChargeService = /** @class */ (function () {
    function ChargeService() {
        this.getScheduledDeliveryCharge = function (cartTotal) {
            return charge_model_1["default"]
                .find({ type: 'scheduled_delivery' })
                .exec()
                .then(function (charges) {
                var chargesObj = {};
                charges.forEach(function (charge) {
                    chargesObj[charge.name] = charge.value;
                });
                if (cartTotal < 100) {
                    return chargesObj.lt100;
                }
                else if (cartTotal < 200) {
                    return chargesObj.lt200;
                }
                else if (cartTotal < 300) {
                    return chargesObj.lt300;
                }
                else if (cartTotal < 400) {
                    return chargesObj.lt400;
                }
                else if (cartTotal < 500) {
                    return chargesObj.lt500;
                }
                else if (cartTotal >= 500) {
                    return chargesObj.gt500;
                }
            });
        };
        this.calculateOrderTotal = function (order, options) {
            if (options === void 0) { options = {}; }
            // cart total
            var total = cartService.getCartTotal(order.cart);
            // service charge
            if (order.serviceCharge) {
                total = total + order.serviceCharge;
            }
            // coupon
            if (order.coupon && options.coupon) {
                if (order.coupon.isFixed) {
                    total = total - order.coupon.discountAmount;
                }
                else {
                    var discount = total * (order.coupon.discountAmount / 100);
                    total = total - discount;
                }
            }
            order.orderTotal = total;
            return Promise.resolve(order);
        };
    }
    ChargeService.prototype.calculateServiceCharge = function (order) {
        var cart = order.cart;
        var cartTotal = cartService.getCartTotal(cart);
        // console.log('cart total-----', cartTotal)
        if (!cartTotal) {
            return Promise.reject({ message: 'Invalid cart total!' });
        }
        order.cartTotal = cartTotal;
        if (order.deliveryType === 'SCHEDULED') {
            return this.getScheduledDeliveryCharge(cartTotal)
                .then(function (charge) {
                order.serviceCharge = charge;
                return order;
            });
        }
        else if (order.deliveryType === 'EXPRESS') {
            return this.getExpressDeliveryCharge()
                .then(function (charge) {
                order.serviceCharge = charge.value;
                // console.log()
                return order;
            });
        }
        else {
            return Promise.reject({ message: 'Delivery Type not defined!' });
        }
    };
    ChargeService.prototype.getExpressDeliveryCharge = function () {
        return charge_model_1["default"]
            .findOne({ type: 'express_delivery' })
            .exec();
    };
    return ChargeService;
}());
exports["default"] = ChargeService;
//# sourceMappingURL=charge.service.js.map