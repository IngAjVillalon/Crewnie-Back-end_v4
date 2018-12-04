"use strict";
exports.__esModule = true;
var option_model_1 = require("../api/option/option.model");
var OptionService = /** @class */ (function () {
    function OptionService() {
        this.getOptionByName = function (name) {
            return option_model_1["default"].findOne({ name: name })
                .exec();
        };
        this.getOptions = function () {
            return option_model_1["default"]
                .find()
                .exec()
                .then(function (options) {
                var optionsObj = {};
                options.forEach(function (opt) {
                    optionsObj[opt.name] = opt.value;
                });
                // console.log('------------',optionsObj, options)
                return optionsObj;
            });
        };
    }
    return OptionService;
}());
exports["default"] = OptionService;
//# sourceMappingURL=option.service.js.map