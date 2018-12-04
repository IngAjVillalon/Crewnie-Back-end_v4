import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const ChargeSchema = new Schema({
    name: { type: String, required: true, unique: true },
    value: { type: Number, required: true },
    type: { 
        type: String, 
        enum: ['scheduled_delivery', 'express_delivery']
    },
    isPct: { type: Boolean, default: false },

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }
});

export default model('Charge', ChargeSchema);