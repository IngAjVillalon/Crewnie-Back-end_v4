import Order from './order.model';
import BaseCtrl from './../base';
import * as express from 'express';
import ProductService from '../../services/product.service';
import UtilsService from '../../services/utils.service';
import ChargeService from '../../services/charge.service';
import CouponService from '../../services/coupon.service';
import DatetimeService from '../../services/datetime.service';
import SmsService from '../../services/sms.service';

const productService = new ProductService();
const utilsService = new UtilsService();
const chargeService = new ChargeService();
const couponService = new CouponService();
const datetimeService = new DatetimeService();
const smsService = new SmsService();

export default class OrderCtrl extends BaseCtrl {
    model = Order;

    placeUserOrderStep1 = (req, res) => {
        let order = req.body;
        order.userID = req.user._id;
        order.orderStatus = 'PLACING';
        // UPDATE CART PRODUCTS
        productService.updateCartProducts(order.cart)
        .then((cart: any) => {
            order.cart = cart;
            return order;
        })
        .then(updatedOrder => {
            // FORMAT DELIVERY DATE
            updatedOrder.deliveryDate = datetimeService
                                        .bdMoment(updatedOrder.deliveryDate)
                                        .format();
            return updatedOrder;
        })
        .then((updatedOrder) => {
            // CALCULATE SERVICE CHARGE
            return chargeService
                .calculateServiceCharge(updatedOrder)
        })
        .then(updatedOrder => {
            return chargeService.calculateOrderTotal(updatedOrder, {coupon: false})
        })
        .then((updatedOrder) => {
            // REMOVE UNNECESSARY FIELDS FROM PRODUCTS
            updatedOrder.cart = productService.sanitizeCartAndProducts(updatedOrder.cart);
            // SAVE NEW ORDER
            if(!updatedOrder._id) {
                let newOrder = new Order(updatedOrder)
                return newOrder
                .save()
            } else {
                return this.updateOrderWithOutCoupon(updatedOrder)
            }
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    placeUserOrderStep2 = (req, res) => {
        Order.findById(req.body._id)
        .exec()
        .then((order: any) => {
            order.orderStatus = 'PLACED';
            order.deliveryInstruction = req.body.deliveryInstruction;
            order.paymentMethod = req.body.paymentMethod;
            
            return this.updateOrderWithOutCoupon(order);
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    applyCouponToOrder = (req, res) => {
        let order = req.body;
        Order.findById(order._id)
        .exec()
        .then(this.handleEntityNotFound(res))
        .then((updatedOrder: any) => {
            updatedOrder.couponCode = order.couponCode;
            return couponService
            .applyCouponToOrder(updatedOrder);
        })
        .then(updatedOrder => {
            return chargeService.calculateOrderTotal(updatedOrder, {coupon: true})
        })
        .then(order => {
            const id = order._id;
            delete order._id;
            return Order.findOneAndUpdate({_id: id}, order, {new: true})
            .exec()
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    updateOrderWithOutCoupon = (order) => {
        const id = order._id;
        delete order._id;
        delete order.coupon;
        return Order.findOneAndUpdate({_id: id}, order, {new: true})
        .exec()
        .then(updatedOrder => {
            return updatedOrder;
        });
    }

    cancelUserOrder = (req, res) => {
        const orderID = req.body._id;
        Order.findById(orderID)
        .then(this.handleEntityNotFound(res))
        .then((order: any) => {

            // CHECK USER IS OWNER
            if(!utilsService.isEntityOwner(req.user._id, order.userID)) {
                return Promise.reject('Forbidden');
            }

            if(order && (order.orderStatus === 'PLACING' || order.orderStatus === 'PLACED')) {
                // CANCEL ORDER
                order.orderStatus = 'CANCELLED';
                return order.save();
            } else {
                return Promise.reject('Order not found');
            }
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    getUserOrders = (req, res) => {
        let userID = req.user._id;

        req.query.where = { userID: userID, orderStatus: {$nin: ['CANCELLED', 'PLACING']} };
        req.query.sort = '-createdAt';

        this.index(req, res);
    }

    getByID = (req, res) => {
        Order.findOne({
            _id: req.params.id
        })
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }








    getAdminOrders = (req, res) => {
        req.query.sort = '-createdAt';
        this.indexWithCount(req, res);
    }

    confirmOrderByAdmin = (req, res) => {
        let reqOrder = req.body;
        reqOrder.updatedBy = req.user._id;

        // DELETE CART, CART CAN NOT BE UPDATED HERE
        delete reqOrder.cart;

        Order.findOne({
            _id: req.params.id
        })
        .exec()
        .then((order: any) => {
            if (reqOrder.orderStatus === 'CONFIRMED' && order.orderStatus === 'PLACED') {
                //SEND SMS
                smsService
                .sendSms(
                    order.deliveryAddress.delivery_phone, 
                    reqOrder.confirmText
                )
                // REDUCE PRODUCT STOCK IN **DB**
                order.cart.items.forEach(item => {                
                    productService
                    .reduceStock(item.product._id, item.quantity)
                    .catch(e => {
                        console.log('Reduce stock err ----')
                        return Promise.reject(e);
                    });
                });
            }
            if (reqOrder.orderStatus === 'PLACED' && order.orderStatus === 'CONFIRMED') {
                // ADD PRODUCT STOCK IN **DB**
                order.cart.items.forEach(item => {                
                    productService
                    .addStock(item.product._id, item.quantity)
                    .catch(e => {
                        console.log('Add stock err ----')
                        return Promise.reject(e);
                    });
                });
            }

            return order;
        })
        .then(this.handleEntityNotFound(res))
        .then(this.patchUpdates(reqOrder))
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

    updateOrderByAdmin = (req, res) => {
        let reqOrder = req.body;
        let orderID = req.params.id;
        // UPDATE CART PRODUCTS
        Order.findById(orderID)
        .exec()
        .then((order: any) => {
            if(order.orderStatus === 'PLACED') {
                return productService.updateCartProducts(reqOrder.cart)
                .then((cart: any) => {
                    reqOrder.cart = cart;
                    // return Object.assign({}, order, reqOrder)
                    return reqOrder;
                })
            } else {
                throw {message: 'Order status must be PLACED!'}
            }
        })
        .then((reqOrder) => {
            // CALCULATE SERVICE CHARGE
            return chargeService
                .calculateServiceCharge(reqOrder)
        })
        .then(updatedOrder => {
            return chargeService.calculateOrderTotal(updatedOrder, {coupon: true})
        })
        .then((updatedOrder) => {
            // REMOVE UNNECESSARY FIELDS FROM PRODUCTS
            updatedOrder.cart = productService.sanitizeCartAndProducts(updatedOrder.cart);
            return Order.findOneAndUpdate(
                {_id: orderID}, 
                updatedOrder, 
                {new: true}
            )
        })
        .then(this.respondWithResult(res))
        .catch(this.handleError(res));
    }

}