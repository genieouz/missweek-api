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
var _a;
const attachment_type_1 = require("./../dto/attachment.type");
const attachement_bucket_1 = require("./../attachement.bucket");
const attachment_namings_1 = require("~/attachment/attachment.namings");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const lodash_1 = require("lodash");
const abstract_service_1 = require("~/commons/services/abstract.service");
let AttachmentsService = class AttachmentsService extends abstract_service_1.AbstractService {
    constructor(model, attachmentsBucket) {
        super(model);
        this.model = model;
        this.attachmentsBucket = attachmentsBucket;
    }
    getBucket(bucketId) {
        return this.attachmentsBucket.findOneById(bucketId);
    }
    async deleteAttachment(attachmentId) {
        const attachment = await this.findOneByIdOrFail(attachmentId);
        await this.removeOneByIdOrFail(attachmentId);
        return this.attachmentsBucket.removeOneById(attachment.bucketRef);
    }
    async putAttachment(incomingFile, meta, userId) {
        const savedAttachment = await this.attachmentsBucket.putFileToBucket(incomingFile);
        const doc = await this.model.create({
            title: !lodash_1.isEmpty(meta.title)
                ? meta.title
                : {
                    en: incomingFile.originalname,
                    fr: incomingFile.originalname,
                    ar: incomingFile.originalname,
                },
            extension: incomingFile.originalname.split('.').pop(),
            mimeType: incomingFile.mimetype,
            bucketRef: savedAttachment._id,
            filename: incomingFile.originalname,
            size: incomingFile.size,
            uploadedBy: meta.uploadedBy,
        });
        const attachmentRecord = class_transformer_1.plainToClass(attachment_type_1.Attachment, doc.toObject({ virtuals: true }));
        return attachmentRecord;
    }
};
AttachmentsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(attachment_namings_1.attachmentModelName)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, attachement_bucket_1.AttachmentsBucket])
], AttachmentsService);
exports.AttachmentsService = AttachmentsService;
//# sourceMappingURL=attachment.service.js.map