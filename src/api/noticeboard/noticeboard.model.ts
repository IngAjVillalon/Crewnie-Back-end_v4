import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const NoticeboardSchema = new Schema({
    imgUrl: String,
    message: { type: String },
    html: String,
    group: { type: String, default: 'GENERAL', enum: [ 'GENERAL', 'OFFER', 'CHARGE']},
    
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});

export default model('Noticeboard', NoticeboardSchema);