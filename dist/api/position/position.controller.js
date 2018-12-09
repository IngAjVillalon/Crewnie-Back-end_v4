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
var base_1 = require("../base");
var position_model_1 = require("./position.model");
var ProjectCtrl = /** @class */ (function (_super) {
    __extends(ProjectCtrl, _super);
    function ProjectCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = position_model_1["default"];
        _this.saveUserFeedback = function (req, res) {
            var depertment = req.body;
            depertment.user = req.user._id;
            var newDepertment = new position_model_1["default"](depertment);
            newDepertment.save()
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getAdminFeedbacks = function (req, res) {
            position_model_1["default"].find()
                .populate('user', 'displayName eamil phoneNumber createdAt')
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getDepertments = function (req, res) {
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
            position_model_1["default"]
                .find(req.query.where)
                .limit(limit)
                .skip(skip)
                .sort(sort)
                .populate('children', '-tags -categories')
                //   .select(select)
                .exec()
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getPositionsByDepartment = function (req, res) {
            var departmentId = req.params.id;
            var sort = req.query.sort;
            var skip = parseInt(req.query.skip);
            var limit = parseInt(req.query.limit);
            position_model_1["default"]
                .find({ 'departmentId': departmentId })
                .limit(limit)
                .skip(skip)
                .sort(sort)
                .exec()
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        return _this;
    }
    return ProjectCtrl;
}(base_1["default"]));
exports["default"] = ProjectCtrl;
//# sourceMappingURL=position.controller.js.map