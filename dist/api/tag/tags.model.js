"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var utils_service_1 = require("../../services/utils.service");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var utils = new utils_service_1["default"]();
exports.TagSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    bengaliName: String,
    slug: { type: String, unique: true },
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
exports.TagSchema.pre('save', function (next) {
    var doc = this;
    if (!doc.slug) {
        doc.slug = utils.stringToSlug(doc.name);
    }
    else {
        doc.slug = utils.stringToSlug(doc.slug);
    }
    next();
});
exports["default"] = mongoose_1.model('Tag', exports.TagSchema);
//# sourceMappingURL=tags.model.js.map