"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
function extractReqFromDecoratorContext(decoratorContext) {
    return decoratorContext instanceof http_1.IncomingMessage
        ? decoratorContext
        : decoratorContext[2].req;
}
exports.extractReqFromDecoratorContext = extractReqFromDecoratorContext;
//# sourceMappingURL=utils.js.map