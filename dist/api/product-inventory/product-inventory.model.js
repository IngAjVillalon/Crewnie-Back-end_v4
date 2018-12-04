"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var ObjectId = mongoose_1.Schema.Types.ObjectId;
var ProductInventorySchema = new mongoose_1.Schema({
    productID: { type: ObjectId, ref: 'Product' },
    sku: String,
    stock: Number,
    supplierID: Number,
    createdAt: { type: Date, "default": Date.now },
    createdBy: { type: ObjectId, ref: 'User' },
    updatedAt: { type: Date, "default": Date.now },
    updatedBy: { type: ObjectId, ref: 'User' },
    active: { type: Boolean, "default": true }
});
exports["default"] = mongoose_1.model('ProductInventory', ProductInventorySchema);
//# sourceMappingURL=product-inventory.model.js.map