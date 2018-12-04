import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const OptionSchema = new Schema({
    name: { type: String, required: true, unique: true },
    value: { type: Schema.Types.Mixed, required: true },
    group: { 
        type: String, 
        enum: ['default', 'system', 'delivery_time', 'delivery_charge'], 
        default: 'default' 
    },

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }
});

export default model('Option', OptionSchema);