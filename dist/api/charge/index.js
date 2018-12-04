"use strict";
exports.__esModule = true;
var charge_controller_1 = require("./charge.controller");
var controller = new charge_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/delivery', auth.hasRoles(['User', 'Admin', 'SA']), controller.getDeliveryCharge);
// router.get('/list/delivery', auth.hasRoles(['User', 'SA']), controller.getDeliveryChargeList);
router.get('/', auth.hasRoles(['SA']), controller.index);
router.post('/', auth.hasRoles(['SA']), controller.insert);
router.get('/:id', auth.isAuthenticated(), controller.get);
router.put('/:id', auth.hasRoles(['SA']), controller.update);
module.exports = router;
//# sourceMappingURL=index.js.map