import { Document, model, Model, Schema, Types } from 'mongoose';
import { string, boolean } from 'joi';
const ObjectId = Schema.Types.ObjectId;


export const Depertment = new Schema({
    projectId: { type: String },
    title: { type: String },
    teamLeader: {type: Object},
    members:  { type: Object},
    positions: { type: Object},
    leaders: { type: Object},
    leaderList: [ String ],
    preProduction: [ String ],
    production: [ String ],
    postProduction: [ String ],
    preProductionPositions: { type: Object },
    productionPositions: { type: Object },
    postProductionPositions: { type: Object },

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});


export default model('Depertment', Depertment);