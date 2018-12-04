"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_service_1 = require("../../services/utils.service");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var utils = new utils_service_1["default"]();
exports.CategorySchema = new mongoose_1.Schema({
    // parentID: { type: ObjectId, ref: 'Category'},
    name: { type: String, required: true },
    bengaliName: String,
    slug: { type: String, unique: true },
    tags: [{ type: ObjectId, ref: 'Tag' }],
    imgUrl: String,
    position: { type: Number, "default": 0 },
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
// PRE SAVE CHECK -- parentID can not be own _id !!!!!!!!!!
exports.CategorySchema.pre('save', function (next) {
    var doc = this;
    if (!doc.slug) {
        doc.slug = utils.stringToSlug(doc.name);
    }
    else {
        doc.slug = utils.stringToSlug(doc.slug);
    }
    next();
});
// Duplicate the ID field.
// CategorySchema.virtual('categoryID').get(function() {
//     return this._id.toHexString();
// });
// Ensure virtual fields are serialised.
// CategorySchema.set('toJSON', {
//     virtuals: true
// });
exports["default"] = mongoose_1.model('Category', exports.CategorySchema);
//# sourceMappingURL=category.model.js.map