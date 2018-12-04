import OptionCtrl from './option.controller';
const controller = new OptionCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();


router.get('/group/:name', auth.isAuthenticated(), controller.getByGroupName);
router.get('/name/:name', auth.isAuthenticated(), controller.getByName);


router.get('/', auth.hasRoles(['SA']), controller.index);
router.post('/', auth.hasRoles(['SA']), controller.insert);
router.put('/name/:name', auth.hasRoles(['SA']), controller.updateByName);

// router.put('/:id', auth.hasRoles(['SA']), controller.updateByID);

module.exports = router;
