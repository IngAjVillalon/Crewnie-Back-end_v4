"use strict";
exports.__esModule = true;
var coupon_controller_1 = require("./coupon.controller");
var controller = new coupon_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/info/:code', auth.isAuthenticated(), controller.getCouponInfo);
router.get('/', auth.hasRoles(['Admin', 'SA']), controller.index);
router.get('/:id', auth.hasRoles(['Admin', 'SA']), controller.get);
router.post('/', auth.hasRoles(['SA']), controller.insert);
router.put('/:id', auth.hasRoles(['SA']), controller.update);
module.exports = router;
//# sourceMappingURL=index.js.map