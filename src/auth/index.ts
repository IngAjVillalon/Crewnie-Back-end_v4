let express = require('express');
// import config from '../config';
import User from '../api/user/user.model';
import AuthService from './auth.service';
// import saMenu from '../components/menu/saMenu';
// import adminMenu from '../components/menu/adminMenu';
// import agentMenu from '../components/menu/agentMenu';

// let config = process.env;
const auth = new AuthService();

// Passport Configuration
require('./local/passport.local').setup(User);
require('./facebook/passport.facebook').setup(User);
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
