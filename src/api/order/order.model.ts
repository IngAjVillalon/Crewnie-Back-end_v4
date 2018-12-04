import { Document, model, Model, Schema, Types } from 'mongoose';
import Config from '../../config';
const config = new Config();

const ObjectId = Schema.Types.ObjectId;

const OrderSchema = new Schema({
    userID: { type: ObjectId, ref: 'User', required: true },
    cart: {}, // CART document
    orderNo: { type: String, required: true, default: 0 },
    deliveryAddress: {},
    deliveryDate: { type: String },
    deliveryInstruction: String,
    orderStatus: { type: String, default: 'PLACING', enum: config.orderStatus },
    deliveryTime: { type: String },
    serviceCharge: { type: Number, default: 0 },
    deliveryType: { type: String, default: 'SCHEDULED', enum: config.deliveryTypes },
    paymentID: String,
    paymentMethod: { type: String, default: 'COD', enum: config.paymentMethods },
    paymentStatus: Boolean,
    riderID: String,
    transectionID: String,

    couponCode: String, // Provided by user
    coupon: {}, // Coupon document
    cartTotal: {type: Number, required: true},
    orderTotal: Number,

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, default: true }

});

// Duplicate the ID field.
OrderSchema.virtual('orderID').get(function(){
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
OrderSchema.set('toJSON', {
    virtuals: true
});

// AUTO INCREAMENT ORDER NO
OrderSchema.pre('save',  function (next) {
    var doc: any = this;
    if (doc.isNew) {
        OrderModel.count({}).then(total => {
            // console.log('order count------------', total);
            const orderNo = 'BD00' + (total + 1);
            doc.orderNo = orderNo;
            next();
        });
      } else {
        next();
      }
})

const OrderModel = model('Order', OrderSchema);
export default OrderModel;



