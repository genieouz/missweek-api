"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_guard_1 = require("~/auth/auth.guard");
const attachment_service_1 = require("~/attachment/services/attachment.service");
const platform_express_1 = require("@nestjs/platform-express");
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("~/auth/decorators/current-user.decorator");
let PostController = class PostController {
    constructor(attachmentsService) {
        this.attachmentsService = attachmentsService;
    }
    async post(currentUser, file) {
        return this.attachmentsService.putAttachment(file, {
            uploadedBy: currentUser._id,
        }, currentUser._id);
    }
};
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, current_user_decorator_1.CurrentUser()),
    __param(1, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "post", null);
PostController = __decorate([
    common_1.UseGuards(auth_guard_1.AuthGuard),
    common_1.Controller('post'),
    __metadata("design:paramtypes", [attachment_service_1.AttachmentsService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map