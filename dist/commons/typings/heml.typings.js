"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HemlValidateOption;
(function (HemlValidateOption) {
    HemlValidateOption["Strict"] = "strict";
    HemlValidateOption["Soft"] = "soft";
    HemlValidateOption["None"] = "none";
})(HemlValidateOption = exports.HemlValidateOption || (exports.HemlValidateOption = {}));
class HemlCompileOptions {
    constructor(validationLevel = HemlValidateOption.Soft) {
        this.cheerio = {};
        this.juice = {};
        this.beautify = {};
        this.elements = [];
        this.validate = validationLevel;
    }
}
exports.HemlCompileOptions = HemlCompileOptions;
//# sourceMappingURL=heml.typings.js.map