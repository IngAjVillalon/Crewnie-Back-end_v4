import TimeSlotCtrl from './timeslot.controller';
const controller = new TimeSlotCtrl();
var express = require('express');
var router = express.Router();
import AuthService from '../../auth/auth.service';
let auth = new AuthService();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/express', auth.isAuthenticated(), controller.getExpressTimeSlot);
router.get('/date/:date', auth.isAuthenticated(), controller.getDeliverySlotsByDate);

router.post('/', auth.hasRoles(['SA']), controller.insert);
router.get('/id/:id', auth.isAuthenticated(), controller.getByID);
router.put('/id/:id', auth.hasRoles(['SA']), controller.updateByID);

module.exports = router;
