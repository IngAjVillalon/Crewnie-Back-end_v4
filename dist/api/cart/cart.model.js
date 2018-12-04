"use strict";
exports.__esModule = true;
// import * as mongoose from 'mongoose';
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.CartSchema = new mongoose_1.Schema({
    // cartID: {type: ObjectId, auto: true},
    userID: { type: ObjectId, ref: 'User' },
    items: [{ product: mongoose_1.Schema.Types.Mixed, quantity: Number }],
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
// Duplicate the ID field.
exports.CartSchema.virtual('cartID').get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
exports.CartSchema.set('toJSON', {
    virtuals: true
});
exports["default"] = mongoose_1.model('Cart', exports.CartSchema);
//# sourceMappingURL=cart.model.js.map