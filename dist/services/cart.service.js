"use strict";
exports.__esModule = true;
var cart_model_1 = require("../api/cart/cart.model");
var CartService = /** @class */ (function () {
    function CartService() {
    }
    CartService.prototype.createUserCart = function (cart, userID) {
        if (cart === void 0) { cart = {}; }
        cart.userID = userID;
        var newCart = new cart_model_1["default"](cart);
        return newCart.save();
    };
    CartService.prototype.getCartTotal = function (cart) {
        var total = 0;
        try {
            cart.items.forEach(function (item) {
                total += item.product.price * item.quantity;
            });
        }
        catch (e) {
            return 0;
        }
        return total;
    };
    return CartService;
}());
exports["default"] = CartService;
//# sourceMappingURL=cart.service.js.map