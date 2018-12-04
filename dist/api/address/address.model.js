"use strict";
exports.__esModule = true;
// import * as mongoose from 'mongoose';
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.AddressSchema = new mongoose_1.Schema({
    userID: { type: ObjectId, ref: 'User' },
    user_name: String,
    delivery_address: String,
    delivery_area: String,
    delivery_phone: String,
    phoneVerified: Boolean,
    verificationCode: String,
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
// Duplicate the ID field.
exports.AddressSchema.virtual('addressID').get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
exports.AddressSchema.set('toJSON', {
    virtuals: true
});
exports["default"] = mongoose_1.model('Address', exports.AddressSchema);
//# sourceMappingURL=address.model.js.map