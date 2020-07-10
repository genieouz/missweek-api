"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time_1 = require("~/commons/time");
exports.VALIDATION_CODE_MAX_LENGTH = 4;
exports.VALIDATION_CODE_CONFIG = {
    length: exports.VALIDATION_CODE_MAX_LENGTH,
    numbers: true,
};
exports.TOKEN_OPTIONS = {
    validationCodeTokenOption: { expiresIn: `${10 * time_1.minute}` },
    connectionTokenOption: { expiresIn: `${5 * time_1.year}` },
};
//# sourceMappingURL=auth.conf.js.map