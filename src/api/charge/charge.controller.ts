import BaseCtrl from "../base";
import Charge from './charge.model';
import ChargeService from '../../services/charge.service';
const charService = new ChargeService();

export default class ChargeCtrl extends BaseCtrl {
    model = Charge;

    getDeliveryCharge = (req, res) => {
        const cartTotal = parseInt(req.query.total);
        // Set joi validation
        if(!cartTotal) {
            return res.status(400).send({message: 'Invalid cart total'});
        }
        charService.getScheduledDeliveryCharge(cartTotal)
            .then(charge => {
                return {charge}
            })
            .then(this.respondWithResult(res))
            .catch(this.handleError(res));
    }
    
    // getDeliveryChargeList = (req, res) => {
    //     res.json(charService.getServiceCharges());
    // }
}