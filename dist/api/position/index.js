"use strict";
exports.__esModule = true;
var position_controller_1 = require("./position.controller");
var controller = new position_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
// Add project to db
router.post('/', controller.insert);
router.post('/all/', controller.insertAllPositions);
router.post('/allPositions/', controller.getPositionsByIdList);
// Get All Projects
router.get('/', controller.getDepertments);
// router.get('/project/:projectId', controller.getDepertmentsByProject);
// Get Single Project
router.get('/:id', controller.get);
router.get('/department/:id', controller.getPositionsByDepartment);
router.post('/user', auth.isAuthenticated(), controller.saveUserFeedback);
// router.get('/', auth.hasRoles(['Admin', 'SA']), controller.getAdminFeedbacks);
// router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
// router.get('/:id', controller.get);
router.put('/:id', controller.updatePositionById);
module.exports = router;
//# sourceMappingURL=index.js.map