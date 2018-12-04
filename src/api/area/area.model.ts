import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const AreaSchema = new Schema({
    area_code: String,
    area_name: String,
    position: Number,
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }

});

// Duplicate the ID field.
AreaSchema.virtual('areaID').get(function(){
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
AreaSchema.set('toJSON', {
    virtuals: true
});


export default model('Area', AreaSchema);