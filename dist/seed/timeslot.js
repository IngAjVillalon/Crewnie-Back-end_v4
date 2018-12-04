// var seeder = require('mongoose-seed');
// import Config from '../config';
// const config = new Config();
// const fs = require('fs'); 
// const path = require('path');  
// const model = 'Timeslot';
// // Data array containing seed data - documents organized by Model
// var data = [
//     {
//         model: model,
//         documents: [
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 11,
//                 "title": "12:00 PM - 1:00 PM",
//                 "value": "DS-12",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:12:14.532Z",
//                 "updatedAt": "2018-08-30T10:12:14.532Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 12,
//                 "title": "01:00 PM - 2:00 PM",
//                 "value": "DS-13",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:12:35.681Z",
//                 "updatedAt": "2018-08-30T10:12:35.681Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 13,
//                 "title": "02:00 PM - 3:00 PM",
//                 "value": "DS-14",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:12:50.777Z",
//                 "updatedAt": "2018-08-30T10:12:50.777Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 14,
//                 "title": "03:00 PM - 4:00 PM",
//                 "value": "DS-15",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:13:32.308Z",
//                 "updatedAt": "2018-08-30T10:13:32.308Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 15,
//                 "title": "04:00 PM - 5:00 PM",
//                 "value": "DS-16",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:13:44.474Z",
//                 "updatedAt": "2018-08-30T10:13:44.474Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 16,
//                 "title": "05:00 PM - 6:00 PM",
//                 "value": "DS-17",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:13:55.704Z",
//                 "updatedAt": "2018-08-30T10:13:55.704Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 17,
//                 "title": "06:00 PM - 7:00 PM",
//                 "value": "DS-18",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:14:16.371Z",
//                 "updatedAt": "2018-08-30T10:14:16.371Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 18,
//                 "title": "07:00 PM - 8:00 PM",
//                 "value": "DS-19",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:14:32.252Z",
//                 "updatedAt": "2018-08-30T10:14:32.252Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 19,
//                 "title": "08:00 PM - 9:00 PM",
//                 "value": "DS-20",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:14:46.577Z",
//                 "updatedAt": "2018-08-30T10:14:46.577Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "start": 20,
//                 "title": "09:00 PM - 10:00 PM",
//                 "value": "DS-21",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-08-30T10:15:03.057Z",
//                 "updatedAt": "2018-08-30T10:15:03.057Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             },
//             {
//                 "status": true,
//                 "active": true,
//                 "title": "10:00 PM - 11:00 PM",
//                 "start": 21,
//                 "value": "ds-22",
//                 "createdBy": "5b700a45639c2c0c54b354bf",
//                 "createdAt": "2018-09-14T13:17:00.180Z",
//                 "updatedAt": "2018-09-14T13:17:00.180Z",
//                 "updatedBy": "5b700a45639c2c0c54b354bf"
//             }
//         ]
//     }
// ];
// // Connect to MongoDB via Mongoose
// seeder.connect(config.mongoURL, function() {
//   // Load Mongoose models
//   seeder.loadModels([
//     'dist/api/timeslot/timeslot.model.js'
//   ]);
//   // Clear specified collections
//   seeder.clearModels([model], function() {
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
//   });
// });
//# sourceMappingURL=timeslot.js.map