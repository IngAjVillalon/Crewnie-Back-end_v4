"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var product_model_1 = require("./product.model");
var base_1 = require("./../base");
var ProductCtrl = /** @class */ (function (_super) {
    __extends(ProductCtrl, _super);
    function ProductCtrl() {
        var _this = _super.call(this) || this;
        _this.model = product_model_1["default"];
        _this.all = function (req, res) {
            return product_model_1["default"].find()
                .exec()
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getByID = function (req, res) {
            product_model_1["default"].findOne({
                _id: req.params.id
            })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getProducts = function (req, res) {
            var slug = req.params.slug;
            var search = req.query.search;
            var sort = req.query.sort;
            var skip = parseInt(req.query.skip);
            var limit = parseInt(req.query.limit);
            req.query.where = {};
            // SEARCH IN NAME
            if (search) {
                req.query.where = {
                    $or: [
                        // { $text: { $search: search } },
                        { name: { $regex: search, $options: 'i' } }
                    ]
                };
            }
            // SEARCH BY CAT AND SUB CAT
            if (slug) {
                var slugRegExp = new RegExp(slug, "ig");
                req.query.where = {
                    $or: [
                        { categories: { $regex: slugRegExp } },
                        { tags: { $regex: slugRegExp } }
                    ]
                };
            }
            // Exclude child products
            // console.log('-----', req.query.where)
            // req.query.where.isChild = false;
            product_model_1["default"]
                .find(req.query.where)
                .limit(limit)
                .skip(skip)
                .sort(sort)
                .populate('children', '-tags -categories')
                //   .select(select)
                .exec()
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getProductsWithCount = function (req, res) {
            var search = req.query.search;
            var slug = req.params.slug;
            if (search) {
                req.query.where = {
                    $or: [
                        // { $text: { $search: search } },
                        { name: { $regex: search, $options: 'i' } }
                    ]
                };
            }
            // SEARCH BY CAT AND SUB CAT
            if (slug) {
                var slugRegExp = new RegExp(slug, "ig");
                req.query.where = {
                    $or: [
                        { categories: { $regex: slugRegExp } },
                        { tags: { $regex: slugRegExp } }
                    ]
                };
            }
            _this.indexWithCount(req, res);
        };
        _this.updateByProductID = function (req, res) {
            if (req.body._id) {
                delete req.body._id;
            }
            // !!!!!!!!!!!!!! MUST HAVE user._id
            req.body.updatedBy = req.user._id;
            product_model_1["default"].findOne({
                _id: req.params.id
            })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.patchUpdates(req.body))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        return _this;
    }
    return ProductCtrl;
}(base_1["default"]));
exports["default"] = ProductCtrl;
//# sourceMappingURL=product.controller.js.map