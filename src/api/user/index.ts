import UserCtrl from './user.controller';
const controller = new UserCtrl();
var express = require('express');
import AuthService from '../../auth/auth.service';
const auth = new AuthService();
var router = express.Router();

var validate = require('express-validation');
import Validators  from '../../validators';

// router.get('/search/:q', controller.index);
router.get('/profile', auth.isAuthenticated(), controller.profile);
router.get('/id/:id', auth.hasRoles(['SA', 'Admin']), controller.get);
router.post('/password/reset', controller.resetPassword);

router.put('/password/update', auth.isAuthenticated(), controller.changePassword);
router.put('/id/:id', auth.isAuthenticated(), controller.update);

router.post('/email', validate(Validators.emailSignup), auth.attachUserInfo(), controller.emailSignUp);
router.post('/phone', validate(Validators.phoneSignup), auth.attachUserInfo(), controller.phoneSignUp);

// router.post('/reset/:token', controller.reset);
router.get('/a/', auth.hasRoles(['SA', 'Admin']), controller.getUsersByPhoneByAdmin);
router.post('/a', auth.hasRoles(['SA', 'Admin']), controller.addUserByAdmin);
router.put('/a/:id', auth.hasRoles(['SA', 'Admin']), controller.updateUserByAdmin);

router.get('/sa', auth.hasRoles(['SA']), controller.getUsersSA);
router.get('/sa/:id', auth.hasRoles(['SA']), controller.get);
router.put('/sa/:id', auth.hasRoles(['SA']), controller.update);
router.post('/sa/:id', auth.hasRoles(['SA']), controller.insert);

module.exports = router;
