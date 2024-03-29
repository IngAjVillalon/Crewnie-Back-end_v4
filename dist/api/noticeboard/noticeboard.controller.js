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
var noticeboard_model_1 = require("./noticeboard.model");
var NoticeboardCtrl = /** @class */ (function (_super) {
    __extends(NoticeboardCtrl, _super);
    function NoticeboardCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = noticeboard_model_1["default"];
        return _this;
    }
    return NoticeboardCtrl;
}(base_1["default"]));
exports["default"] = NoticeboardCtrl;
//# sourceMappingURL=noticeboard.controller.js.map