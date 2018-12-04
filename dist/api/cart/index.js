"use strict";
exports.__esModule = true;
var cart_controller_1 = require("./cart.controller");
var controller = new cart_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/user', auth.isAuthenticated(), controller.getUserCart);
router.post('/user', auth.isAuthenticated(), controller.updateUserCart);
router.get('/', auth.hasRoles(['Admin']), controller.index);
router.post('/', auth.hasRoles(['Admin']), controller.insert);
router.get('/:id', auth.hasRoles(['Admin']), controller.getByID);
router.put('/:id', auth.hasRoles(['Admin']), controller.updateByCartID);
module.exports = router;
//# sourceMappingURL=index.js.map