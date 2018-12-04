import { Document, model, Model, Schema, Types } from 'mongoose';
const ObjectId = Schema.Types.ObjectId;

export const CouponSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: String,
    // The number of uses currently
    uses: { type: Number, default: 0 },
    // The max uses this coupon has
    maxUses: { type: Number, default: 5 },
    // How many times a user can use this coupon.
    maxUsesUser: { type: Number, default: 1 },
    // Required minimum order total
    minOrderTotal: { type: Number, required: true },
    // The type can be: voucher, discount, sale. What ever you want.
    type: String,
    discountAmount: { type: Number, default: 5 },
    // Whether or not the coupon is a percentage or a fixed price. 
    isFixed: { type: Boolean, default: true },
    startsAt: { type: Date },
    expiresAt: { type: Date },

    createdAt: { type: Date, default: Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, default: Date.now },
    updatedBy: { type: ObjectId, ref: 'User' }
});

// export const UserCouponInfoSchema = new Schema({
//     userID: { type: ObjectId, ref: 'User' },
//     couponID:  { type: ObjectId, ref: 'Coupon' },
// });

// export const OrderCouponInfoSchema = new Schema({
//     orderID: { type: ObjectId, ref: 'Order' },
//     couponID:  { type: ObjectId, ref: 'Coupon' },
// });

export const Coupon = model('Coupon', CouponSchema);
// export const UserCouponInfo = model('UserCouponInfo', UserCouponInfoSchema);
// export const OrderCouponInfo = model('ProductCouponInfo', OrderCouponInfoSchema);
