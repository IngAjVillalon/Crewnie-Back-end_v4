"use strict";
exports.__esModule = true;
var express = require('express');
// import config from '../config';
var user_model_1 = require("../api/user/user.model");
var auth_service_1 = require("./auth.service");
// import saMenu from '../components/menu/saMenu';
// import adminMenu from '../components/menu/adminMenu';
// import agentMenu from '../components/menu/agentMenu';
// let config = process.env;
var auth = new auth_service_1["default"]();
// Passport Configuration
require('./local/passport.local').setup(user_model_1["default"]);
require('./facebook/passport.facebook').setup(user_model_1["default"]);
// require('./facebook/passport').setup(User);
// require('./google/passport').setup(User);
// require('./twitter/passport').setup(User);
var router = express.Router();
router.use('/local', require('./local'));
router.use('/facebook', require('./facebook'));
// router.use('/usermenu', auth.isAuthenticated(), function (req, res){
//     // console.log('REQ USER', req.user, );
//     if (req.user.role === 'SA') {
//          return res.send(saMenu);
//     } else if (req.user.role === 'Admin') {
//          return res.send(adminMenu);
//     } else {
//          return res.send(agentMenu);
//     }
// });
// router.use('/facebook', require('./facebook').default);
// router.use('/twitter', require('./twitter').default);
// router.use('/google', require('./google').default);
module.exports = router;
//# sourceMappingURL=index.js.map