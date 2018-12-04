import UtilsService from './utils.service';
import CartService from './cart.service';
import Charge from '../api/charge/charge.model';
const utilsService = new UtilsService();
const cartService  = new CartService();

interface orderTotalOptions {
    coupon?: boolean
}

export default class ChargeService {
    
    calculateServiceCharge(order): Promise<any> {
        var cart = order.cart;
        let cartTotal = cartService.getCartTotal(cart);
        // console.log('cart total-----', cartTotal)
        if (!cartTotal) {
            return Promise.reject({message: 'Invalid cart total!'});
        }
        order.cartTotal = cartTotal;

        if(order.deliveryType === 'SCHEDULED') {

            return this.getScheduledDeliveryCharge(cartTotal)
                .then(charge => {
                    order.serviceCharge = charge;
                    return order;
                })

        } else if(order.deliveryType === 'EXPRESS') {

            return this.getExpressDeliveryCharge()
                .then((charge: any) => {
                    order.serviceCharge = charge.value;
                    // console.log()
                    return order;
                })

        } else {
            return Promise.reject({message: 'Delivery Type not defined!'})
        }
    }

    getScheduledDeliveryCharge = (cartTotal): Promise<number> => {
        return Charge
        .find({type: 'scheduled_delivery'})
        .exec()
        .then((charges) => {
            let chargesObj: any = {};
            charges.forEach((charge: any) => {
                chargesObj[charge.name] = charge.value;
            });
            if (cartTotal < 100) {
                return chargesObj.lt100;
            } else if (cartTotal < 200) {
                return chargesObj.lt200;
            } else if (cartTotal < 300) {
                return chargesObj.lt300;
            } else if (cartTotal < 400) {
                return chargesObj.lt400;
            } else if (cartTotal < 500) {
                return chargesObj.lt500;
            } else if (cartTotal >= 500) {
                return chargesObj.gt500;
            }
        })
    }

    getExpressDeliveryCharge() {
        return Charge
            .findOne({type: 'express_delivery'})
            .exec()
    }

    
    calculateOrderTotal = (order, options: orderTotalOptions = {}) => {
        // cart total
        let total = cartService.getCartTotal(order.cart);
        // service charge
        if(order.serviceCharge) {
            total = total + order.serviceCharge;
        }
        // coupon
        if (order.coupon && options.coupon) {
            if(order.coupon.isFixed) {
                total = total - order.coupon.discountAmount;
            } else {
                let discount = total * (order.coupon.discountAmount / 100); 
                total = total - discount;
            }
        }
        order.orderTotal = total;
        return Promise.resolve(order);
    }

}