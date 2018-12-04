"use strict";
exports.__esModule = true;
var noticeboard_controller_1 = require("./noticeboard.controller");
var controller = new noticeboard_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
// router.post('/user', auth.isAuthenticated(), controller.saveUserFeedback);
router.get('/', controller.index);
router.get('/id/:id', controller.get);
router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
router.put('/id/:id', auth.hasRoles(['Admin', 'SA']), controller.update);
router["delete"]('/id/:id', auth.hasRoles(['Admin', 'SA']), controller["delete"]);
module.exports = router;
//# sourceMappingURL=index.js.map