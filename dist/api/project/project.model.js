"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.ProjectSchema = new mongoose_1.Schema({
    creatorId: { type: String },
    private: { type: Boolean },
    title: { type: String },
    type: { type: String },
    coverPhotoUrl: { type: String },
    agency: { type: String },
    genras: [String],
    startDate: { type: Date, "default": Date.now },
    endDate: { type: Date, "default": Date.now },
    categories: [String],
    hasUnion: { type: Boolean },
    unions: [String],
    departments: { type: Object },
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});
exports["default"] = mongoose_1.model('Project', exports.ProjectSchema);
//# sourceMappingURL=project.model.js.map