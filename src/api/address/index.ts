import AddressCtrl from './address.controller';
const controller = new AddressCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

router.get('/', auth.isAuthenticated(), controller.index);

router.post('/', auth.isAuthenticated(), controller.insert);
router.delete('/user/:addressID', auth.isAuthenticated(), controller.deleteUserAddress)
router.delete('/a/:addressID', auth.hasRoles(['SA', 'Admin']), controller.deleteUserAddress)

router.get('/:id', auth.isAuthenticated(), controller.getByID);
router.put('/:id', auth.isAuthenticated(), controller.updateByID);

module.exports = router;
