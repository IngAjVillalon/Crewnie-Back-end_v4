// var seeder = require('mongoose-seed');
// import Config from '../config';
// const config = new Config();
// const fs = require('fs'); 
// const path = require('path');  

// const model = 'Option';
// // Data array containing seed data - documents organized by Model
// var data = [
//     {
//         model: model,
//         documents: [
//             {
//                 "group": "delivery_time",
//                 "active": true,
//                 "name": "express_delivery_last_hour",
//                 "value": 19,
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-28T15:39:01.666Z",
//                 "updatedAt": "2018-08-28T15:39:01.666Z",
//             },
//             {
//                 "group": "default",
//                 "active": true,
//                 "name": "scheduled_delivery_last_hour",
//                 "value": 23,
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-28T15:39:28.571Z",
//                 "updatedAt": "2018-08-28T15:39:28.571Z",
//             },
//             {
//                 "group": "default",
//                 "active": true,
//                 "name": "express_delivery_first_hour",
//                 "value": 9,
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T11:13:59.854Z",
//                 "updatedAt": "2018-08-30T11:13:59.855Z",
//             }
//         ]
//     }
// ];

// // Connect to MongoDB via Mongoose
// seeder.connect(config.mongoURL, function() {
 
//   // Load Mongoose models
//   seeder.loadModels([
//     'dist/api/option/option.model.js'
//   ]);
 
//   // Clear specified collections
//   seeder.clearModels([model], function() {
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
 
//   });
// });
