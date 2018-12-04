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
var category_model_1 = require("./category.model");
var base_1 = require("./../base");
var CategoryCtrl = /** @class */ (function (_super) {
    __extends(CategoryCtrl, _super);
    function CategoryCtrl() {
        var _this = _super.call(this) || this;
        _this.model = category_model_1["default"];
        _this.getPublicCategories = function (req, res) {
            category_model_1["default"].find()
                .populate('tags', 'name bengaliName slug active')
                .select('name bengaliName slug imgUrl active position')
                .sort('position')
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getByID = function (req, res) {
            category_model_1["default"].findOne({
                _id: req.params.id
            })
                .populate('tags', 'name bengaliName slug active')
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.updateByID = function (req, res) {
            if (req.body._id) {
                delete req.body._id;
            }
            // !!!!!!!!!!!!!! MUST HAVE user._id
            req.body.updatedBy = req.user ? req.user._id : null;
            category_model_1["default"].findOne({
                _id: req.params.id
            })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.patchUpdates(req.body))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        return _this;
    }
    return CategoryCtrl;
}(base_1["default"]));
exports["default"] = CategoryCtrl;
//# sourceMappingURL=category.controller.js.map