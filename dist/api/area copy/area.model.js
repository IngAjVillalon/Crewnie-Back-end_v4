"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.AreaSchema = new mongoose_1.Schema({
    area_code: String,
    area_name: String,
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
// Duplicate the ID field.
exports.AreaSchema.virtual('areaID').get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
exports.AreaSchema.set('toJSON', {
    virtuals: true
});
exports["default"] = mongoose_1.model('Area', exports.AreaSchema);
//# sourceMappingURL=area.model.js.map