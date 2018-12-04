"use strict";
exports.__esModule = true;
var seeder = require('mongoose-seed');
var config_1 = require("../config");
var config = new config_1["default"]();
var fs = require('fs');
var path = require('path');
var model = 'Area';
// Data array containing seed data - documents organized by Model
var data = [
    {
        model: model,
        documents: [{
                "active": true,
                "area_name": "Surma R/A"
            }]
    }
];
// Connect to MongoDB via Mongoose
seeder.connect(config.mongoURL, function () {
    // Load Mongoose models
    seeder.loadModels([
        'dist/api/area/area.area.js'
    ]);
    // Clear specified collections
    seeder.clearModels([model], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });
    });
});
//# sourceMappingURL=areas.js.map