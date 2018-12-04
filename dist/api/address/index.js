"use strict";
exports.__esModule = true;
var address_controller_1 = require("./address.controller");
var controller = new address_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/', auth.isAuthenticated(), controller.index);
router.post('/', auth.isAuthenticated(), controller.insert);
router["delete"]('/user/:addressID', auth.isAuthenticated(), controller.deleteUserAddress);
router["delete"]('/a/:addressID', auth.hasRoles(['SA', 'Admin']), controller.deleteUserAddress);
router.get('/:id', auth.isAuthenticated(), controller.getByID);
router.put('/:id', auth.isAuthenticated(), controller.updateByID);
module.exports = router;
//# sourceMappingURL=index.js.map