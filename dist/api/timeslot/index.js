"use strict";
exports.__esModule = true;
var timeslot_controller_1 = require("./timeslot.controller");
var controller = new timeslot_controller_1["default"]();
var express = require('express');
var router = express.Router();
var auth_service_1 = require("../../auth/auth.service");
var auth = new auth_service_1["default"]();
router.get('/', auth.isAuthenticated(), controller.index);
router.get('/express', auth.isAuthenticated(), controller.getExpressTimeSlot);
router.get('/date/:date', auth.isAuthenticated(), controller.getDeliverySlotsByDate);
router.post('/', auth.hasRoles(['SA']), controller.insert);
router.get('/id/:id', auth.isAuthenticated(), controller.getByID);
router.put('/id/:id', auth.hasRoles(['SA']), controller.updateByID);
module.exports = router;
//# sourceMappingURL=index.js.map