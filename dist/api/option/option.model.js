"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.OptionSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    value: { type: mongoose_1.Schema.Types.Mixed, required: true },
    group: {
        type: String,
        "enum": ['default', 'system', 'delivery_time', 'delivery_charge'],
        "default": 'default'
    },
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
exports["default"] = mongoose_1.model('Option', exports.OptionSchema);
//# sourceMappingURL=option.model.js.map