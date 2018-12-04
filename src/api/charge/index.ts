import ChargeCtrl from './charge.controller';
const controller = new ChargeCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();


router.get('/delivery', auth.hasRoles(['User', 'Admin', 'SA']), controller.getDeliveryCharge);
// router.get('/list/delivery', auth.hasRoles(['User', 'SA']), controller.getDeliveryChargeList);


router.get('/', auth.hasRoles(['SA']), controller.index);
router.post('/', auth.hasRoles(['SA']), controller.insert);
router.get('/:id', auth.isAuthenticated(), controller.get);
router.put('/:id', auth.hasRoles(['SA']), controller.update);

module.exports = router;