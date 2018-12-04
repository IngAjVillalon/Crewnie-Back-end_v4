"use strict";
exports.__esModule = true;
var tags_controller_1 = require("./tags.controller");
var controller = new tags_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/', controller.index);
router.post('/', auth.isAuthenticated(), controller.insert);
router.get('/:id', controller.getByID);
router.put('/:id', auth.isAuthenticated(), controller.updateByID);
module.exports = router;
//# sourceMappingURL=index.js.map