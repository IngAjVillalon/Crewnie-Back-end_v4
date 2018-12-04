import { Document, model, Model, Schema, Types } from 'mongoose';
import { string, boolean } from 'joi';
const ObjectId = Schema.Types.ObjectId;

export const Depertment = new Schema({
    title: {type: String},
    teamLeader: {type: Object},
    members:  { type: Object},

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});


export default model('Depertment', Depertment);