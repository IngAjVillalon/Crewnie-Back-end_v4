"use strict";
exports.__esModule = true;
var express = require("express");
function default_1(app) {
    app.use('/api/products', require('./api/product'));
    app.use('/api/categories', require('./api/category'));
    app.use('/api/tags', require('./api/tag'));
    app.use('/api/carts', require('./api/cart'));
    app.use('/api/orders', require('./api/order'));
    app.use('/api/addresses', require('./api/address'));
    app.use('/api/areas', require('./api/area'));
    app.use('/api/timeslots', require('./api/timeslot'));
    app.use('/api/charges', require('./api/charge'));
    app.use('/api/options', require('./api/option'));
    app.use('/api/coupons', require('./api/coupon'));
    app.use('/api/feedbacks', require('./api/feedback'));
    app.use('/api/notices', require('./api/noticeboard'));
    app.use('/api/projects', require('./api/project'));
    app.use('/api/depertments', require('./api/depertments'));
    app.use('/api/users', require('./api/user'));
    app.use('/auth', require('./auth'));
    app.use(express.static('dist/public'));
    app.route('/*')
        .get(function (req, res) {
        res.status(404).send('Nothing found');
        // res.sendFile(path.resolve(`dist/public/index.html`));
    });
}
exports["default"] = default_1;
//# sourceMappingURL=routes.js.map