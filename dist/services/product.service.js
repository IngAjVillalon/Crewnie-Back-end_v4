"use strict";
exports.__esModule = true;
var product_model_1 = require("../api/product/product.model");
var mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.ObjectId;
// interface Cart {
//     items: [{ product: any, quantity: number }]
// }
var ProductService = /** @class */ (function () {
    function ProductService() {
        this.reduceStock = function (productID, quantity) {
            return product_model_1["default"].findById(productID)
                .then(function (product) {
                product.stock = product.stock - quantity;
                // console.log('reduceStock------')
                if (product.stock < 0) {
                    product.stock = 0;
                }
                return product
                    .save()
                    .then(function (res) {
                    // console.log(res);
                    return res;
                });
            })["catch"](function (e) { return e; });
        };
        this.checkStock = function (order) {
        };
        this.addStock = function (productID, quantity) {
            return product_model_1["default"].findById(productID)
                .then(function (product) {
                product.stock = product.stock + quantity;
                return product
                    .save()
                    .then(function (res) {
                    // console.log(res)
                    return res;
                });
            });
        };
        this.sanitizeCartAndProducts = function (cart) {
            cart.items = cart.items.map(function (item) {
                item.product = {
                    _id: item.product._id,
                    productID: item.product._id,
                    imgUrl: item.product.imgUrl,
                    name: item.product.name,
                    price: item.product.price,
                    priceRetail: item.product.priceRetail,
                    unitAmount: item.product.unitAmount,
                    unitName: item.product.unitName,
                    stock: item.product.stock
                };
                return item;
            });
            return cart;
        };
    }
    ProductService.prototype.updateCartProducts = function (cart) {
        if (!cart.items || !cart.items.length) {
            return Promise.reject('Cart is empty');
        }
        // GEN ARRAY OF PRODUCT IDS FROM CART PRODUCTS
        var productIDs = cart.items.map(function (item) {
            return mongoose.Types.ObjectId(item.product._id);
        });
        // GET PRODUCTS BY IDS
        return product_model_1["default"].find({
            '_id': { $in: productIDs }
        }).exec()
            .then(function (latestProducts) {
            var hasStockOut = false;
            cart.items = cart.items.map(function (item) {
                item.product = latestProducts
                    .find(function (lp) { return lp._id.toHexString() === item.product._id; });
                return item;
            })
                // Check DB has requested product
                .filter(function (item) { return item.product; })
                // Check stock
                .map(function (item) {
                if (item.product.stock <= 0) {
                    hasStockOut = true;
                }
                return item;
            });
            if (hasStockOut) {
                throw {
                    stockOut: true,
                    message: 'One or more products just got stocked out! Please check your cart.',
                    cart: cart
                };
            }
            else {
                return cart;
            }
        });
    };
    return ProductService;
}());
exports["default"] = ProductService;
//# sourceMappingURL=product.service.js.map