"use strict";
exports.__esModule = true;
var order_controller_1 = require("./order.controller");
var controller = new order_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
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
//# sourceMappingURL=index.js.map