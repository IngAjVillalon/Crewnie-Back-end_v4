"use strict";
exports.__esModule = true;
var feedback_controller_1 = require("./feedback.controller");
var controller = new feedback_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.post('/user', auth.isAuthenticated(), controller.saveUserFeedback);
router.get('/', auth.hasRoles(['Admin', 'SA']), controller.getAdminFeedbacks);
router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
router.get('/:id', auth.isAuthenticated(), controller.get);
router.put('/:id', auth.hasRoles(['Admin', 'SA']), controller.update);
module.exports = router;
//# sourceMappingURL=index.js.map