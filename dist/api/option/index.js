"use strict";
exports.__esModule = true;
var option_controller_1 = require("./option.controller");
var controller = new option_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/group/:name', auth.isAuthenticated(), controller.getByGroupName);
router.get('/name/:name', auth.isAuthenticated(), controller.getByName);
router.get('/', auth.hasRoles(['SA']), controller.index);
router.post('/', auth.hasRoles(['SA']), controller.insert);
router.put('/name/:name', auth.hasRoles(['SA']), controller.updateByName);
// router.put('/:id', auth.hasRoles(['SA']), controller.updateByID);
module.exports = router;
//# sourceMappingURL=index.js.map