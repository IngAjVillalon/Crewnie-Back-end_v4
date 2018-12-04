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
var order_model_1 = require("./order.model");
var base_1 = require("./../base");
var product_service_1 = require("../../services/product.service");
var utils_service_1 = require("../../services/utils.service");
var charge_service_1 = require("../../services/charge.service");
var coupon_service_1 = require("../../services/coupon.service");
var datetime_service_1 = require("../../services/datetime.service");
var sms_service_1 = require("../../services/sms.service");
var productService = new product_service_1["default"]();
var utilsService = new utils_service_1["default"]();
var chargeService = new charge_service_1["default"]();
var couponService = new coupon_service_1["default"]();
var datetimeService = new datetime_service_1["default"]();
var smsService = new sms_service_1["default"]();
var OrderCtrl = /** @class */ (function (_super) {
    __extends(OrderCtrl, _super);
    function OrderCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = order_model_1["default"];
        _this.placeUserOrderStep1 = function (req, res) {
            var order = req.body;
            order.userID = req.user._id;
            order.orderStatus = 'PLACING';
            // UPDATE CART PRODUCTS
            productService.updateCartProducts(order.cart)
                .then(function (cart) {
                order.cart = cart;
                return order;
            })
                .then(function (updatedOrder) {
                // FORMAT DELIVERY DATE
                updatedOrder.deliveryDate = datetimeService
                    .bdMoment(updatedOrder.deliveryDate)
                    .format();
                return updatedOrder;
            })
                .then(function (updatedOrder) {
                // CALCULATE SERVICE CHARGE
                return chargeService
                    .calculateServiceCharge(updatedOrder);
            })
                .then(function (updatedOrder) {
                return chargeService.calculateOrderTotal(updatedOrder, { coupon: false });
            })
                .then(function (updatedOrder) {
                // REMOVE UNNECESSARY FIELDS FROM PRODUCTS
                updatedOrder.cart = productService.sanitizeCartAndProducts(updatedOrder.cart);
                // SAVE NEW ORDER
                if (!updatedOrder._id) {
                    var newOrder = new order_model_1["default"](updatedOrder);
                    return newOrder
                        .save();
                }
                else {
                    return _this.updateOrderWithOutCoupon(updatedOrder);
                }
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.placeUserOrderStep2 = function (req, res) {
            order_model_1["default"].findById(req.body._id)
                .exec()
                .then(function (order) {
                order.orderStatus = 'PLACED';
                order.deliveryInstruction = req.body.deliveryInstruction;
                order.paymentMethod = req.body.paymentMethod;
                return _this.updateOrderWithOutCoupon(order);
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.applyCouponToOrder = function (req, res) {
            var order = req.body;
            order_model_1["default"].findById(order._id)
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(function (updatedOrder) {
                updatedOrder.couponCode = order.couponCode;
                return couponService
                    .applyCouponToOrder(updatedOrder);
            })
                .then(function (updatedOrder) {
                return chargeService.calculateOrderTotal(updatedOrder, { coupon: true });
            })
                .then(function (order) {
                var id = order._id;
                delete order._id;
                return order_model_1["default"].findOneAndUpdate({ _id: id }, order, { "new": true })
                    .exec();
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.updateOrderWithOutCoupon = function (order) {
            var id = order._id;
            delete order._id;
            delete order.coupon;
            return order_model_1["default"].findOneAndUpdate({ _id: id }, order, { "new": true })
                .exec()
                .then(function (updatedOrder) {
                return updatedOrder;
            });
        };
        _this.cancelUserOrder = function (req, res) {
            var orderID = req.body._id;
            order_model_1["default"].findById(orderID)
                .then(_this.handleEntityNotFound(res))
                .then(function (order) {
                // CHECK USER IS OWNER
                if (!utilsService.isEntityOwner(req.user._id, order.userID)) {
                    return Promise.reject('Forbidden');
                }
                if (order && (order.orderStatus === 'PLACING' || order.orderStatus === 'PLACED')) {
                    // CANCEL ORDER
                    order.orderStatus = 'CANCELLED';
                    return order.save();
                }
                else {
                    return Promise.reject('Order not found');
                }
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getUserOrders = function (req, res) {
            var userID = req.user._id;
            req.query.where = { userID: userID, orderStatus: { $nin: ['CANCELLED', 'PLACING'] } };
            req.query.sort = '-createdAt';
            _this.index(req, res);
        };
        _this.getByID = function (req, res) {
            order_model_1["default"].findOne({
                _id: req.params.id
            })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getAdminOrders = function (req, res) {
            req.query.sort = '-createdAt';
            _this.indexWithCount(req, res);
        };
        _this.confirmOrderByAdmin = function (req, res) {
            var reqOrder = req.body;
            reqOrder.updatedBy = req.user._id;
            // DELETE CART, CART CAN NOT BE UPDATED HERE
            delete reqOrder.cart;
            order_model_1["default"].findOne({
                _id: req.params.id
            })
                .exec()
                .then(function (order) {
                if (reqOrder.orderStatus === 'CONFIRMED' && order.orderStatus === 'PLACED') {
                    //SEND SMS
                    smsService
                        .sendSms(order.deliveryAddress.delivery_phone, reqOrder.confirmText);
                    // REDUCE PRODUCT STOCK IN **DB**
                    order.cart.items.forEach(function (item) {
                        productService
                            .reduceStock(item.product._id, item.quantity)["catch"](function (e) {
                            console.log('Reduce stock err ----');
                            return Promise.reject(e);
                        });
                    });
                }
                if (reqOrder.orderStatus === 'PLACED' && order.orderStatus === 'CONFIRMED') {
                    // ADD PRODUCT STOCK IN **DB**
                    order.cart.items.forEach(function (item) {
                        productService
                            .addStock(item.product._id, item.quantity)["catch"](function (e) {
                            console.log('Add stock err ----');
                            return Promise.reject(e);
                        });
                    });
                }
                return order;
            })
                .then(_this.handleEntityNotFound(res))
                .then(_this.patchUpdates(reqOrder))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.updateOrderByAdmin = function (req, res) {
            var reqOrder = req.body;
            var orderID = req.params.id;
            // UPDATE CART PRODUCTS
            order_model_1["default"].findById(orderID)
                .exec()
                .then(function (order) {
                if (order.orderStatus === 'PLACED') {
                    return productService.updateCartProducts(reqOrder.cart)
                        .then(function (cart) {
                        reqOrder.cart = cart;
                        // return Object.assign({}, order, reqOrder)
                        return reqOrder;
                    });
                }
                else {
                    throw { message: 'Order status must be PLACED!' };
                }
            })
                .then(function (reqOrder) {
                // CALCULATE SERVICE CHARGE
                return chargeService
                    .calculateServiceCharge(reqOrder);
            })
                .then(function (updatedOrder) {
                return chargeService.calculateOrderTotal(updatedOrder, { coupon: true });
            })
                .then(function (updatedOrder) {
                // REMOVE UNNECESSARY FIELDS FROM PRODUCTS
                updatedOrder.cart = productService.sanitizeCartAndProducts(updatedOrder.cart);
                return order_model_1["default"].findOneAndUpdate({ _id: orderID }, updatedOrder, { "new": true });
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        return _this;
    }
    return OrderCtrl;
}(base_1["default"]));
exports["default"] = OrderCtrl;
//# sourceMappingURL=order.controller.js.map