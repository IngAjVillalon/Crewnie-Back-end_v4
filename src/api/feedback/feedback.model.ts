import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const FeedbackSchema = new Schema({
    user: { type: ObjectId, ref: 'User' },
    message: { type: String },
    rating: Number,
    
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});

export default model('Feedback', FeedbackSchema);