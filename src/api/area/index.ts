import AreaCtrl from './area.controller';
const controller = new AreaCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

router.get('/', auth.isAuthenticated(), controller.index)
router.post('/', auth.hasRoles(['SA']), controller.insert);
router.get('/:id', auth.hasRoles(['SA']), controller.getByID);
router.put('/:id', auth.hasRoles(['SA']), controller.updateByID);

module.exports = router;
