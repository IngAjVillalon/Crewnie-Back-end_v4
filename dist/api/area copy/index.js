"use strict";
exports.__esModule = true;
var area_controller_1 = require("./area.controller");
var controller = new area_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/', controller.index);
router.post('/', controller.insert);
router.get('/:id', controller.getByID);
router.put('/:id', controller.updateByID);
module.exports = router;
//# sourceMappingURL=index.js.map