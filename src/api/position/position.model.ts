import { Document, model, Model, Schema, Types } from 'mongoose';
import { string, boolean } from 'joi';
const ObjectId = Schema.Types.ObjectId;

export const Position = new Schema({
    projectId: { type: String },
    departmentId: { type: String },
    departmentState: { type: String },
    index: { type: Number },
    title: { type: String },
    location: { type: String },
    salary: { type: String },
    salaryMin: { type: Number },
    salaryMax: { type: Number },
    duration: { type: String},
    vacancy: { type: Number },
    selected: { type: Number },
    selectedMembers: { type: Object },
    startDate: { type: Date },
    endDate: { type: Date },

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});


export default model('Position', Position);