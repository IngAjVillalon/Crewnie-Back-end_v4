// var seeder = require('mongoose-seed');
// import Config from '../config';
// const config = new Config();
// const fs = require('fs'); 
// const path = require('path');  

// // Connect to MongoDB via Mongoose
// seeder.connect(config.mongoURL, function() {
 
//   // Load Mongoose models
//   seeder.loadModels([
//     'dist/api/product/product.model.js'
//   ]);
 
//   // Clear specified collections
//   seeder.clearModels(['Product'], function() {
//     data[0].documents.map(doc => {
//         delete doc.productID;
//         return doc;
//     })
//     // Callback to populate DB once collections have been cleared
//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     });
 
//   });
// });

// let content = fs.readFileSync(path.join(__dirname + '../../../src/seed/products.json')).toString();
// let docs = JSON.parse(content);
// docs = docs.map(doc => {
//   return {
//     "description": doc.product_description,
//     "imgUrl": doc.product_image_url,
//     "unitAmount": doc.product_unit_amount,
//     "maxCart": doc.product_max_cart,
//     "name": doc.product_name,
//     "vendor": doc.product_vendor,
//     "status": doc.product_status,
//     "supplier": doc.product_supplier,
//     "priceRetail": doc.product_price_retail,
//     "unitName": doc.product_unit_name,
//     "stock": 100,
//     "price": doc.product_price,
//     "sku": doc.product_sku,
//     "categories": doc.categories,
//     "tags": doc.tags
//   }
// })
// // Data array containing seed data - documents organized by Model
// var data = [
//     {
//         model: 'Product',
//         documents: docs
//     }
// ];