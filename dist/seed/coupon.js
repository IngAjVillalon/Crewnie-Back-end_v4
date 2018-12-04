// var seeder = require('mongoose-seed');
// import Config from '../config';
// const config = new Config();
// const fs = require('fs'); 
// const path = require('path');  
// const model = 'Coupon';
// // Data array containing seed data - documents organized by Model
// function makeid() {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
//     for (var i = 0; i < 5; i++)
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     return text;
// }
// let docs = [];
// for (let i = 0; i < 100; i++) {
//     let uniqeStr = makeid();
//     docs.push({
//         name: 'Discount 100 Taka - '+ uniqeStr,
//         code: 'BDPRMO-'+uniqeStr,
//         uses: 0,
//         maxUses: 1,
//         maxUsesUser: 1,
//         minOrderTotal: 500,
//         discountAmount: 100,
//         isFixed: true,
//         startsAt: new Date(),
//         expiresAt: new Date('01/01/2019')
//     });
// }
// var data = [
//     {
//         model: model,
//         documents: docs
//     }
// ];
// // {
// //     name: { type: String, required: true, unique: true },
// //     code: { type: String, required: true },
// //     description: String,
// //     // The number of uses currently
// //     uses: { type: Number, default: 0 },
// //     // The max uses this coupon has
// //     maxUses: { type: Number, default: 5 },
// //     // How many times a user can use this coupon.
// //     maxUsesUser: { type: Number, default: 1 },
// //     // Required minimum order total
// //     minOrderTotal: { type: Number, required: true },
// //     // The type can be: voucher, discount, sale. What ever you want.
// //     type: String,
// //     discountAmount: { type: Number, default: 5 },
// //     // Whether or not the coupon is a percentage or a fixed price. 
// //     isFixed: { type: Boolean, default: true },
// //     startsAt: { type: Date },
// //     expiresAt: { type: Date },
// //     createdAt: { type: Date, default: Date.now },
// //     createdBy: { type: ObjectId, ref: 'User' },
// //     updatedAt: { type: Date, default: Date.now },
// //     updatedBy: { type: ObjectId, ref: 'User' }
// // }
// // Connect to MongoDB via Mongoose
// seeder.connect(config.mongoURL, function() {
//   // Load Mongoose models
//   seeder.loadModels([
//     'dist/api/coupon/coupon.model.js'
//   ]);
//   // Clear specified collections
//   seeder.clearModels([model], function() {
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
//   });
// });
//# sourceMappingURL=coupon.js.map