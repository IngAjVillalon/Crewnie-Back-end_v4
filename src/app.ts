import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as http from 'http';
// const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser')
import Config from './config';
const config = new Config();
import setRoutes from './routes';
// import socketServer from './socket-server';
const app = express();
app.set('port', (4000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(morgan('dev'));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'bazardesh-secret'
}));
const passport = require('passport');
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
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log('Connected to MongoDB');
//   require('./seed'); // Seed database with some sample data
  setRoutes(app);
  const server = http.createServer(app);
//   socketServer(server);
  server.listen(process.env.PORT || 4000, () => {
    console.log('Bazardesh Server listening on port ' + app.get('port'));
  });
});

// process.on('unhandledRejection', (err, req, res) => {

// })

// import checkError from './log-error';
// checkError();

export { app };