"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.ChargeSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    value: { type: Number, required: true },
    type: {
        type: String,
        "enum": ['scheduled_delivery', 'express_delivery']
    },
    isPct: { type: Boolean, "default": false },
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
exports["default"] = mongoose_1.model('Charge', exports.ChargeSchema);
//# sourceMappingURL=charge.model.js.map