"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.CategorySchema = new mongoose_1.Schema({
    categoryTags: [String],
    categoryTitle: String,
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
// Duplicate the ID field.
exports.CategorySchema.virtual('categoryID').get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
exports.CategorySchema.set('toJSON', {
    virtuals: true
});
exports["default"] = mongoose_1.model('Category', exports.CategorySchema);
//# sourceMappingURL=area.model.js.map