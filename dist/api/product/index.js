"use strict";
exports.__esModule = true;
var product_controller_1 = require("./product.controller");
var controller = new product_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
// PUBLIC API
router.get('/', controller.getProducts);
router.get('/slug/:slug', controller.getProducts);
router.get('/id/:id', controller.getByID);
// ADMIN API
// router.get('/admin')
// router.get('/admin', auth.hasRoles(['SA', 'Admin']), controller.index);
router.post('/', auth.hasRoles(['SA', 'Admin']), controller.insert);
router.get('/count', auth.hasRoles(['SA', 'Admin']), controller.getProductsWithCount);
router.get('/count/:slug', auth.hasRoles(['SA', 'Admin']), controller.getProductsWithCount);
router.put('/:id', auth.hasRoles(['SA', 'Admin']), controller.updateByProductID);
module.exports = router;
//# sourceMappingURL=index.js.map