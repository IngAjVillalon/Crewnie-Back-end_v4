"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var config_1 = require("../../config");
var config = new config_1["default"]();
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var OrderSchema = new mongoose_1.Schema({
    userID: { type: ObjectId, ref: 'User', required: true },
    cart: {},
    orderNo: { type: String, required: true, "default": 0 },
    deliveryAddress: {},
    deliveryDate: { type: String },
    deliveryInstruction: String,
    orderStatus: { type: String, "default": 'PLACING', "enum": config.orderStatus },
    deliveryTime: { type: String },
    serviceCharge: { type: Number, "default": 0 },
    deliveryType: { type: String, "default": 'SCHEDULED', "enum": config.deliveryTypes },
    paymentID: String,
    paymentMethod: { type: String, "default": 'COD', "enum": config.paymentMethods },
    paymentStatus: Boolean,
    riderID: String,
    transectionID: String,
    couponCode: String,
    coupon: {},
    cartTotal: { type: Number, required: true },
    orderTotal: Number,
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
// Duplicate the ID field.
OrderSchema.virtual('orderID').get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
OrderSchema.set('toJSON', {
    virtuals: true
});
// AUTO INCREAMENT ORDER NO
OrderSchema.pre('save', function (next) {
    var doc = this;
    if (doc.isNew) {
        OrderModel.count({}).then(function (total) {
            // console.log('order count------------', total);
            var orderNo = 'BD00' + (total + 1);
            doc.orderNo = orderNo;
            next();
        });
    }
    else {
        next();
    }
});
var OrderModel = mongoose_1.model('Order', OrderSchema);
exports["default"] = OrderModel;
//# sourceMappingURL=order.model.js.map