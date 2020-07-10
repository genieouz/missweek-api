"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const utils_1 = require("~/auth/utils");
exports.CurrentUser = common_1.createParamDecorator((pick, decoratorContext) => {
    const req = utils_1.extractReqFromDecoratorContext(decoratorContext);
    return req.user;
});
//# sourceMappingURL=current-user.decorator.js.map