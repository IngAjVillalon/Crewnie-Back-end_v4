import OrderCtrl from './order.controller';
const controller = new OrderCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

// USER APIs
router.post('/user/step1', auth.hasRoles(['User', 'Admin', 'SA']), controller.placeUserOrderStep1);
router.post('/user/step2', auth.hasRoles(['User', 'Admin', 'SA']), controller.placeUserOrderStep2);
router.post('/user/applyCoupon', auth.hasRoles(['User', 'Admin', 'SA']), controller.applyCouponToOrder);

router.post('/user/cancel', auth.hasRoles(['User', 'Admin', 'SA']), controller.cancelUserOrder);
router.get('/user', auth.hasRoles(['User', 'Admin', 'SA']), controller.getUserOrders);

// ADMIN APIs
router.get('/', auth.hasRoles(['Admin', 'SA']), controller.getAdminOrders);
router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
router.put('/confirm/:id', auth.hasRoles(['Admin', 'SA']), controller.confirmOrderByAdmin);
router.put('/edit/:id', auth.hasRoles(['Admin', 'SA']), controller.updateOrderByAdmin);

router.get('/:id', auth.hasRoles(['Admin', 'SA']), controller.getByID);

module.exports = router;
