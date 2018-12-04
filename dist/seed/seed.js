"use strict";
exports.__esModule = true;
var seeder = require('mongoose-seed');
var config_1 = require("../config");
var config = new config_1["default"]();
// Connect to MongoDB via Mongoose
seeder.connect(config.mongoURL, function () {
    // Load Mongoose models
    seeder.loadModels([
        'dist/api/product/product.model.js'
    ]);
    // Clear specified collections
    seeder.clearModels(['Product'], function () {
        data[0].documents.map(function (doc) {
            delete doc.productID;
            return doc;
        });
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    });
});
var productsFile = '/Users/macbookpro/Documents/Companies/bazardesh/data-export-import/src/seed/products.json';
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Product',
        'documents': [
            {
                "product_description": "Kulson Egg Noodles",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530293547948_download.jpg?alt=media&token=b030f3b1-2e82-4d2d-98f9-3ccf6aa68aa6",
                "product_unit_amount": 180,
                "product_max_cart": 5,
                "product_name": "Kolson Egg Noodles",
                "product_vendor": "bazardesh",
                "productID": "0FP1PALcPV4z3eZ3rMFO",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 18,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 18,
                "product_sku": "nd-012",
                "categories": [
                    "snacks",
                    "noodles"
                ],
                "tags": [
                    "snacks",
                    "noodles"
                ]
            },
            {
                "productID": "1GFXlZN2vlxlugAM2oXE",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 90,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 90,
                "product_sku": "sdsa",
                "product_description": "Lifebuoy Mild Care Hand Wash",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/household/lifebuy-handwash.png",
                "product_unit_amount": 200,
                "product_max_cart": 2,
                "product_name": "Lifebuoy Mild Care Hand Wash",
                "categories": [
                    "households-needs",
                    "handwash"
                ],
                "tags": [
                    "households-needs",
                    "handwash"
                ]
            },
            {
                "product_max_cart": 2,
                "product_name": "Harpic Powerplus - 200gm",
                "productID": "1O7d31tYzO5iPpd4oY7M",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 40,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 39,
                "product_sku": "h-006",
                "product_description": "Harpic Powerplus",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530078704839_harpic.jpg?alt=media&token=8cb9fc0e-3d51-4f0f-8043-17423a885e20",
                "product_unit_amount": 200,
                "categories": [
                    "households-needs",
                    "cleaners"
                ],
                "tags": [
                    "households-needs",
                    "cleaners"
                ]
            },
            {
                "product_max_cart": 2,
                "product_name": "Pepsi Pet - 1Ltr",
                "productID": "3b2S3OtrRRqcLlQmRnzE",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 60,
                "product_unit_name": "Ltr",
                "product_stock": 100,
                "product_price": 60,
                "product_sku": null,
                "product_description": null,
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F28905%2Fpepsi-pet-1-ltr.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 1,
                "categories": [
                    "beverages",
                    "soft-drinks"
                ],
                "tags": [
                    "beverages",
                    "soft-drinks"
                ]
            },
            {
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 25,
                "product_sku": "123456",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-garam-masala-15gm.png",
                "product_unit_amount": 15,
                "product_max_cart": 2,
                "product_name": "Radhuni Garam Masala",
                "productID": "3ciqqD1ElRHxCkO5e5Sl",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_description": "Globe Tiffin Strawberry Cream Biscuits ",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530335003137_1-3.jpg?alt=media&token=1053c5f8-fa88-4e32-8883-ea11213a515d",
                "product_unit_amount": 1,
                "product_max_cart": 5,
                "product_name": "Globe Tiffin Strawberry Cream Biscuits ",
                "product_vendor": "bazardesh",
                "productID": "4d9yTTuMbeGqRDeHUR4p",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 10,
                "product_unit_name": "packet",
                "product_stock": 100,
                "product_price": 10,
                "product_sku": "bis-001",
                "categories": [
                    "snacks",
                    "biscuits",
                    ""
                ],
                "tags": [
                    "snacks",
                    "biscuits",
                    ""
                ]
            },
            {
                "product_stock": 100,
                "product_price": 47,
                "product_sku": "grc-020",
                "product_description": "Chicken Eggs (Layer) - 5pcs",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/eggs-5pcs.png",
                "product_unit_amount": 5,
                "product_max_cart": 4,
                "product_name": "Chicken Eggs (Layer) - 5pcs",
                "productID": "4dIjiOMWDcCQnoKpryhT",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 48,
                "product_unit_name": "pcs",
                "categories": [
                    "meat",
                    "eggs"
                ],
                "tags": [
                    "meat",
                    "eggs"
                ]
            },
            {
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "Bitter Gourd (Korola) - (Net Weight ± 20 gm)",
                "productID": "4dXP5DB0yTqpvbmU3H06",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 28,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 25,
                "product_sku": "veg-026",
                "product_description": "Bitter Gourd (Korola) ",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/korola-500gm.png",
                "categories": [
                    "vegetables",
                    "korola",
                    "others"
                ],
                "tags": [
                    "vegetables",
                    "korola",
                    "others"
                ]
            },
            {
                "product_max_cart": 0,
                "product_name": "Deshi Pangas (Comming Soon)",
                "productID": "5ZaDmOQqh6etN1983Kbm",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 220,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 220,
                "product_sku": "bd",
                "product_description": "Deshi Pangas (Net Weight ±50 gm)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/fish-pangash.png",
                "product_unit_amount": 1.5,
                "categories": [
                    "meat",
                    "fish"
                ],
                "tags": [
                    "meat",
                    "fish"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 65,
                "product_sku": "milk-004",
                "product_description": "Aarong Dairy Full Cream Liquid Milk",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530292360440_image%20(5).jpeg?alt=media&token=2cf95853-9d32-4688-aec4-89edfe6ec746",
                "product_unit_amount": 1,
                "product_max_cart": 2,
                "product_name": "Aarong Dairy Full Cream Liquid Milk",
                "productID": "8mTdzEalfLK95RNhdfKk",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 65,
                "product_unit_name": "Ltr",
                "categories": [
                    "breakfast",
                    "dairy",
                    "milk"
                ],
                "tags": [
                    "breakfast",
                    "dairy",
                    "milk"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 15,
                "product_sku": "sp-001",
                "product_description": "Radhuni Chicken Masala",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-chicken-masala-mini.webp",
                "product_unit_amount": 20,
                "product_max_cart": 2,
                "product_name": "Radhuni Chicken Masala",
                "productID": "8oJR9IYUzqogLvvZQgoA",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 16,
                "product_unit_name": "gm",
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Sugar Regular - 500gm",
                "productID": "9qXgTKF7zlJUXVgVVGpr",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 34,
                "product_unit_name": " gm",
                "product_stock": 100,
                "product_price": 30,
                "product_sku": "grc--019",
                "product_description": "Sugar",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/sugar-500gm.webp",
                "product_unit_amount": 500,
                "categories": [
                    "grocery",
                    "sugar",
                    "chini",
                    "sweet"
                ],
                "tags": [
                    "grocery",
                    "sugar",
                    "chini",
                    "sweet"
                ]
            },
            {
                "product_description": "Brooke Bond TAAZA Tea Bag 50 pcs",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530433264035_taaza-tea.jpeg?alt=media&token=5785df9b-5327-4b97-8cb0-c245be3d0356",
                "product_unit_amount": 100,
                "product_max_cart": 2,
                "product_name": "Brooke Bond TAAZA Tea Bag 50 pcs",
                "product_vendor": "bazardesh",
                "productID": "A5XtHpLSs4xf1O6w279U",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 80,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 80,
                "product_sku": null,
                "categories": [
                    "beverages",
                    "tea"
                ],
                "tags": [
                    "beverages",
                    "tea"
                ]
            },
            {
                "productID": "AaVBfphFDwDPBy8UyXor",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 200,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 194,
                "product_sku": "c-123",
                "product_description": "Chicken",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat-small/chicken-1.3kg.png",
                "product_unit_amount": 1.3,
                "product_max_cart": 5,
                "product_name": "Chicken Broiler - 1.3kg (Net Weight ± 30 gm)",
                "categories": [
                    "meat",
                    "chicken"
                ],
                "tags": [
                    "meat",
                    "chicken"
                ]
            },
            {
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 56,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 50,
                "product_sku": "g-00123",
                "product_description": "Potato Regular (Net Weight ± 50 gm)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/potato-2kg.png",
                "product_unit_amount": 2,
                "product_max_cart": 5,
                "product_name": "Potato Regular (Net Weight ± 50 gm)",
                "productID": "AuDWEvxqiIXtmIfzNeZ3",
                "product_vendor": "bd",
                "categories": [
                    "vegetables",
                    "potato"
                ],
                "tags": [
                    "vegetables",
                    "potato"
                ]
            },
            {
                "product_description": "Onion indian piyaj 1kg",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/onion-1kg.png",
                "product_unit_amount": 1,
                "product_max_cart": 5,
                "product_name": "Onion (Red Indian Piyaj) - (Net Weight ± 20 gm)",
                "productID": "BpXlZyFLjItKGOGofj4h",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 36,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 35,
                "product_sku": "veg-003",
                "categories": [
                    "vegetables",
                    "grocery",
                    "onion",
                    "piyaj"
                ],
                "tags": [
                    "vegetables",
                    "grocery",
                    "onion",
                    "piyaj"
                ]
            },
            {
                "product_max_cart": 1,
                "product_name": "Xpel Aerosol - 475ml",
                "productID": "C1MBBhje6SIIWyASN4na",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 290,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 288,
                "product_sku": "h-010",
                "product_description": "Xpel",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530079159197_xpel.jpg?alt=media&token=9cd49994-eb60-43e1-93e5-09112af00552",
                "product_unit_amount": 475,
                "categories": [
                    "aerosol",
                    "households-needs",
                    "repellents"
                ],
                "tags": [
                    "aerosol",
                    "households-needs",
                    "repellents"
                ]
            },
            {
                "product_description": "Salt",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1528477338549_ACI%20Pure%20Salt.jpg?alt=media&token=551f2f9b-ca0b-48c5-a0d3-5f32d01d2274",
                "product_unit_amount": 1,
                "product_max_cart": 5,
                "product_name": "Salt (ACI Pure) - 1kg",
                "productID": "CZF74ogOUUHmov7HevI3",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 38,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 37,
                "product_sku": "grc-020",
                "categories": [
                    "grocery",
                    "salt",
                    "aci"
                ],
                "tags": [
                    "grocery",
                    "salt",
                    "aci"
                ]
            },
            {
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 6,
                "product_sku": "sp-002",
                "product_description": "Radhuni Coriander (Dhoniya) Powder",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-dhonia-mini.webp",
                "product_unit_amount": 15,
                "product_max_cart": 1,
                "product_name": "Radhuni Coriander (Dhoniya) Powder",
                "productID": "DG5U3BO0IAS1mTsYbPGA",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 6,
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Globe Tiffin Orange Cream Biscuits ",
                "product_vendor": "bazardesh",
                "productID": "DnVTNRlNYJZNOaMsjAVf",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 10,
                "product_unit_name": "packet",
                "product_stock": 100,
                "product_price": 10,
                "product_sku": "bis-002",
                "product_description": "Globe Tiffin Orange Cream Biscuits ",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530335091618_1-2.jpg?alt=media&token=4743354f-9ff0-42ac-8b6c-b562c4df2f83",
                "product_unit_amount": 1,
                "categories": [
                    "snacks",
                    "biscuits"
                ],
                "tags": [
                    "snacks",
                    "biscuits"
                ]
            },
            {
                "productID": "Dps7zeA1z7ud7UizCfeB",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 217,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 209,
                "product_sku": "ch-002",
                "product_description": "Chicken",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat-small/chicken-1.4kg.png",
                "product_unit_amount": 1.4,
                "product_max_cart": 5,
                "product_name": "Chicken Broiler - 1.4kg  (Net Weight ± 30 gm)",
                "categories": [
                    "meat",
                    "chicken",
                    "chic"
                ],
                "tags": [
                    "meat",
                    "chicken",
                    "chic"
                ]
            },
            {
                "product_price_retail": 28,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 25,
                "product_sku": "veg-001",
                "product_description": "Potato indian",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/potato-1kg.png",
                "product_unit_amount": 1,
                "product_max_cart": 5,
                "product_name": "Potato(Allu) Regular(Net Weight ± 20 gm)",
                "productID": "EEhu77iOxXforu3xMC67",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "categories": [
                    "vegetables",
                    "allu",
                    "potato"
                ],
                "tags": [
                    "vegetables",
                    "allu",
                    "potato"
                ]
            },
            {
                "product_price": 17,
                "product_sku": "tis-001",
                "product_description": "Bashundhara Toilet Tissue",
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F23052%2Fbashundhara-toilet-tissue-1-pcs.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 1,
                "product_max_cart": 10,
                "product_name": "Bashundhara Toilet Tissue",
                "product_vendor": "bazardesh",
                "productID": "EGqe9hsP5aoUqNpv0UHa",
                "product_status": "active",
                "product_supplier": "bazardesh",
                "product_price_retail": 17,
                "product_unit_name": "roll",
                "product_stock": 100,
                "categories": [
                    "households-needs",
                    "tissues"
                ],
                "tags": [
                    "households-needs",
                    "tissues"
                ]
            },
            {
                "product_price": 220,
                "product_sku": null,
                "product_description": "Rui Fish -  18 Pcs After Cutting (Net Weight ± 50 gm)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/fish-rui.png?versionId=HJwnfez8LHHjSVXItwaD_Xrm5TlKaRh3",
                "product_unit_amount": "800",
                "product_max_cart": 1,
                "product_name": "Rui Fish (suitable for 12pcs) - 800gm (±50 gm)",
                "productID": "EIuYEUXvLknYUDmh2OEz",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 250,
                "product_unit_name": "gm",
                "product_stock": 100,
                "categories": [
                    "meat",
                    "fish"
                ],
                "tags": [
                    "meat",
                    "fish"
                ]
            },
            {
                "product_sku": "t-001",
                "product_description": "Sandalina soap",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530079722143_download.jpg?alt=media&token=26e06e33-c83e-41ea-94dd-0675ee268453",
                "product_unit_amount": 75,
                "product_max_cart": 1,
                "product_name": "Sandalina Soap",
                "productID": "ESOoivmHeeSbpQldl8bO",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 25,
                "categories": [
                    "personal-care",
                    "bath-body-care",
                    "soap"
                ],
                "tags": [
                    "personal-care",
                    "bath-body-care",
                    "soap"
                ]
            },
            {
                "product_price_retail": 70,
                "product_unit_name": "packet",
                "product_stock": 100,
                "product_price": 69,
                "product_sku": "h-025",
                "product_description": "Baoma Mosquito Coil",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/household/baoma-coil.webp",
                "product_unit_amount": 1,
                "product_max_cart": 2,
                "product_name": "Baoma Mosquito Coil",
                "productID": "FzQhO8Qf3yMkJLzDpJ0c",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "categories": [
                    "households-needs",
                    "repellents"
                ],
                "tags": [
                    "households-needs",
                    "repellents"
                ]
            },
            {
                "product_supplier": "bd",
                "product_price_retail": 60,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 57,
                "product_sku": "gr-098",
                "product_description": "Moshur Dal (Kangaroo Lentil ) - 500gm",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/moshur-dal-kangaroo-500mg.webp",
                "product_unit_amount": 500,
                "product_max_cart": 3,
                "product_name": "Moshur Dal (Kangaroo Lentil ) - 500gm",
                "productID": "GUZHzqJ82l0aknD0nDT2",
                "product_vendor": "bd",
                "product_status": "active",
                "categories": [
                    "grocery",
                    "dal",
                    "daal"
                ],
                "tags": [
                    "grocery",
                    "dal",
                    "daal"
                ]
            },
            {
                "product_supplier": "Bazardesh",
                "product_price_retail": 110,
                "product_unit_name": "Ltr",
                "product_stock": 100,
                "product_price": 110,
                "product_sku": "oil_1230",
                "product_description": "Rupchanda Soyabean Oil",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530335718023_rupchada-1ltr.jpeg?alt=media&token=d1a23503-6ffc-423d-9144-ea26c9e9efbf",
                "product_unit_amount": 1,
                "product_max_cart": 1,
                "product_name": "Rupchanda Soyabean Oil - 1Ltr",
                "productID": "H5cxoNmN1egyW3OOQQq4",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "categories": [
                    "grocery",
                    "oil"
                ],
                "tags": [
                    "grocery",
                    "oil"
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Chicken Eggs (Layer) - 7pcs",
                "productID": "HW5D2E7l96HlcneUqmWL",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 67,
                "product_unit_name": "pcs",
                "product_stock": 100,
                "product_price": 66,
                "product_sku": "grc-025",
                "product_description": "Chicken Eggs (Layer) - 7pcs",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/eggs-7pcs.png",
                "product_unit_amount": 7,
                "categories": [
                    "meat",
                    "eggs"
                ],
                "tags": [
                    "meat",
                    "eggs"
                ]
            },
            {
                "product_price": 268,
                "product_sku": "coffee-mate",
                "product_description": "Nestle Coffee Mate Richer & Creamer Plastic Jar",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530292917874_03411309_large.jpg?alt=media&token=64024df0-709b-408f-a168-9071864d203a",
                "product_unit_amount": 400,
                "product_max_cart": 1,
                "product_name": "Nestle Coffee Mate Richer & Creamer Plastic Jar",
                "productID": "I6CCJZknKfo3L6seql7e",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 270,
                "product_unit_name": "gm",
                "product_stock": 100,
                "categories": [
                    "breakfast",
                    "beverages",
                    "coffee",
                    "milk",
                    "coffee-mate"
                ],
                "tags": [
                    "breakfast",
                    "beverages",
                    "coffee",
                    "milk",
                    "coffee-mate"
                ]
            },
            {
                "product_name": "Kolson Macaroni Shell",
                "productID": "I7WJWxecCYam4mFVcVYA",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 65,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 65,
                "product_sku": "123",
                "product_description": null,
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F19438%2Fkolson-macaroni-shell-400-gm.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "categories": [
                    "snacks",
                    "pasta"
                ],
                "tags": [
                    "snacks",
                    "pasta"
                ]
            },
            {
                "product_description": "Cocola Egg Noodles",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530293272689_image%20(8).jpeg?alt=media&token=0b7019b2-9d63-4035-8351-0598190bc277",
                "product_unit_amount": 180,
                "product_max_cart": 2,
                "product_name": "Cocola Egg Noodles",
                "product_vendor": "bazardesh",
                "productID": "IXRUuO36UwuQWbU80Rh7",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 18,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 18,
                "product_sku": "nd-001",
                "categories": [
                    "snacks",
                    "noodles"
                ],
                "tags": [
                    "snacks",
                    "noodles"
                ]
            },
            {
                "productID": "J1Foi6zvteRdJIRexnj3",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 53,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 47,
                "product_sku": "grc-004",
                "product_description": "Rice",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-1kg.webp",
                "product_unit_amount": 1,
                "product_max_cart": 10,
                "product_name": "Rice (Super Mala Atop) - 1kg",
                "categories": [
                    "grocery",
                    "chal",
                    "rice",
                    "atop"
                ],
                "tags": [
                    "grocery",
                    "chal",
                    "rice",
                    "atop"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 22,
                "product_sku": "1234589",
                "product_description": "Firebox Match (12 pcs)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/household/firebox-match-12pcs.png",
                "product_unit_amount": 12,
                "product_max_cart": 5,
                "product_name": "Firebox Match (12 pcs)",
                "productID": "Jm5XEha4crSEt8aztdef",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 22,
                "product_unit_name": "pcs",
                "categories": [
                    "households-needs"
                ],
                "tags": [
                    "households-needs"
                ]
            },
            {
                "product_max_cart": 2,
                "product_name": "Coca-Cola (Coke) - 500ml",
                "productID": "JmP5vGKEPE61KjK0eukl",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 35,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 35,
                "product_sku": null,
                "product_description": null,
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F19266%2Fcoca-cola-600-ml.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": "500",
                "categories": [
                    "beverages",
                    "soft-drinks"
                ],
                "tags": [
                    "beverages",
                    "soft-drinks"
                ]
            },
            {
                "product_unit_amount": 50,
                "product_max_cart": 2,
                "product_name": "Ispahani Mirzapore Tea Bag",
                "productID": "K5S3y2go9FuXSIPDdpXf",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 79,
                "product_unit_name": "bag",
                "product_stock": 100,
                "product_price": 77,
                "product_sku": "tea-002",
                "product_description": "Ispahani Mirzapore Tea Bag",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530433065638_imt-50bag.jpeg?alt=media&token=f864c8dc-82d1-4cce-a5a2-89c778ed1fbd",
                "categories": [
                    "beverages",
                    "tea"
                ],
                "tags": [
                    "beverages",
                    "tea"
                ]
            },
            {
                "product_name": "Nestle Coffee Mate Richer & Creamer BIB",
                "productID": "KSZhI9F2O4Cg51lDnsQh",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 270,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 270,
                "product_sku": "mate",
                "product_description": "Nestle Coffee Mate Richer & Creamer BIB",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530293054912_Nestle_Coffeemate__02321_zoom.jpg?alt=media&token=97d948b2-ffdb-44d0-9323-45ac056d16ad",
                "product_unit_amount": 450,
                "product_max_cart": 2,
                "categories": [
                    "breakfast",
                    "beverages",
                    "coffee-mate",
                    "milk"
                ],
                "tags": [
                    "breakfast",
                    "beverages",
                    "coffee-mate",
                    "milk"
                ]
            },
            {
                "product_name": "Lux Fine Fragrance Soap",
                "productID": "KzZK6c14LfKY4j1iXAg7",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 32,
                "product_unit_name": "pcs",
                "product_stock": 100,
                "product_price": 32,
                "product_sku": "12354",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/household/lux-fine-fragrance-soap.png",
                "product_unit_amount": 1,
                "product_max_cart": 3,
                "categories": [
                    "personal-care",
                    "bodycare",
                    "bath-body"
                ],
                "tags": [
                    "personal-care",
                    "bodycare",
                    "bath-body"
                ]
            },
            {
                "product_description": "Glaxose D Pack",
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F34637%2Fglaxose-d-pack-200-gm.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 200,
                "product_max_cart": 2,
                "product_name": "Glaxose D Pack",
                "productID": "LmLzLQ98KpMtHlYIGK0F",
                "product_vendor": null,
                "product_status": "active",
                "product_supplier": null,
                "product_price_retail": 85,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 85,
                "product_sku": null,
                "categories": [
                    "beverages",
                    "energy-drinks"
                ],
                "tags": [
                    "beverages",
                    "energy-drinks"
                ]
            },
            {
                "product_supplier": "Bazardesh",
                "product_price_retail": 51,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 49,
                "product_sku": "grc-009",
                "product_description": "Daal",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/dal-deshi.webp",
                "product_unit_amount": 500,
                "product_max_cart": 5,
                "product_name": "Moshur Dal (Deshi) - 500gm",
                "productID": "MUYvVYrvtUx4ibClGM5c",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "categories": [
                    "grocery",
                    "dal",
                    "daal",
                    "deshi",
                    "moshur"
                ],
                "tags": [
                    "grocery",
                    "dal",
                    "daal",
                    "deshi",
                    "moshur"
                ]
            },
            {
                "product_vendor": "bazardesh",
                "productID": "MrOyF84G3hfckQqX17RP",
                "product_status": "active",
                "product_supplier": "bazardesh",
                "product_price_retail": 48,
                "product_unit_name": "pack",
                "product_stock": 100,
                "product_price": 48,
                "product_sku": "ti-002",
                "product_description": "Bashundhara Paper Napkins 13\" Unscented (100 pcs)",
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F27042%2Fbashundhara-paper-napkins-13-unscented-100-pcs-bashundhara-paper-napkins-13-unscented-100-pcs.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 1,
                "product_max_cart": 10,
                "product_name": "Bashundhara Paper Napkins 13\" Unscented (100 pcs)",
                "categories": [
                    "households-needs",
                    "tissues"
                ],
                "tags": [
                    "households-needs",
                    "tissues"
                ]
            },
            {
                "productID": "NaHFUHhkn6KHk7rnXSV6",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 20,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 20,
                "product_sku": "nd-0002",
                "product_description": "Mr Noodles",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530293389399_0074383_pran-egg-noodles-180gm-5500000651_300.jpg?alt=media&token=2c7635fa-7856-4abc-a15d-5cec322ef7b9",
                "product_unit_amount": 180,
                "product_max_cart": 5,
                "product_name": "Mr Noodles Egg Noodles",
                "categories": [
                    "snacks",
                    "noodles"
                ],
                "tags": [
                    "snacks",
                    "noodles"
                ]
            },
            {
                "product_price": 97,
                "product_sku": "butter",
                "product_description": "Aarong Dairy Butter",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530292531690_image%20(6).jpeg?alt=media&token=2bca3ef2-a93c-4fde-8d69-ab896e815b7c",
                "product_unit_amount": 100,
                "product_max_cart": 3,
                "product_name": "Aarong Dairy Butter - 100gm",
                "productID": "NrGG5LFGPi5qkMMFAxzg",
                "product_vendor": "bazardesh",
                "product_status": null,
                "product_supplier": "Bazardesh",
                "product_price_retail": 98,
                "product_unit_name": "gm",
                "product_stock": 100,
                "categories": [
                    "breakfast",
                    "butter",
                    "dairy"
                ],
                "tags": [
                    "breakfast",
                    "butter",
                    "dairy"
                ]
            },
            {
                "productID": "PJ85r7lZoePkG7vyiyv4",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 16,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 15,
                "product_sku": "grc-016",
                "product_description": "Sugar",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/sugar-250gm.webp",
                "product_unit_amount": 250,
                "product_max_cart": 5,
                "product_name": "Sugar Regular - 250gm",
                "categories": [
                    "grocery",
                    "sugar",
                    "chini",
                    "sweet"
                ],
                "tags": [
                    "grocery",
                    "sugar",
                    "chini",
                    "sweet"
                ]
            },
            {
                "product_max_cart": 2,
                "product_name": "Pepsi Pet - 500ml",
                "productID": "PWOVqKsrUdcWyXeQuEXI",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 30,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 30,
                "product_sku": null,
                "product_description": "Pepsi",
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F10632%2Fpepsi-500-ml.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 500,
                "categories": [
                    "beverages",
                    "soft-drinks"
                ],
                "tags": [
                    "beverages",
                    "soft-drinks"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 260,
                "product_sku": "125436",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/catla-fish-1kg.png",
                "product_unit_amount": 1,
                "product_max_cart": 2,
                "product_name": "Catla (Katla) Fish After Cutting (Net Weight ±50 gm)",
                "productID": "PalQZWGYzzusRrVnuF0e",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 280,
                "product_unit_name": "kg",
                "categories": [
                    "meat",
                    "fish"
                ],
                "tags": [
                    "meat",
                    "fish"
                ]
            },
            {
                "productID": "PpzXPyR7DpRGrWfIHAL9",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 22,
                "product_sku": "veg-009",
                "product_description": "Garlic (Roshun 250gm) ",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/garlic-250gm.png",
                "product_unit_amount": 250,
                "product_max_cart": 5,
                "product_name": "Garlic (Roshun) (Net Weight ± 10 gm)",
                "categories": [
                    "vegetables",
                    "grocery",
                    "garlic",
                    "roshun"
                ],
                "tags": [
                    "vegetables",
                    "grocery",
                    "garlic",
                    "roshun"
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Chicken Broiler - 1.6kg  (Net Weight ± 30 gm)",
                "productID": "RFBl9Mae5nPEU3dCTCBA",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 248,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 239,
                "product_sku": "c-111",
                "product_description": "Chicken",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat-small/chicken-1.6kg.png",
                "product_unit_amount": "1.6",
                "categories": [
                    "meat",
                    "chicken"
                ],
                "tags": [
                    "meat",
                    "chicken"
                ]
            },
            {
                "productID": "Rr9amqorUcqXQUPQen89",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 15,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 15,
                "product_sku": "sp-005",
                "product_description": "Radhuni Cumin Powder (Jeera/Jira)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-zira-mini.webp",
                "product_unit_amount": "15",
                "product_max_cart": 2,
                "product_name": "Radhuni Cumin Powder (Jeera/Jira)",
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_sku": "12548",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-fish-masala-25gm.png",
                "product_unit_amount": 25,
                "product_max_cart": 5,
                "product_name": "Radhuni Fish Curry Masala",
                "productID": "SFvSn60hF6jG4uAZD1ea",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 10,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 10,
                "categories": [
                    "grocery",
                    "spices"
                ],
                "tags": [
                    "grocery",
                    "spices"
                ]
            },
            {
                "product_description": "PRAN UHT Milk",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530292024614_image%20(4).jpeg?alt=media&token=ea71476b-2c62-437b-9d31-87001162c5cd",
                "product_unit_amount": 1,
                "product_max_cart": 2,
                "product_name": "PRAN UHT Milk",
                "productID": "Srh5Ef1nC8lXMjiEWUCn",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 90,
                "product_unit_name": "Ltr",
                "product_stock": 100,
                "product_price": 88,
                "product_sku": "milk-001",
                "categories": [
                    "breakfast",
                    "dairy",
                    "milk"
                ],
                "tags": [
                    "breakfast",
                    "dairy",
                    "milk"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 18,
                "product_sku": "qw234",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/fresh-dhonia-50gm.png",
                "product_unit_amount": 50,
                "product_max_cart": 2,
                "product_name": "Fresh Dhonia Masala",
                "productID": "T3IA1Q2Lp0RX5hETL91x",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 18,
                "product_unit_name": "gm",
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_supplier": "Bazardesh",
                "product_price_retail": 26,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 24,
                "product_sku": "grc-007",
                "product_description": "Daal",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/dal-deshi.webp",
                "product_unit_amount": 250,
                "product_max_cart": 5,
                "product_name": "Moshur Dal (Deshi) - 250gm",
                "productID": "U4F6h19FbDwyfZ9AjAFF",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "categories": [
                    "grocery",
                    "dal",
                    "daal",
                    "shiddho"
                ],
                "tags": [
                    "grocery",
                    "dal",
                    "daal",
                    "shiddho"
                ]
            },
            {
                "product_unit_amount": 25,
                "product_max_cart": 5,
                "product_name": "Tora Bika Cappuccino",
                "product_vendor": "bazardesh",
                "productID": "UcU294DvxqUVe0M9e3HV",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 15,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 15,
                "product_sku": "cfe-003",
                "product_description": "Tora Bika Cappuccino",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530423701971_image%20(2).jpeg?alt=media&token=4f08946b-8a3c-4a0d-9838-063384745e8c",
                "categories": [
                    "beverages",
                    "coffee"
                ],
                "tags": [
                    "beverages",
                    "coffee"
                ]
            },
            {
                "product_name": "Ginger Indian (Ada) (Net Weight ± 10 gm)",
                "productID": "Uq0FCRIfNWOIdc1r0ejI",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 13,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 12,
                "product_sku": "veg-005",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/ginger-100gm.png",
                "product_unit_amount": 100,
                "product_max_cart": 5,
                "categories": [
                    "vegetables",
                    "grocery",
                    "adda",
                    "ginger"
                ],
                "tags": [
                    "vegetables",
                    "grocery",
                    "adda",
                    "ginger"
                ]
            },
            {
                "product_price_retail": 109,
                "product_unit_name": "Ltr",
                "product_stock": 100,
                "product_price": 106,
                "product_sku": "grc-011",
                "product_description": "Fresh Oil",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530013299132_image%20(4).jpeg?alt=media&token=c113a6da-1784-4772-8451-22ad791ff1c7",
                "product_unit_amount": 1,
                "product_max_cart": 5,
                "product_name": "Fresh Soyabean Oil - 1Ltr",
                "productID": "Vfwi1nHwwWTxgkRL98U1",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "categories": [
                    "grocery",
                    "fresh",
                    "soyabean",
                    "oil"
                ],
                "tags": [
                    "grocery",
                    "fresh",
                    "soyabean",
                    "oil"
                ]
            },
            {
                "product_price_retail": 10,
                "product_unit_name": "packet",
                "product_stock": 100,
                "product_price": 10,
                "product_sku": "bis-003",
                "product_description": "Globe Tiffin Chocolate Cream Biscuits ",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530335142095_600-large_default-300x300.jpg?alt=media&token=8a52d6c9-cc9e-48d2-8122-c1cd4b4d228c",
                "product_unit_amount": 1,
                "product_max_cart": 5,
                "product_name": "Globe Tiffin Chocolate Cream Biscuits ",
                "product_vendor": "bazardesh",
                "productID": "VwStOYtUSHiaP1vZMsQK",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "categories": [
                    "snacks",
                    "biscuits"
                ],
                "tags": [
                    "snacks",
                    "biscuits"
                ]
            },
            {
                "product_description": "Green Banana (Kacha Kola)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/kacha-kola-4pcs.png",
                "product_unit_amount": 4,
                "product_max_cart": 2,
                "product_name": "Green Banana (Kacha Kola)",
                "productID": "Vy50zGZEdqjj5Wo7bwhF",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 44,
                "product_unit_name": "pcs",
                "product_stock": 100,
                "product_price": 42,
                "product_sku": "veg-025",
                "categories": [
                    "vegetables",
                    "kacha-kola"
                ],
                "tags": [
                    "vegetables",
                    "kacha-kola"
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Sugar Regular - 100gm",
                "productID": "WLHyAhNERMkNLSt2YK3T",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 7,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 6,
                "product_sku": "grc-015",
                "product_description": "Sugar",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/sugar-100gm.webp",
                "product_unit_amount": 100,
                "categories": [
                    "grocery",
                    "sugar",
                    "chini",
                    "sweet"
                ],
                "tags": [
                    "grocery",
                    "sugar",
                    "chini",
                    "sweet"
                ]
            },
            {
                "productID": "X856FrSXopQWcd44khV6",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 19,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 18,
                "product_sku": "veg-002",
                "product_description": "Onion Indian, piyaj",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/onion-500gm.png",
                "product_unit_amount": 500,
                "product_max_cart": 5,
                "product_name": "Onion (Red Indian Piyaj) - (Net Weight ± 20 gm)",
                "categories": [
                    "vegetables",
                    "piyaj",
                    "onion",
                    "grocery"
                ],
                "tags": [
                    "vegetables",
                    "piyaj",
                    "onion",
                    "grocery"
                ]
            },
            {
                "productID": "XPWrYY9B5QJZ1O4hGH92",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 255,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 245,
                "product_sku": "123456",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/beef-local-500gm.png",
                "product_unit_amount": 500,
                "product_max_cart": 1,
                "product_name": "Beef Bone In (Local) - 500gm (± 20 gm)",
                "categories": [
                    "meat",
                    "beef"
                ],
                "tags": [
                    "meat",
                    "beef"
                ]
            },
            {
                "product_max_cart": 2,
                "product_name": "Rice (Zira Shiddho) - 500gm",
                "productID": "XQhD3IvdfxIXeOLyBz99",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 32,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 31,
                "product_sku": "123456",
                "product_description": "Rice (Zira Shiddho) - 500gm",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-500gm.webp",
                "product_unit_amount": 500,
                "categories": [
                    "grocery",
                    "rice"
                ],
                "tags": [
                    "grocery",
                    "rice"
                ]
            },
            {
                "product_description": null,
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530294061965_2796-1162615-Chicken-Corn-Soup-272-335.png?alt=media&token=60ab0f29-2512-413b-8bcb-ad8b8d548751",
                "product_unit_amount": 24,
                "product_max_cart": 2,
                "product_name": "Knorr Chicken Corn Soup",
                "product_vendor": "bazardesh",
                "productID": "XTDPUEFX4i2U5qSQnIEv",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 40,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 40,
                "product_sku": "knorr",
                "categories": [
                    "snacks",
                    "soup"
                ],
                "tags": [
                    "snacks",
                    "soup"
                ]
            },
            {
                "product_supplier": "bd",
                "product_price_retail": 18,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 18,
                "product_sku": "spice145",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-beef-masala-25gm.png",
                "product_unit_amount": 25,
                "product_max_cart": 2,
                "product_name": "Radhuni Beef Masala",
                "productID": "Y6kL5KMJh7SYIO2qaa7K",
                "product_vendor": "bd",
                "product_status": "active",
                "categories": [
                    "grocery",
                    "spices"
                ],
                "tags": [
                    "grocery",
                    "spices"
                ]
            },
            {
                "product_vendor": "bd",
                "productID": "YHJ232eU2jCfgcAJ5Roa",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 17,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 17,
                "product_sku": "w-025",
                "product_description": "Wheel Washing Powder 2in1",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/household/detergent-wheel-200gm.webp",
                "product_unit_amount": 200,
                "product_max_cart": 3,
                "product_name": "Wheel Washing Powder 2in1 - 200gm",
                "categories": [
                    "households-needs",
                    "detergents"
                ],
                "tags": [
                    "households-needs",
                    "detergents"
                ]
            },
            {
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 3,
                "product_sku": "h-012",
                "product_description": "Sunsilk conditioner",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530079450440_sunsilk-hair-fall-solution-conditioner-mini-7ml-c67.jpg?alt=media&token=f5921706-470e-4185-a6b4-e8ebfa16f2d8",
                "product_unit_amount": 7,
                "product_max_cart": 2,
                "product_name": "Sunsilk Conditioner Shampoo Mini Pack",
                "productID": "YgnKjRanqN0BbyZUX4yy",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 3,
                "categories": [
                    "personal-care",
                    "hair-care",
                    "shampoo",
                    "sunsilk"
                ],
                "tags": [
                    "personal-care",
                    "hair-care",
                    "shampoo",
                    "sunsilk"
                ]
            },
            {
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 10,
                "product_sku": "veg-008",
                "product_description": "Garlic (Roshun 100gm)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/garlic-100gm.png",
                "product_unit_amount": 100,
                "product_max_cart": 5,
                "product_name": "Garlic (Roshun) - (Net Weight ± 10 gm)",
                "productID": "YtzAT7uCK9Uw0adji2qe",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 11,
                "categories": [
                    "vegetables",
                    "grocery",
                    "garlic",
                    "roshun"
                ],
                "tags": [
                    "vegetables",
                    "grocery",
                    "garlic",
                    "roshun"
                ]
            },
            {
                "product_description": "Cucumber (Shosha) (Net Weight ± 20 gm)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/sosha-500gm.png",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "Cucumber (Shosha) (Net Weight ± 20 gm)",
                "productID": "ZDRHzY1A7rrfQq76s6xy",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 23,
                "product_sku": "veg-0258",
                "categories": [
                    "vegetables",
                    "others"
                ],
                "tags": [
                    "vegetables",
                    "others"
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Radhuni Meat Masala",
                "product_vendor": "bd",
                "productID": "ZT0NLQ7NbNmk0lQu1om0",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 15,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 15,
                "product_sku": "123456",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-meat-masala-20gm.png",
                "product_unit_amount": 20,
                "categories": [
                    "grocery",
                    "spices"
                ],
                "tags": [
                    "grocery",
                    "spices"
                ]
            },
            {
                "product_supplier": "Bazardesh",
                "product_price_retail": 22,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 22,
                "product_sku": "h-002",
                "product_description": "Rin Detergent Powder ",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530077748400_rin-detergent.jpg?alt=media&token=72efcd7f-820b-4e1d-8a58-21560fa0e6cc",
                "product_unit_amount": 200,
                "product_max_cart": 2,
                "product_name": "Rin Detergent Powder - 200gm",
                "productID": "ZYusnS1Iad0eJNIqbvXC",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "categories": [
                    "households-needs",
                    "laundry-detergents"
                ],
                "tags": [
                    "households-needs",
                    "laundry-detergents"
                ]
            },
            {
                "product_price": 23,
                "product_sku": "123456",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/fresh-holud-50gm.png",
                "product_unit_amount": 50,
                "product_max_cart": 2,
                "product_name": "Fresh Holud Masala",
                "product_vendor": "bd",
                "productID": "Zeozbjt6ja3QOvbYT6ar",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 23,
                "product_unit_name": "gm",
                "product_stock": 100,
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_description": "Brooke Bond TAAZA Black Tea",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530433155292_taaza-400.jpeg?alt=media&token=8cf49c4f-94e6-4398-bfdc-a8c5764dec54",
                "product_unit_amount": 400,
                "product_max_cart": 2,
                "product_name": "Brooke Bond TAAZA Black Tea",
                "product_vendor": "bazardesh",
                "productID": "ZxuFOynAOcoDuJHIjUXb",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 167,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 165,
                "product_sku": "tea-003",
                "categories": [
                    "beverages",
                    "tea"
                ],
                "tags": [
                    "beverages",
                    "tea"
                ]
            },
            {
                "product_vendor": "bd",
                "productID": "aBbwjDonJhSIm2lz8asN",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 92,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 90,
                "product_sku": "rc12369",
                "product_description": "Chinigura Rice (Polaw)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-chinigura-1kg.png",
                "product_unit_amount": 1,
                "product_max_cart": 3,
                "product_name": "Chinigura Rice (Polaw) - 1kg",
                "categories": [
                    "grocery",
                    "rice"
                ],
                "tags": [
                    "grocery",
                    "rice"
                ]
            },
            {
                "product_price": 490,
                "product_sku": "beef-0123",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/beef-local-1kg.png",
                "product_unit_amount": 1,
                "product_max_cart": 1,
                "product_name": "Beef Bone In (Local) - 1kg (± 50 gm)",
                "productID": "aay1vPhUJflxixbARlUx",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 520,
                "product_unit_name": "kg",
                "product_stock": 100,
                "categories": [
                    "meat",
                    "beef"
                ],
                "tags": [
                    "meat",
                    "beef"
                ]
            },
            {
                "product_max_cart": 2,
                "product_name": "Aarong Dairy Butter - 200gm",
                "productID": "auIwHLeTsOC90V7pEVaq",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 172,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 172,
                "product_sku": "butter",
                "product_description": "Aarong Dairy Butter",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530292531690_image%20(6).jpeg?alt=media&token=2bca3ef2-a93c-4fde-8d69-ab896e815b7c",
                "product_unit_amount": 200,
                "categories": [
                    "breakfast",
                    "dairy",
                    "butter"
                ],
                "tags": [
                    "breakfast",
                    "dairy",
                    "butter"
                ]
            },
            {
                "product_max_cart": 3,
                "product_name": "Onion (Red Indian Piyaj) - (Net Weight ± 20 gm)",
                "productID": "bc2hRhSvbeXsNYGM8aPk",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 72,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 70,
                "product_sku": "veg-098",
                "product_description": "Onion (Red Indian Piyaj) - (Net Weight ± 20 gm)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/onion-2kg.png",
                "product_unit_amount": 2,
                "categories": [
                    "vegetables",
                    "onion"
                ],
                "tags": [
                    "vegetables",
                    "onion"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 535,
                "product_sku": "grc-014",
                "product_description": "Fresh Oil",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530013607308_image%20(6).jpeg?alt=media&token=ed2b5dc2-0c30-4592-bf1c-d72799ea986f",
                "product_unit_amount": 5,
                "product_max_cart": 2,
                "product_name": "Fresh Soyabean Oil - 5Ltr",
                "productID": "c65p0zcVuTknE6eYcsNv",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 540,
                "product_unit_name": "Ltr",
                "categories": [
                    "grocery",
                    "oil",
                    "fresh",
                    "soyabean",
                    ""
                ],
                "tags": [
                    "grocery",
                    "oil",
                    "fresh",
                    "soyabean",
                    ""
                ]
            },
            {
                "product_max_cart": 1,
                "product_name": "Marks Milk Powder Poly",
                "product_vendor": "bazardesh",
                "productID": "cRUJYE1SIBITInrwjabR",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 480,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 480,
                "product_sku": "milk-0012",
                "product_description": "Marks Milk Powder Poly",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530292682474_image%20(7).jpeg?alt=media&token=32c85636-3fe3-4924-abea-3c869696965b",
                "product_unit_amount": 1,
                "categories": [
                    "breakfast",
                    "milk",
                    "powder-milk",
                    "dairy"
                ],
                "tags": [
                    "breakfast",
                    "milk",
                    "powder-milk",
                    "dairy"
                ]
            },
            {
                "productID": "cVBi2KuzAytWVP8OxIJj",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 26,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 26,
                "product_sku": "123458",
                "product_description": "Miniket Rice Standard (Miniket Chal) - 500gm",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-500gm.webp",
                "product_unit_amount": 500,
                "product_max_cart": 5,
                "product_name": "Miniket Rice Standard (Miniket Chal) - 500gm",
                "categories": [
                    "grocery",
                    "rice"
                ],
                "tags": [
                    "grocery",
                    "rice"
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Ginger Indian (Ada)  - (Net Weight ± 10 gm)",
                "productID": "dMH8C7v456ZIswAuGQGO",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 30,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 28,
                "product_sku": "veg-007",
                "product_description": "Ginger Indian (Ada) ",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/ginger-250gm.png",
                "product_unit_amount": "250",
                "categories": [
                    "vegetables",
                    "grocery",
                    "ada",
                    "ginger"
                ],
                "tags": [
                    "vegetables",
                    "grocery",
                    "ada",
                    "ginger"
                ]
            },
            {
                "product_unit_amount": 500,
                "product_max_cart": 6,
                "product_name": "Chinigura Rice (Polaw)",
                "product_vendor": "bd",
                "productID": "eDp3vMDgU3A22rl3uetA",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 46,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 45,
                "product_sku": "cr12546",
                "product_description": "Chinigura Rice (Polaw)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-chinigura-500gm.png",
                "categories": [
                    "grocery",
                    "rice"
                ],
                "tags": [
                    "grocery",
                    "rice"
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Salt (ACI Pure) - 500gm",
                "productID": "eM0hfx7YsnIEw5ArylUE",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 20,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 19,
                "product_sku": "grc-021",
                "product_description": "Salt",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1528477338549_ACI%20Pure%20Salt.jpg?alt=media&token=551f2f9b-ca0b-48c5-a0d3-5f32d01d2274",
                "product_unit_amount": 500,
                "categories": [
                    "grocery",
                    "salt",
                    ""
                ],
                "tags": [
                    "grocery",
                    "salt",
                    ""
                ]
            },
            {
                "product_max_cart": 4,
                "product_name": "Teasel gourd (Kakrol) - 500gm",
                "productID": "eM1a9jwaxgRVC93JExRg",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 25,
                "product_sku": "12340",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/kalrol-500gm.png",
                "product_unit_amount": 500,
                "categories": [
                    "vegetables",
                    ""
                ],
                "tags": [
                    "vegetables",
                    ""
                ]
            },
            {
                "product_max_cart": 5,
                "product_name": "Nestlé NESCAFE 3 in 1 Coffee Mix",
                "productID": "eRJSwbLaVQtj5tmJZrRe",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 10,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 10,
                "product_sku": "cfe-002",
                "product_description": "Nestlé NESCAFE 3 in 1 Coffee Mix",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530423578521_nescafe-pack.jpeg?alt=media&token=e0295e60-26dc-43eb-8eea-2eedd818f2f1",
                "product_unit_amount": 15,
                "categories": [
                    "beverages",
                    "coffee"
                ],
                "tags": [
                    "beverages",
                    "coffee"
                ]
            },
            {
                "productID": "fmMVnCKc9VbVsacQdBKs",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 12,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 10,
                "product_sku": "h-004",
                "product_description": "Vim Dish Washing ",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530078242282_vim-dishwash-bar-75-gm-500x500.png?alt=media&token=a8de9b40-eb39-4d1d-ad25-9d59eb7c4e16",
                "product_unit_amount": 100,
                "product_max_cart": 2,
                "product_name": "Vim Dish Washing Soap ",
                "categories": [
                    "households-needs",
                    "dishwashers"
                ],
                "tags": [
                    "households-needs",
                    "dishwashers"
                ]
            },
            {
                "product_description": "Dal",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/moshur-dal-indian-500mg.webp",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "Moshur Dal (Indian) - 500gm",
                "productID": "fmniOIvGgwYcnU3rBzd6",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 43,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 40,
                "product_sku": "grc-006",
                "categories": [
                    "grocery",
                    "dal",
                    "daal"
                ],
                "tags": [
                    "grocery",
                    "dal",
                    "daal"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 15,
                "product_sku": "grc-0254",
                "product_description": "Pran Meat Masala (Chicken Meat Masala)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/pran-meat-spice.webp",
                "product_unit_amount": 20,
                "product_max_cart": 5,
                "product_name": "Pran Meat Masala (Chicken Meat Masala)",
                "productID": "gCu0KPlal14EGUekig95",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 15,
                "product_unit_name": "gm",
                "categories": [
                    "grocery",
                    "spices"
                ],
                "tags": [
                    "grocery",
                    "spices"
                ]
            },
            {
                "product_unit_amount": 15,
                "product_max_cart": 5,
                "product_name": "Tiger Cumin Powder (Jeera/Jira) - 15gm",
                "productID": "gDM2h2kLqwEuiFEuWezD",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 10,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 10,
                "product_sku": "124566",
                "product_description": "Tiger Cumin Powder (Jeera/Jira) - 15gm",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/tiger-zira-15gm.png",
                "categories": [
                    "grocery",
                    "spices"
                ],
                "tags": [
                    "grocery",
                    "spices"
                ]
            },
            {
                "product_sku": "222",
                "product_description": "Brooke Bond TAAZA Black Tea",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530433237775_taaza-200.jpeg?alt=media&token=7dc83b7b-cbf8-4128-a994-27e61f163bdc",
                "product_unit_amount": 200,
                "product_max_cart": 2,
                "product_name": "Brooke Bond TAAZA Black Tea",
                "productID": "gSaLAgEKsih5g12LM01v",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 87,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 85,
                "categories": [
                    "beverages",
                    "tea"
                ],
                "tags": [
                    "beverages",
                    "tea"
                ]
            },
            {
                "product_name": "Moshur Dal (Kangaroo Lentil) - 250gm",
                "productID": "iAy1vXSoa08TxWFSQcPU",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 32,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 29,
                "product_sku": "grc-258",
                "product_description": "Moshur Dal (Kangaroo Lentil) - 250gm",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/moshur-dal-kangaroo-250mg.webp",
                "product_unit_amount": 250,
                "product_max_cart": 4,
                "categories": [
                    "grocery",
                    "dal",
                    "daal"
                ],
                "tags": [
                    "grocery",
                    "dal",
                    "daal"
                ]
            },
            {
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/beef-regular-500gm.png?versionId=ehkUzbu1q3F9w6k8lWOqb_IJdP8l5Yhx",
                "product_unit_amount": 500,
                "product_max_cart": 3,
                "product_name": "Beef Bone In (Bengal Meat) - 500gm (± 50 gm)",
                "productID": "iIsXkjJ7Gt75ZqQw7yCx",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 260,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 250,
                "product_sku": "beef123",
                "categories": [
                    "meat",
                    "beef"
                ],
                "tags": [
                    "meat",
                    "beef"
                ]
            },
            {
                "product_name": "Chicken Broiler - 1.5kg  (Net Weight ± 30 gm)",
                "productID": "jT73RscSEQkcb9OkpEa7",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 232,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 224,
                "product_sku": "ch-001",
                "product_description": "Chicken",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat-small/chicken-1.5kg.png",
                "product_unit_amount": 1.5,
                "product_max_cart": 5,
                "categories": [
                    "chicken",
                    "meat"
                ],
                "tags": [
                    "chicken",
                    "meat"
                ]
            },
            {
                "product_description": "Red Chilies (Shukna Morich)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/red-chillis.webp",
                "product_unit_amount": 100,
                "product_max_cart": 10,
                "product_name": "Red Chilies (Shukna Morich)",
                "productID": "jj3scfgB7MZXGH1AUXi4",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 37,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 35,
                "product_sku": "grc-0147",
                "categories": [
                    "grocery",
                    "spices"
                ],
                "tags": [
                    "grocery",
                    "spices"
                ]
            },
            {
                "product_description": "Lux Soap",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530079808035_MIN_164706005_SWA.jpg?alt=media&token=65ff62e3-a8d6-4897-bc03-fc53261047aa",
                "product_unit_amount": 75,
                "product_max_cart": 1,
                "product_name": "Lux Soap - 75gm",
                "productID": "jox5qtWZ81QdlQR4q5AE",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 25,
                "product_sku": "t-002",
                "categories": [
                    "personal-care",
                    "bath-body-care",
                    "soap"
                ],
                "tags": [
                    "personal-care",
                    "bath-body-care",
                    "soap"
                ]
            },
            {
                "product_name": "Ispahani Mirzapore Best Leaf Tea - 100gm",
                "productID": "jv0a9c0pFgFmcXlyxJNx",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 46,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 45,
                "product_sku": null,
                "product_description": "Ispahani Mirzapore Best Leaf Tea - 100gm",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530433324481_imt-100.jpeg?alt=media&token=e07e477d-5f9d-4375-a86d-52809d6449ee",
                "product_unit_amount": 100,
                "product_max_cart": 2,
                "categories": [
                    "beverages",
                    "tea"
                ],
                "tags": [
                    "beverages",
                    "tea"
                ]
            },
            {
                "product_description": "vim liquid",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530078968352_vim-liquid.jpg?alt=media&token=fe58bbff-d60e-4902-b53e-8640b8a82fd1",
                "product_unit_amount": 500,
                "product_max_cart": 1,
                "product_name": "Vim Liquid Dish Washer - 500ml ",
                "productID": "k0lOc0ojSHRfGZlp1chx",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 80,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 60,
                "product_sku": "h-007",
                "categories": [
                    "households-needs",
                    "dishwashers",
                    "dish-wash",
                    "vim"
                ],
                "tags": [
                    "households-needs",
                    "dishwashers",
                    "dish-wash",
                    "vim"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 168,
                "product_sku": "tea-001",
                "product_description": "Ispahani Mirzapore Best Leaf Tea",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530433000108_imt-400.gif?alt=media&token=2c2b922b-3b2e-4ba9-a000-267602a5aa2a",
                "product_unit_amount": 400,
                "product_max_cart": 2,
                "product_name": "Ispahani Mirzapore Best Leaf Tea",
                "product_vendor": "bazardesh",
                "productID": "kIH6HBh6JhbiTPFh4R7w",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 168,
                "product_unit_name": "gm",
                "categories": [
                    "beverages",
                    "tea"
                ],
                "tags": [
                    "beverages",
                    "tea"
                ]
            },
            {
                "product_name": "Rice (Zira Shiddho) - 1kg",
                "productID": "kgErtmFPztGU2Sha4OLI",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 64,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 62,
                "product_sku": "grc-003",
                "product_description": "Rice",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-1kg.webp",
                "product_unit_amount": 1,
                "product_max_cart": 10,
                "categories": [
                    "grocery",
                    "rice",
                    "chal"
                ],
                "tags": [
                    "grocery",
                    "rice",
                    "chal"
                ]
            },
            {
                "product_unit_amount": 20,
                "product_max_cart": 2,
                "product_name": "Fresh Chicken Masala",
                "product_vendor": "bd",
                "productID": "l7nX19Q0zgTRCuOy6dTX",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 15,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 15,
                "product_sku": "ji908",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/fresh-chicken-masala-20gm.png",
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_price": 40,
                "product_sku": "1256",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/household/vim-liquid-250ml.png",
                "product_unit_amount": 1,
                "product_max_cart": 2,
                "product_name": "Vim Liquid 250ml Pack",
                "productID": "lFKbAxrIuQ2WNkClAixf",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 40,
                "product_unit_name": "pkt",
                "product_stock": 100,
                "categories": [
                    "households-needs",
                    "dishwashers"
                ],
                "tags": [
                    "households-needs",
                    "dishwashers"
                ]
            },
            {
                "product_max_cart": 2,
                "product_name": "Green Papaya (Net Weight ± 20 gm)",
                "productID": "ln8JblnBx7ccykcZGEYR",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 22,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 21,
                "product_sku": "veg-023",
                "product_description": "Green Papaya",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/papaya-1kg.png",
                "product_unit_amount": 1,
                "categories": [
                    "vegetables",
                    "papaya"
                ],
                "tags": [
                    "vegetables",
                    "papaya"
                ]
            },
            {
                "product_unit_amount": 75,
                "product_max_cart": 1,
                "product_name": "Dettol Soap",
                "productID": "mCOrstdKmyV7dEZzpy7W",
                "product_vendor": "bazardesh",
                "product_status": null,
                "product_supplier": "Bazardesh",
                "product_price_retail": 34,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 34,
                "product_sku": "t-003",
                "product_description": "Dettol Soap",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530079900646_0021738_dettol-soap-original-65gm_450.png?alt=media&token=ae31f349-32f0-4997-bb41-7a0de4fa300f",
                "categories": [
                    "personal-care",
                    "bath-body-care",
                    "soap"
                ],
                "tags": [
                    "personal-care",
                    "bath-body-care",
                    "soap"
                ]
            },
            {
                "product_supplier": "Bazardesh",
                "product_price_retail": 38,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 37,
                "product_sku": "h-003",
                "product_description": "SURF EXCEL Washing Powder",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530077949810_Surf-Excel-Quick-Wash-Detergent-SDL361546770-1-33ee5.jpg?alt=media&token=5e5aaaef-c0b0-4328-9fd4-0a587ffede02",
                "product_unit_amount": 200,
                "product_max_cart": 1,
                "product_name": "Surf Excel Washing Powder - 200gm",
                "productID": "mF1QpscDUhcS3hgB0z1S",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "categories": [
                    "households-needs",
                    "laundry-detergents"
                ],
                "tags": [
                    "households-needs",
                    "laundry-detergents"
                ]
            },
            {
                "productID": "mW2OwYw2EbuiYI6jTck6",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 24,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 22,
                "product_sku": "veg-022",
                "product_description": "Snake Gourd (Chichinga) (Net Weight ± 10 gm)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/chichinga-500gm.png",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "Snake Gourd (Chichinga) (Net Weight ± 10 gm)",
                "categories": [
                    "vegetables",
                    "chichinga",
                    "others"
                ],
                "tags": [
                    "vegetables",
                    "chichinga",
                    "others"
                ]
            },
            {
                "product_description": "Eggs",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/eggs-12pcs.png",
                "product_unit_amount": 12,
                "product_max_cart": 3,
                "product_name": "Chicken Eggs (Layer) - 12pcs",
                "productID": "nSnUJWoPtUCleW0SW7Gs",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 114,
                "product_unit_name": "pcs",
                "product_stock": 100,
                "product_price": 104,
                "product_sku": "e-26",
                "categories": [
                    "eggs",
                    "meat"
                ],
                "tags": [
                    "eggs",
                    "meat"
                ]
            },
            {
                "product_unit_amount": 28,
                "product_max_cart": 3,
                "product_name": "Knorr Thai Soup",
                "product_vendor": "bazardesh",
                "productID": "nZV09wFLalqzVXoq9nSU",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 40,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 40,
                "product_sku": "222",
                "product_description": null,
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530294160697_0003080-knorr-thai-veg-soup.jpg?alt=media&token=9bb33881-1bcc-4125-808a-f3830b11f255",
                "categories": [
                    "snacks",
                    "soup"
                ],
                "tags": [
                    "snacks",
                    "soup"
                ]
            },
            {
                "product_description": "Kacha Morich",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/green-chili-100gm.png",
                "product_unit_amount": 100,
                "product_max_cart": 2,
                "product_name": "Green Chili (Khacha Morich) (Net Weight ± 10 gm)",
                "productID": "ncWnouOLRASYicVLYItY",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 22,
                "product_sku": "veg-004",
                "categories": [
                    "vegetables",
                    "grocery",
                    "spice",
                    "chili",
                    "morich",
                    "kacha"
                ],
                "tags": [
                    "vegetables",
                    "grocery",
                    "spice",
                    "chili",
                    "morich",
                    "kacha"
                ]
            },
            {
                "product_description": "Nestlé Nescafé Classic Instant Coffee Jar",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530423409501_nescafe-jar.jpeg?alt=media&token=81bd8c16-efe2-4c6d-b0d5-852221811761",
                "product_unit_amount": 200,
                "product_max_cart": 2,
                "product_name": "Nestlé Nescafé Classic Instant Coffee Jar",
                "product_vendor": "bazardesh",
                "productID": "o2aJQ3z5xPXJ99H4G1qh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 490,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 490,
                "product_sku": "cfe-001",
                "categories": [
                    "beverages",
                    "coffee"
                ],
                "tags": [
                    "beverages",
                    "coffee"
                ]
            },
            {
                "product_max_cart": 2,
                "product_name": "Clear Men Shampoo Mini Pack",
                "productID": "olWE9bJ6gj02zZcQmsKJ",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 4,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 4,
                "product_sku": "h-013",
                "product_description": "Clear Men",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530079559508_clear-men-anti-dandruff-shampoo-cool-sport-menthol-10-mini-pack-472.jpg?alt=media&token=b52b885a-35e3-482e-9350-ca21b1d1a314",
                "product_unit_amount": 5,
                "categories": [
                    "personal-care",
                    "hair-care",
                    "shampoo"
                ],
                "tags": [
                    "personal-care",
                    "hair-care",
                    "shampoo"
                ]
            },
            {
                "product_name": "Fresh Chili Powder (Gura Morich)",
                "productID": "omuXPCZLhGHLZJETSxy3",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 25,
                "product_sku": "123456",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/fresh-morich-50gm.png",
                "product_unit_amount": 50,
                "product_max_cart": 2,
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 22,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 22,
                "product_sku": "milk-003",
                "product_description": "PRAN UHT Milk",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530292305293_0007453_pran-uht-milk-200ml-4000000003.jpg?alt=media&token=09f90727-8284-4998-b616-a7defafbf6ab",
                "product_unit_amount": 200,
                "product_max_cart": 3,
                "product_name": "PRAN UHT Milk - 200ml",
                "productID": "pNFimglL9NdFk587yhf3",
                "product_vendor": "bazardesh",
                "categories": [
                    "breakfast",
                    "dairy",
                    "milk"
                ],
                "tags": [
                    "breakfast",
                    "dairy",
                    "milk"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 35,
                "product_sku": "veg-0259",
                "product_description": "Long Big Lemon",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/lemon-4pcs.png",
                "product_unit_amount": 4,
                "product_max_cart": 2,
                "product_name": "Long Big Lemon",
                "productID": "qLrLw3WAis4amMRLKHe2",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 32,
                "product_unit_name": "pcs",
                "categories": [
                    "vegetables",
                    "others"
                ],
                "tags": [
                    "vegetables",
                    "others"
                ]
            },
            {
                "product_vendor": "bazardesh",
                "productID": "qrO47qlHgVuUGsLGFHFk",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 165,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 165,
                "product_sku": "222",
                "product_description": "Nestlé Nescafé Classic Instant Coffee Jar",
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F23892%2Fnestle-nescafe-classic-instant-coffee-jar-50-gm.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 50,
                "product_max_cart": 2,
                "product_name": "Nestlé Nescafé Classic Instant Coffee Jar",
                "categories": [
                    "beverages",
                    "coffee"
                ],
                "tags": [
                    "beverages",
                    "coffee"
                ]
            },
            {
                "product_description": "SURF EXCEL Washing Powder Mini Pack",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530076669184_Surf-Excel-Quick-Wash-Detergent-SDL361546770-1-33ee5.jpg?alt=media&token=b54bfa88-a078-463e-b29c-6984ca1640cd",
                "product_unit_amount": "20",
                "product_max_cart": 1,
                "product_name": "Surf Excel Washing Powder Mini Pack",
                "productID": "rRy6OBXQ3ZlLA5EvSdjV",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 5,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 5,
                "product_sku": "h-001",
                "categories": [
                    "households-needs",
                    "laundry-detergents"
                ],
                "tags": [
                    "households-needs",
                    "laundry-detergents"
                ]
            },
            {
                "product_description": "PRAN UHT Milk",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530292171080_PRAN-UHT-Milk-200.jpg?alt=media&token=4a1962e9-736c-49f1-b3a6-9fd738d4e9eb",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "PRAN UHT Milk - 500ml",
                "productID": "ruED02IuybnyDayKugWQ",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 45,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 45,
                "product_sku": "milk-002",
                "categories": [
                    "breakfast",
                    "dairy",
                    "milk"
                ],
                "tags": [
                    "breakfast",
                    "dairy",
                    "milk"
                ]
            },
            {
                "product_max_cart": 3,
                "product_name": "Chicken Eggs (Layer) - 6pcs",
                "productID": "rzWEk5HTYdOqgrF1xnVF",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 57,
                "product_unit_name": "pcs",
                "product_stock": 100,
                "product_price": 57,
                "product_sku": "grc-22",
                "product_description": "Chicken Eggs (Layer) - 6pcs",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/eggs-6pcs.png",
                "product_unit_amount": 6,
                "categories": [
                    "meat",
                    "eggs"
                ],
                "tags": [
                    "meat",
                    "eggs"
                ]
            },
            {
                "product_unit_amount": "500",
                "product_max_cart": 2,
                "product_name": "Long Bean (Borboti) (Net Weight ± 30 gm)",
                "productID": "rzp1M9N7Bz48SlkxNjtd",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 28,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 22,
                "product_sku": "veg-024",
                "product_description": "Long Bean (Borboti)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/borboti-500gm.png",
                "categories": [
                    "vegetables",
                    "borboti",
                    "others"
                ],
                "tags": [
                    "vegetables",
                    "borboti",
                    "others"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 35,
                "product_sku": "soup",
                "product_description": null,
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530293908918_1.jpg?alt=media&token=56e9abf0-6817-474d-ac8d-88699a57bbc9",
                "product_unit_amount": 17.5,
                "product_max_cart": 3,
                "product_name": "Maggi Healthy Thai Soup",
                "product_vendor": "bazardesh",
                "productID": "s45yFWAk2rVARJD1BWgK",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 35,
                "product_unit_name": "gm",
                "categories": [
                    "snacks",
                    "soup"
                ],
                "tags": [
                    "snacks",
                    "soup"
                ]
            },
            {
                "product_description": "ACI Aerosol",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530079250537_800-ml-front.jpg?alt=media&token=6894a942-9288-4130-857c-d6aba8c8b4fb",
                "product_unit_amount": 800,
                "product_max_cart": 1,
                "product_name": "ACI Aerosol - 800ml",
                "productID": "sDLHUoWXQM0rXrFehANx",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 440,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 435,
                "product_sku": "h-011",
                "categories": [
                    "households-needs",
                    "repellents"
                ],
                "tags": [
                    "households-needs",
                    "repellents"
                ]
            },
            {
                "product_description": "Fresh Oil",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530013519883_image%20(5).jpeg?alt=media&token=f534d7ac-899f-425c-96e7-efc2b1756c09",
                "product_unit_amount": 2,
                "product_max_cart": 5,
                "product_name": "Fresh Soyabean Oil - 2Ltr",
                "productID": "sUsJeYyXV77GVd9hGnWp",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 216,
                "product_unit_name": "Ltr",
                "product_stock": 100,
                "product_price": 214,
                "product_sku": "grc-013",
                "categories": [
                    "grocery",
                    "oil",
                    "fresh",
                    "soyabean",
                    "oil"
                ],
                "tags": [
                    "grocery",
                    "oil",
                    "fresh",
                    "soyabean",
                    "oil"
                ]
            },
            {
                "productID": "sWKJ7jNODQvtZ7N1dcjW",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 17,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 17,
                "product_sku": "butter",
                "product_description": "Magi",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530293696472_51RCrrywfjL._SX385_.jpg?alt=media&token=c39264b3-7715-463f-b831-421a2ce2316a",
                "product_unit_amount": 62,
                "product_max_cart": 5,
                "product_name": "Maggi 2 Minutes Noodles",
                "categories": [
                    "snacks",
                    "noodles"
                ],
                "tags": [
                    "snacks",
                    "noodles"
                ]
            },
            {
                "product_description": "Long Brinjal Black (Begun)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/begun-500gm.png",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "Long Brinjal Black (Begun) (Net Weight ± 20 gm)",
                "productID": "sjMMGo5tJvSyVmhzfB4V",
                "product_vendor": "Bazardesh",
                "product_status": null,
                "product_supplier": "Bazardesh",
                "product_price_retail": 23,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 21,
                "product_sku": "veg-030",
                "categories": [
                    "vegetables",
                    "begun",
                    "brinjal"
                ],
                "tags": [
                    "vegetables",
                    "begun",
                    "brinjal"
                ]
            },
            {
                "product_description": "Radhuni Chili (Morich) Powder",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-morich-mini.webp",
                "product_unit_amount": 50,
                "product_max_cart": 1,
                "product_name": "Radhuni Chili Powder (Gura Morich)",
                "productID": "t4Xw20oagyOZSKBvzflw",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 25,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 25,
                "product_sku": "sp-003",
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_description": "Potol",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/vegetables/potol-500gm.png",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "Potol - (Net Weight ± 30 gm)",
                "productID": "tKAYuh5ojMGCHDc1f6SH",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 21,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 20,
                "product_sku": "veg-026",
                "categories": [
                    "vegetables",
                    "potols",
                    "others"
                ],
                "tags": [
                    "vegetables",
                    "potols",
                    "others"
                ]
            },
            {
                "productID": "tWlvzjpIbohml24GFxHr",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 22,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 20,
                "product_sku": "grc-005",
                "product_description": "Moshur Dal (Indian)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/moshur-dal-indian-250mg.webp",
                "product_unit_amount": 250,
                "product_max_cart": 5,
                "product_name": "Moshur Dal (Indian) - 250gm",
                "categories": [
                    "grocery",
                    "dal",
                    "daal"
                ],
                "tags": [
                    "grocery",
                    "dal",
                    "daal"
                ]
            },
            {
                "product_sku": "ti-003",
                "product_description": "Fresh Pink Toilet Tissue",
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F35806%2Ffresh-pink-toilet-tissue-1-pcs.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 1,
                "product_max_cart": 10,
                "product_name": "Fresh Pink Toilet Tissue",
                "productID": "taE9sqUUomhk1K9zanfr",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "bazardesh",
                "product_price_retail": 25,
                "product_unit_name": "roll",
                "product_stock": 100,
                "product_price": 25,
                "categories": [
                    "households-needs",
                    "tissues"
                ],
                "tags": [
                    "households-needs",
                    "tissues"
                ]
            },
            {
                "product_sku": "h-005",
                "product_description": "Wheel Washing Powder",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530078089334_wheel-2-in-1.jpg?alt=media&token=8851b096-d155-48d4-9835-ea17399f35df",
                "product_unit_amount": 200,
                "product_max_cart": 1,
                "product_name": "Wheel Washing Powder - 200gm",
                "product_vendor": "bazardesh",
                "productID": "urB6JoJhiCyleqO6cHbb",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 17,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 16,
                "categories": [
                    "home-cleaning",
                    "detergent",
                    "washing",
                    "wheel"
                ],
                "tags": [
                    "home-cleaning",
                    "detergent",
                    "washing",
                    "wheel"
                ]
            },
            {
                "product_sku": "ts12548",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/household/tissue-fresh-roll.png",
                "product_unit_amount": 1,
                "product_max_cart": 5,
                "product_name": "Fresh Toilet Tissue",
                "productID": "v4eLvd9DFvdOb3jSn42C",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 17,
                "product_unit_name": "roll",
                "product_stock": 100,
                "product_price": 17,
                "categories": [
                    "households-needs",
                    "tissues"
                ],
                "tags": [
                    "households-needs",
                    "tissues"
                ]
            },
            {
                "productID": "vfhQZdfOlTmsYYdd9hoK",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 24,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 23,
                "product_sku": "sp-004",
                "product_description": "Radhuni Turmeric Powder",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/radhuni-holud-mini.webp",
                "product_unit_amount": 50,
                "product_max_cart": 3,
                "product_name": "Radhuni Turmeric Powder (Holud)",
                "categories": [
                    "grocery",
                    "spice"
                ],
                "tags": [
                    "grocery",
                    "spice"
                ]
            },
            {
                "product_price": 195,
                "product_sku": "12456",
                "product_description": "Head & Shoulders Shampoo 200ml",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/household/headandshoulder-shampoo-170ml.png",
                "product_unit_amount": 170,
                "product_max_cart": 2,
                "product_name": "Head & Shoulders Shampoo 170ml",
                "productID": "w4WoSXeFPX3prnmRs1IB",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 195,
                "product_unit_name": "ml",
                "product_stock": 100,
                "categories": [
                    "personal-care",
                    "hair-care"
                ],
                "tags": [
                    "personal-care",
                    "hair-care"
                ]
            },
            {
                "product_description": "Kolson Macaroni Screw",
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F19453%2Fkolson-macaroni-screw-400-gm.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "Kolson Macaroni Screw",
                "product_vendor": "bd",
                "productID": "wIA9EgRxgaeVcV61CSGe",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 65,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 65,
                "product_sku": "adjk",
                "categories": [
                    "snacks",
                    "pasta"
                ],
                "tags": [
                    "snacks",
                    "pasta"
                ]
            },
            {
                "product_sku": "grc-010",
                "product_description": "Soyabean Oil",
                "product_image_url": "https://firebasestorage.googleapis.com/v0/b/bazardesh.appspot.com/o/productImage%2F1530013299132_image%20(4).jpeg?alt=media&token=c113a6da-1784-4772-8451-22ad791ff1c7",
                "product_unit_amount": 500,
                "product_max_cart": 5,
                "product_name": "Fresh Soyabean Oil - 500ml",
                "productID": "wN07yiKCuihIhvnVRwjY",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 57,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 56,
                "categories": [
                    "grocery",
                    "oil",
                    "soyabean",
                    "fresh"
                ],
                "tags": [
                    "grocery",
                    "oil",
                    "soyabean",
                    "fresh"
                ]
            },
            {
                "product_description": "Pepsi Pet",
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F28902%2Fpepsi-pet-250-ml.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": 250,
                "product_max_cart": 5,
                "product_name": "Pepsi Pet",
                "product_vendor": "bazardesh",
                "productID": "wOZjAWgk5AIPn63UJasg",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 15,
                "product_unit_name": "ml",
                "product_stock": 100,
                "product_price": 15,
                "product_sku": null,
                "categories": [
                    "beverages",
                    "soft-drinks"
                ],
                "tags": [
                    "beverages",
                    "soft-drinks"
                ]
            },
            {
                "product_sku": "e-25",
                "product_description": "Eggs",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/eggs-4pcs.png",
                "product_unit_amount": 4,
                "product_max_cart": 5,
                "product_name": "Chicken Eggs (Layer)  - 4pcs",
                "productID": "wV1FFoSj8WBbT9WmsOpM",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 39,
                "product_unit_name": "pcs",
                "product_stock": 100,
                "product_price": 38,
                "categories": [
                    "eggs",
                    "meat"
                ],
                "tags": [
                    "eggs",
                    "meat"
                ]
            },
            {
                "productID": "wqpdjCDsQv69LvqFtQ3x",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 28,
                "product_unit_name": "gm",
                "product_stock": 100,
                "product_price": 24,
                "product_sku": "12365",
                "product_description": "Rice (Super Mala Atop) - 500gm",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-500gm.webp",
                "product_unit_amount": 500,
                "product_max_cart": 2,
                "product_name": "Rice (Super Mala Atop) - 500gm",
                "categories": [
                    "grocery",
                    "rice"
                ],
                "tags": [
                    "grocery",
                    "rice"
                ]
            },
            {
                "product_name": "Beef Bone in (Bengal Meat) - 1kg ( ± 50 gm)",
                "productID": "xRUXCfiZ1v3jFAUQUwdb",
                "product_vendor": "bd",
                "product_status": "active",
                "product_supplier": "bd",
                "product_price_retail": 520,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 500,
                "product_sku": "beef125",
                "product_description": null,
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/meat/beef-regular-1kg.png?versionId=0JLA2Fh8hq5B12ZhOS3VAtALLuElFsMi",
                "product_unit_amount": 1,
                "product_max_cart": 3,
                "categories": [
                    "meat",
                    "beef"
                ],
                "tags": [
                    "meat",
                    "beef"
                ]
            },
            {
                "product_max_cart": 10,
                "product_name": "Miniket Rice Standard (Miniket Chal) - 1kg",
                "productID": "xckCBTlR11fHU1U0ciOJ",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 53,
                "product_unit_name": "kg",
                "product_stock": 100,
                "product_price": 51,
                "product_sku": "grc-001",
                "product_description": "Miniket Rice Premium (Miniket Chal)",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-1kg.webp",
                "product_unit_amount": 1,
                "categories": [
                    "grocery",
                    "rice",
                    "chal"
                ],
                "tags": [
                    "grocery",
                    "rice",
                    "chal"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 58,
                "product_sku": null,
                "product_description": null,
                "product_image_url": "https://eggmediacdnsg.azureedge.net/image?fetch=/v_5,f_auto,fl_lossy,q_auto:low,w_600/https%3A%2F%2Faz741509.vo.msecnd.net%2Fp%2F19268%2Fcoca-cola-125-ltr.jpeg%3Fv%3D4%26targetSize%3D600",
                "product_unit_amount": "1",
                "product_max_cart": 5,
                "product_name": "Coca-Cola (Coke) - 1Ltr",
                "productID": "ysVxQGChsz885w6wXYNO",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 60,
                "product_unit_name": "Ltr",
                "categories": [
                    "beverages",
                    "soft-drinks"
                ],
                "tags": [
                    "beverages",
                    "soft-drinks"
                ]
            },
            {
                "product_stock": 100,
                "product_price": 45,
                "product_sku": null,
                "product_description": "Rice (Ataish Shiddho Chal) 1kg",
                "product_image_url": "https://s3.ap-south-1.amazonaws.com/bazardesh/products/grocery/rice-1kg.webp",
                "product_unit_amount": 1,
                "product_max_cart": 5,
                "product_name": "Rice (Ataish Shiddho Chal) - 1kg",
                "productID": "yv5VkHgobRPuOknBcmOa",
                "product_vendor": "bazardesh",
                "product_status": "active",
                "product_supplier": "Bazardesh",
                "product_price_retail": 48,
                "product_unit_name": "kg",
                "categories": [
                    "grocery",
                    "chal",
                    "rice",
                    "shiddho"
                ],
                "tags": [
                    "grocery",
                    "chal",
                    "rice",
                    "shiddho"
                ]
            }
        ]
    }
];
//# sourceMappingURL=seed.js.map