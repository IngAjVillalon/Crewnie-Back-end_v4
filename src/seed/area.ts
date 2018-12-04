// var seeder = require('mongoose-seed');
// import Config from '../config';
// const config = new Config();
// const fs = require('fs'); 
// const path = require('path');  

// const model = 'Area';
// // Data array containing seed data - documents organized by Model
// var data = [
//     {
//         model: model,
//         documents: [{
//           "active": true,
//           "area_name": "Surma R/A"
//         }, {
//           "active": true,
//           "area_name": "SUST Gents Hall"
//         }, {
//           "active": true,
//           "area_name": "Pathantula"
//         }, {
//           "active": true,
//           "area_name": "Bagbari"
//         }, {
//           "active": true,
//           "area_name": "SUST Campus"
//         }, {
//           "active": true,
//           "area_name": "Madina Market"
//         }, {
//           "active": true,
//           "area_name": "SUST Ladies Hall"
//         }, {
//           "active": true,
//           "area_name": "University Gate"
//         }, {
//           "active": true,
//           "area_name": "Topobon R/A"
//         }, {
//           "active": true,
//           "area_name": "Dhamalipara / Nayabazar"
//         }, {
//           "active": true,
//           "area_name": "Nihari Para / Lake City"
//         }, {
//           "active": true,
//           "area_name": "BGB 2 no. Gate"
//         }]
//     }
// ];

// // Connect to MongoDB via Mongoose
// seeder.connect(config.mongoURL, function() {
 
//   // Load Mongoose models
//   seeder.loadModels([
//     'dist/api/area/area.model.js'
//   ]);
 
//   // Clear specified collections
//   seeder.clearModels([model], function() {
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
 
//   });
// });
