import BaseCtrl from "../base";
import { Coupon } from "./coupon.model";
import CouponService from '../../services/coupon.service';
const couponService = new CouponService();

export default class CouponCtrl extends BaseCtrl {
    model = Coupon;

    getCouponInfo = (req, res) => {
        Coupon
        .findOne({code: req.params.code})
        .exec()
        .then(this.handleEntityNotFound(res))
        .then(this.respondWithResult(res))
        .catch(this.handleError);
    }
}