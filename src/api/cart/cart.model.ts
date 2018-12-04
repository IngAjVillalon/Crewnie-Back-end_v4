// import * as mongoose from 'mongoose';
import { Document, model, Model, Schema, Types } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

export const CartSchema = new Schema({
    // cartID: {type: ObjectId, auto: true},
    userID: { type: ObjectId, ref: 'User' },
    items: [{ product: Schema.Types.Mixed, quantity: Number }], // missplled in firestore (quentity)

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }

});

// Duplicate the ID field.
CartSchema.virtual('cartID').get(function(){
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
CartSchema.set('toJSON', {
    virtuals: true
});


export default model('Cart', CartSchema);