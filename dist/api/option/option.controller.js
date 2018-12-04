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
var option_model_1 = require("./option.model");
var base_1 = require("./../base");
var OptionCtrl = /** @class */ (function (_super) {
    __extends(OptionCtrl, _super);
    function OptionCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = option_model_1["default"];
        _this.getByName = function (req, res) {
            _this.model.findOne({ name: req.params.name })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res, 404));
        };
        _this.getByGroupName = function (req, res) {
            _this.model.find({ group: req.params.name })
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(function (options) {
                console.log(req.params.name, options);
                var group = { group: req.params.name };
                if (!options.length) {
                    throw { message: 'No options found' };
                }
                options.forEach(function (opt) {
                    group[opt.name] = opt.value;
                });
                return group;
            })
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res, 404));
        };
        _this.updateByName = function (req, res) {
            _this.model.findOne({ name: req.params.name })
                .exec()
                .then(_this.patchUpdates({ value: req.body.value, group: req.body.group }))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res, 404));
        };
        return _this;
    }
    return OptionCtrl;
}(base_1["default"]));
exports["default"] = OptionCtrl;
//# sourceMappingURL=option.controller.js.map