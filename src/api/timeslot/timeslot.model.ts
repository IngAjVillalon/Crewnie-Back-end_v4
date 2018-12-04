import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const TimeslotSchema = new Schema({
    start: Number,
    status: { type: Boolean, default: true },
    title: String,
    value: String,

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }
});

// // Duplicate the ID field.
// TimeslotSchema.virtual('timeslotID').get(function(){
//     return this._id.toHexString();
// });
// // Ensure virtual fields are serialised.
// TimeslotSchema.set('toJSON', {
//     virtuals: true
// });

export default model('Timeslot', TimeslotSchema);