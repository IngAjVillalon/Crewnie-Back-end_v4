import NoticeboardCtrl from './noticeboard.controller';
const controller = new NoticeboardCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

// router.post('/user', auth.isAuthenticated(), controller.saveUserFeedback);


router.get('/', controller.index);
router.get('/id/:id', controller.get);

router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
router.put('/id/:id', auth.hasRoles(['Admin', 'SA']), controller.update);
router.delete('/id/:id', auth.hasRoles(['Admin', 'SA']), controller.delete);

module.exports = router;