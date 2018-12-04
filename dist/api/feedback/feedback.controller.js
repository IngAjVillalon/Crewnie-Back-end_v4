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
var feedback_model_1 = require("./feedback.model");
var FeedbackCtrl = /** @class */ (function (_super) {
    __extends(FeedbackCtrl, _super);
    function FeedbackCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = feedback_model_1["default"];
        _this.saveUserFeedback = function (req, res) {
            var feedback = req.body;
            feedback.user = req.user._id;
            var newFeedback = new feedback_model_1["default"](feedback);
            newFeedback.save()
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        _this.getAdminFeedbacks = function (req, res) {
            feedback_model_1["default"].find()
                .populate('user', 'displayName eamil phoneNumber createdAt')
                .exec()
                .then(_this.handleEntityNotFound(res))
                .then(_this.respondWithResult(res))["catch"](_this.handleError(res));
        };
        return _this;
    }
    return FeedbackCtrl;
}(base_1["default"]));
exports["default"] = FeedbackCtrl;
//# sourceMappingURL=feedback.controller.js.map