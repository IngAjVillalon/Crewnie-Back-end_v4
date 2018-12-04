// var seeder = require('mongoose-seed');
// import Config from '../config';
// const config = new Config();
// const fs = require('fs'); 
// const path = require('path');  
// const model = 'Charge';
// // Data array containing seed data - documents organized by Model
// var data = [
//     {
//         model: model,
//         documents: [
//             {
//                 "isPct": false,
//                 "active": true,
//                 "name": "lt100",
//                 "value": 30,
//                 "type": "scheduled_delivery",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T16:54:24.094Z",
//                 "updatedAt": "2018-08-30T16:54:24.094Z",
//             },
//             {
//                 "isPct": false,
//                 "active": true,
//                 "name": "lt200",
//                 "value": 30,
//                 "type": "scheduled_delivery",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T16:54:35.070Z",
//                 "updatedAt": "2018-08-30T16:54:35.070Z",
//             },
//             {
//                 "isPct": false,
//                 "active": true,
//                 "name": "lt300",
//                 "value": 20,
//                 "type": "scheduled_delivery",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T16:54:42.439Z",
//                 "updatedAt": "2018-08-30T16:54:42.439Z",
//             },
//             {
//                 "isPct": false,
//                 "active": true,
//                 "name": "lt400",
//                 "value": 20,
//                 "type": "scheduled_delivery",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T16:54:47.895Z",
//                 "updatedAt": "2018-08-30T16:54:47.895Z",
//             },
//             {
//                 "isPct": false,
//                 "active": true,
//                 "name": "lt500",
//                 "value": 20,
//                 "type": "scheduled_delivery",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T16:54:54.917Z",
//                 "updatedAt": "2018-08-30T16:54:54.917Z",
//             },
//             {
//                 "isPct": false,
//                 "active": true,
//                 "name": "gt500",
//                 "value": 0,
//                 "type": "scheduled_delivery",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T16:55:04.880Z",
//                 "updatedAt": "2018-08-30T16:55:04.880Z",
//             },
//             {
//                 "isPct": false,
//                 "active": true,
//                 "name": "express",
//                 "value": 30,
//                 "type": "express_delivery",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T16:57:55.693Z",
//                 "updatedAt": "2018-08-30T16:57:55.693Z",
//             }
//         ]
//     }
// ];
// // Connect to MongoDB via Mongoose
// seeder.connect(config.mongoURL, function() {
//   // Load Mongoose models
//   seeder.loadModels([
//     'dist/api/charge/charge.model.js'
//   ]);
//   // Clear specified collections
//   seeder.clearModels([model], function() {
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
//   });
// });
//# sourceMappingURL=charge.js.map