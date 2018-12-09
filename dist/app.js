"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var http = require("http");
var cors = require('cors');
// const express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var config_1 = require("./config");
var config = new config_1["default"]();
var routes_1 = require("./routes");
// import socketServer from './socket-server';
var app = express();
exports.app = app;
app.set('port', (4000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bazardesh-secret'
}));
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
dotenv.load({ path: '.env' });
mongoose.connect(config.mongoURL, {
    useNewUrlParser: true
});
var db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    //   require('./seed'); // Seed database with some sample data
    routes_1["default"](app);
    var server = http.createServer(app);
    //   socketServer(server);
    server.listen(process.env.PORT || 4000, function () {
        console.log('Bazardesh Server listening on port ' + app.get('port'));
    });
});
//# sourceMappingURL=app.js.map