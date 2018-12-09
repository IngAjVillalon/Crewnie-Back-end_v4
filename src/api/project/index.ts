import ProjectCtrl from './project.controller';
const controller = new ProjectCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

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