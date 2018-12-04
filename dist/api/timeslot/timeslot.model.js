"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
exports.TimeslotSchema = new mongoose_1.Schema({
    start: Number,
    status: { type: Boolean, "default": true },
    title: String,
    value: String,
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
// // Duplicate the ID field.
// TimeslotSchema.virtual('timeslotID').get(function(){
//     return this._id.toHexString();
// });
// // Ensure virtual fields are serialised.
// TimeslotSchema.set('toJSON', {
//     virtuals: true
// });
exports["default"] = mongoose_1.model('Timeslot', exports.TimeslotSchema);
//# sourceMappingURL=timeslot.model.js.map