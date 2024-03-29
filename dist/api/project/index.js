"use strict";
exports.__esModule = true;
var project_controller_1 = require("./project.controller");
var controller = new project_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
// Add project to db
router.post('/', controller.insert);
router.put('/:id', controller.updateProjectById);
router.post('/groups', controller.insert);
// Get All Projects
router.get('/', controller.getProjects);
router.get('/creator/:id', controller.getProjectsByCreator);
router.get('/id/:id', controller.get);
// Get Department By Project ID
// Get Position By Department ID
// Add Position To Department
// Add User To Position
// Get Single Project
// router.get('/:id', controller.get);
// router.post('/user', auth.isAuthenticated(), controller.saveUserFeedback);
// router.get('/', auth.hasRoles(['Admin', 'SA']), controller.getAdminFeedbacks);
// router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
// router.get('/:id', controller.get);
router.put('/:id', controller.update);
module.exports = router;
//# sourceMappingURL=index.js.map