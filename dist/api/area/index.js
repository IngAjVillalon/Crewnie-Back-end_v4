"use strict";
exports.__esModule = true;
var area_controller_1 = require("./area.controller");
var controller = new area_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/', auth.isAuthenticated(), controller.index);
router.post('/', auth.hasRoles(['SA']), controller.insert);
router.get('/:id', auth.hasRoles(['SA']), controller.getByID);
router.put('/:id', auth.hasRoles(['SA']), controller.updateByID);
module.exports = router;
//# sourceMappingURL=index.js.map