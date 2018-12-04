import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

const ProductInventorySchema = new Schema({
    productID: { type: ObjectId, ref: 'Product' },
    sku: String,
    stock: Number,
    supplierID: Number,
    
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }

});

export default model('ProductInventory', ProductInventorySchema);