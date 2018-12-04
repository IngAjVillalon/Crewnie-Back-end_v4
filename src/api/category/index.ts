import CategoryCtrl from './category.controller';
const controller = new CategoryCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

router.get('/', controller.getPublicCategories);
router.get('/:id', controller.getByID);


router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
router.put('/:id', auth.hasRoles(['Admin', 'SA']), controller.updateByID);

module.exports = router;