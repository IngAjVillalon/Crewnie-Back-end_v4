import CartCtrl from './cart.controller';
const controller = new CartCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

router.get('/user', auth.isAuthenticated(), controller.getUserCart)
router.post('/user', auth.isAuthenticated(), controller.updateUserCart)

router.get('/', auth.hasRoles(['Admin']), controller.index);
router.post('/', auth.hasRoles(['Admin']), controller.insert);
router.get('/:id', auth.hasRoles(['Admin']), controller.getByID);
router.put('/:id', auth.hasRoles(['Admin']), controller.updateByCartID);

module.exports = router;
