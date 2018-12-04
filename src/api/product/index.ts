import ProductCtrl from './product.controller';
const controller = new ProductCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

// PUBLIC API
router.get('/', controller.getProducts);
router.get('/slug/:slug', controller.getProducts);
router.get('/id/:id', controller.getByID);

// ADMIN API
// router.get('/admin')
// router.get('/admin', auth.hasRoles(['SA', 'Admin']), controller.index);

router.post('/', auth.hasRoles(['SA', 'Admin']), controller.insert);
router.get('/count', auth.hasRoles(['SA', 'Admin']), controller.getProductsWithCount);
router.get('/count/:slug', auth.hasRoles(['SA', 'Admin']), controller.getProductsWithCount);
router.put('/:id', auth.hasRoles(['SA', 'Admin']), controller.updateByProductID);

module.exports = router;