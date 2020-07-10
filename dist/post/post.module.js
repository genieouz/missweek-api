"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const attachment_module_1 = require("~/attachment/attachment.module");
const post_resolver_1 = require("~/post/resolvers/post.resolver");
const common_1 = require("@nestjs/common");
const post_controller_1 = require("~/post/controllers/post.controller");
let PostModule = class PostModule {
};
PostModule = __decorate([
    common_1.Module({
        imports: [attachment_module_1.AttachmentModule],
        controllers: [post_controller_1.PostController],
        providers: [post_resolver_1.PostResolver],
    })
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map