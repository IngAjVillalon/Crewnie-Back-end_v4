"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.Depertment = new mongoose_1.Schema({
    projectId: { type: String },
    title: { type: String },
    teamLeader: { type: Object },
    members: { type: Object },
    positions: { type: Object },
    leaders: { type: Object },
    leaderList: [String],
    preProduction: [String],
    production: [String],
    postProduction: [String],
    preProductionPositions: { type: Object },
    productionPositions: { type: Object },
    postProductionPositions: { type: Object },
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});
exports["default"] = mongoose_1.model('Depertment', exports.Depertment);
//# sourceMappingURL=department.model.js.map