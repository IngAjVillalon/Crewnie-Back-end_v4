"use strict";
exports.__esModule = true;
var category_controller_1 = require("./category.controller");
var controller = new category_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/', controller.getPublicCategories);
router.get('/:id', controller.getByID);
router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
router.put('/:id', auth.hasRoles(['Admin', 'SA']), controller.updateByID);
module.exports = router;
//# sourceMappingURL=index.js.map