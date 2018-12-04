import TagsCtrl from './tags.controller';
const controller = new TagsCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

router.get('/', controller.index);
router.post('/', auth.isAuthenticated(), controller.insert);
router.get('/:id', controller.getByID);
router.put('/:id', auth.isAuthenticated(), controller.updateByID);

module.exports = router;