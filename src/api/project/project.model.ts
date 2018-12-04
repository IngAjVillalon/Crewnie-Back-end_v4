import { Document, model, Model, Schema, Types } from 'mongoose';
import { string, boolean } from 'joi';
const ObjectId = Schema.Types.ObjectId;

export const ProjectSchema = new Schema({
    private: {type: Boolean},
    title: {type: String},
    type:  { type: String },
    genras:  [ String ],
    startDate:  { type: Date, default: Date.now },
    endDate:  { type: Date, default: Date.now },
    categories:  [ String ],
    hasUnion: { type: Boolean},
    unions: [ String],
    coverPhotoUrl: { type: String},
    depertments: [ String ],
    positions: [ String ],

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});


export default model('Project', ProjectSchema);