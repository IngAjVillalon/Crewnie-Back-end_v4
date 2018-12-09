import { Document, model, Model, Schema, Types } from 'mongoose';
import { string, boolean, object } from 'joi';
const ObjectId = Schema.Types.ObjectId;

export const ProjectSchema = new Schema({
    creatorId: { type: String},

    private: {type: Boolean},
    title: {type: String},
    type:  { type: String },
    coverPhotoUrl: { type: String},
    agency: { type: String },
    genras:  [ String ],
    startDate:  { type: Date, default: Date.now },
    endDate:  { type: Date, default: Date.now },
    categories:  [ String ],
    hasUnion: { type: Boolean},
    unions: [ String],

    departments: { type: Object },


    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});


export default model('Project', ProjectSchema);