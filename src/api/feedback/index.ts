import FeedbackCtrl from './feedback.controller';
const controller = new FeedbackCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

router.post('/user', auth.isAuthenticated(), controller.saveUserFeedback);


router.get('/', auth.hasRoles(['Admin', 'SA']), controller.getAdminFeedbacks);
router.post('/', auth.hasRoles(['Admin', 'SA']), controller.insert);
router.get('/:id', auth.isAuthenticated(), controller.get);
router.put('/:id', auth.hasRoles(['Admin', 'SA']), controller.update);

module.exports = router;