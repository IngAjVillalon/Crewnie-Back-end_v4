import { Coupon } from '../api/coupon/coupon.model';
import Order from '../api/order/order.model';
import DateTimeService from './datetime.service';
import CartService from './cart.service';

const dateTimeService = new DateTimeService();
const cartService  = new CartService();

export default class CouponService {

    applyCouponToOrder = (order) => {
        if(order.coupon) {
            return Promise.reject({ message: 'You already applied a coupon' });
        }
        return Coupon
        .findOne({code: order.couponCode})
        .exec()
        .then(coupon => {
            if(!coupon) {
                throw { message: 'Coupon not found!' }
            } else {
                return coupon;
            }
        })
        .then(coupon => {
            return this.isCouponExpired(coupon, order.createdAt);
        })
        .then(coupon => {
            return this.isMaxUsesCrossed(coupon);
        })
        .then(coupon => {
            return this.isMaxUsesUserCrossed(coupon, order.userID);
        })
        .then(coupon => {
            return this.isValidOrderTotal(order, coupon);
        })
        .then((coupon) => {
            return Coupon
            .findOneAndUpdate({ _id: coupon._id }, { uses: coupon.uses + 1 })
            .exec();
        })
        .then(coupon => {
            order.coupon = coupon;
            return order;
        })
    }

    isMaxUsesCrossed = (coupon) => {
        if(coupon.uses < coupon.maxUses) {
            return Promise.resolve(coupon);
        } else {
            return Promise.reject({message: 'Coupon maximum uses limit crossed!'});
        }
    }

    isMaxUsesUserCrossed = (coupon, userID) => {
        return Order
        .find({
            'userID': userID, 
            'coupon._id': coupon._id
        })
        .exec()
        .then(orders => {
            console.log('total orders----', orders.length)
            if (orders.length < coupon.maxUsesUser) {
                return coupon;
            } else {
                throw { message: 'Your uses limit of this coupon crossed!' };
            }
        })
    }

    isCouponExpired = (coupon, compareDate?) => {
        coupon.expiresAt = dateTimeService.bdMoment(coupon.expiresAt);
        coupon.startsAt = dateTimeService.bdMoment(coupon.startsAt);
        const now = compareDate ? dateTimeService.bdMoment(compareDate) : dateTimeService.bdMoment();

        // console.log(coupon);

        if(now.isSameOrAfter(coupon.expiresAt, 'second')) {
            return Promise.reject({message: 'Coupon expired!'})
        }
        if(now.isBefore(coupon.startsAt, 'second')) {
            return Promise.reject({message: 'Coupon has not published yet!'})
        }
        return Promise.resolve(coupon);
    }

    isValidOrderTotal = (order, coupon) => {
        // cart total
        let total = cartService.getCartTotal(order.cart);
        // service charge
        if(order.serviceCharge) {
            total = total + order.serviceCharge;
        }

        if(total < coupon.minOrderTotal) {
            return Promise.reject({ message: `Failed! Order total has to be atleast ৳ ${coupon.minOrderTotal} for this coupon.` })
        } else {
            return Promise.resolve(coupon);
        }
    }


}