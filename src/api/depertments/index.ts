import DepertmentCtrl from './depertment.controller';
const controller = new DepertmentCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

// Add project to db
router.post('/', controller.insert);

// Get All Projects
router.get('/', controller.getDepertments);

// Get Single Project
router.get('/:id', controller.get);


router.post('/user', auth.isAuthenticated(), controller.saveUserFeedback);


// router.get('/', auth.hasRoles(['Admin', 'SA']), controller.getAdminFeedbacks);
// router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);

// router.get('/:id', controller.get);
router.put('/:id', controller.update);

module.exports = router;