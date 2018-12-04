// import * as mongoose from 'mongoose';
import { Document, model, Model, Schema, Types } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

export const ProductSchema = new Schema({
    // productID: {type: ObjectId, auto: true},
    // product_name: String,
    name: { type: String, required: true },
    // product_description: String,
    description: String,
    categories: [ String ],
    tags: [ String ],
    // product_image_url: String,
    imgUrl: String,
    // product_max_cart: Number,
    maxCart: { type: Number, default: 50 },
    gallery: [ String ],
    // product_price: { type: Number, required: true },
    price: { type: Number, required: true },
    // product_price_retail: Number,
    priceRetail: Number,
    // product_sku: String,
    sku: String,
    // product_status: String,
    status: { type: String },
    // product_supplier: String,
    supplier: String,
    // product_unit_amount: Number,
    unitAmount: Number,
    // product_unit_name: String,
    unitName: String,
    // product_vendor: String,
    vendorID: String,
    // product_tags: [],
    units: [{ title: String, value: Number }],
    // product_stock: { type: Number, default: 1 },
    stock: { type: Number, default: 10 },
    isChild: { type: Boolean, default: false },
    children: [{ type: ObjectId, ref: 'Product' }],

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }
});

// Duplicate the ID field.
ProductSchema.virtual('productID').get(function() {
    if(this._d && this._id.toHexString) {
        return this._id.toHexString();
    } else {
        return '';
    }
});
// Ensure virtual fields are serialised.
ProductSchema.set('toJSON', {
    virtuals: true
});

ProductSchema.pre('save', function (next) {
    var doc: any = this;
    if(doc.isChild && doc.children && doc.children.length) {
        return next(new Error('Child product can not have children'))
    }
    return next();
})

ProductSchema.index({ name: 'text', description: 'text' })

export default model('Product', ProductSchema);