"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.NoticeboardSchema = new mongoose_1.Schema({
    imgUrl: String,
    message: { type: String },
    html: String,
    group: { type: String, "default": 'GENERAL', "enum": ['GENERAL', 'OFFER', 'CHARGE'] },
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});
exports["default"] = mongoose_1.model('Noticeboard', exports.NoticeboardSchema);
//# sourceMappingURL=noticeboard.model.js.map