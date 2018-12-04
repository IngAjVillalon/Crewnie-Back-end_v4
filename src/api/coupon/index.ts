import CouponCtrl from './coupon.controller';
const controller = new CouponCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();


router.get('/info/:code', auth.isAuthenticated(), controller.getCouponInfo)

router.get('/', auth.hasRoles(['Admin', 'SA']), controller.index);
router.get('/:id', auth.hasRoles(['Admin', 'SA']), controller.get);

router.post('/', auth.hasRoles(['SA']), controller.insert);
router.put('/:id', auth.hasRoles(['SA']), controller.update);

module.exports = router;