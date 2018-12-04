// var seeder = require('mongoose-seed');
// import Config from '../config';
// const config = new Config();
// const fs = require('fs'); 
// const path = require('path');  

// const model = 'User';
// // Data array containing seed data - documents organized by Model
// var data = [
//     {
//         model: model,
//         documents: [{
//             "role": "SA",
//             "phoneVerified": false,
//             "active": true,
//             "accountLockedOut": false,
//             "displayName": "mahmudul",
//             "phoneNumber": "01829674162",
//             "password": "8DKIImRvjpK8+ujOkN5MRALDjlxrRPIQUYyQAWrOwnJzIOtHffouW7nd0gpLRAdXKtgVgPO9NVFZ0tjfWNrxew==",
//             "salt": "x0ee4KM3mSYj+IQfoBdF5A=="
//         }]
//     }
// ];

// // Connect to MongoDB via Mongoose
// seeder.connect(config.mongoURL, function() {
 
//   // Load Mongoose models
//   seeder.loadModels([
//     'dist/api/user/user.model.js'
//   ]);
 
//   // Clear specified collections
//   seeder.clearModels([model], function() {
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
 
//   });
// });
