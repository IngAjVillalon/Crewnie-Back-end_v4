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
var area_model_1 = require("./area.model");
var base_1 = require("./../base");
var AreaCtrl = /** @class */ (function (_super) {
    __extends(AreaCtrl, _super);
    function AreaCtrl() {
        var _this = _super.call(this) || this;
        _this.model = area_model_1["default"];
        _this.getByID = function (req, res) {
            area_model_1["default"].findOne({
                _id: req.params.id
            })
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
            area_model_1["default"].findOne({
                _id: req.params.id
            })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.patchUpdates(req.body))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        return _this;
    }
    return AreaCtrl;
}(base_1["default"]));
exports["default"] = AreaCtrl;
//# sourceMappingURL=area.controller.js.map