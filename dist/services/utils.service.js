"use strict";
exports.__esModule = true;
var UtilsService = /** @class */ (function () {
    function UtilsService() {
        var _this = this;
        this.toHexString = function (str) {
            if (str.toHexString) {
                return str.toHexString();
            }
            return str;
        };
        this.isEntityOwner = function (entityID, userID) {
            entityID = _this.toHexString(entityID);
            userID = _this.toHexString(userID);
            return entityID === userID;
        };
        this.stringToSlug = function (str) {
            str = str.replace(/^\s+|\s+$/g, ''); // trim
            str = str.toLowerCase();
            // remove accents, swap ñ for n, etc
            var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to = "aaaaeeeeiiiioooouuuunc------";
            for (var i = 0, l = from.length; i < l; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }
            str = str.replace('.', '-') // replace a dot by a dash 
                .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                .replace(/\s+/g, '-') // collapse whitespace and replace by a dash
                .replace(/-+/g, '-'); // collapse dashes
            return str;
        };
    }
    return UtilsService;
}());
exports["default"] = UtilsService;
//# sourceMappingURL=utils.service.js.map