"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.FeedbackSchema = new mongoose_1.Schema({
    user: { type: ObjectId, ref: 'User' },
    message: { type: String },
    rating: Number,
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});
exports["default"] = mongoose_1.model('Feedback', exports.FeedbackSchema);
//# sourceMappingURL=feedback.model.js.map