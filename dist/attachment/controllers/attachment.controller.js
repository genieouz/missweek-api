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
const attachement_bucket_1 = require("~/attachment/attachement.bucket");
const attachment_service_1 = require("~/attachment/services/attachment.service");
const common_1 = require("@nestjs/common");
const utils_1 = require("~/commons/utils");
let AttachmentsController = class AttachmentsController {
    constructor(attachmentsService, attachmentsBucket) {
        this.attachmentsService = attachmentsService;
        this.attachmentsBucket = attachmentsBucket;
    }
    async getAttachment(id, res, query) {
        if (!utils_1.isValidMongoId(id)) {
            const errorMessage = `Given Attachment.id is invalid`;
            return res.status(common_1.HttpStatus.UNPROCESSABLE_ENTITY).send({
                message: errorMessage,
            });
        }
        const attachmentRecord = await this.attachmentsService.findOneByIdOrFail(id);
        const rs = await this.attachmentsBucket.findOneById(attachmentRecord.bucketRef);
        if (query.download) {
            utils_1.setupDownloadHeaders(res, attachmentRecord.filename, attachmentRecord.mimeType);
        }
        rs.pipe(res);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AttachmentsController.prototype, "getAttachment", null);
AttachmentsController = __decorate([
    common_1.Controller('attachment'),
    __metadata("design:paramtypes", [attachment_service_1.AttachmentsService,
        attachement_bucket_1.AttachmentsBucket])
], AttachmentsController);
exports.AttachmentsController = AttachmentsController;
//# sourceMappingURL=attachment.controller.js.map