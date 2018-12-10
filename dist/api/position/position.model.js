"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.Position = new mongoose_1.Schema({
    projectId: { type: String },
    departmentId: { type: String },
    index: { type: Number },
    title: { type: String },
    location: { type: String },
    salary: { type: String },
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    duration: { type: String },
    vacancy: { type: Number },
    startDate: { type: Date },
    endDate: { type: Date },
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});
exports["default"] = mongoose_1.model('Position', exports.Position);
//# sourceMappingURL=position.model.js.map