// import * as mongoose from 'mongoose';
import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const AddressSchema = new Schema({
    userID: { type: ObjectId, ref: 'User' },
    user_name: String,
    delivery_address: String,
    delivery_area: String,
    delivery_phone: String,
    phoneVerified: Boolean,
    verificationCode: String,
    
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }

});

// Duplicate the ID field.
AddressSchema.virtual('addressID').get(function(){
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
AddressSchema.set('toJSON', {
    virtuals: true
});


export default model('Address', AddressSchema);