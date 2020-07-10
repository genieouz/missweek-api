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
const attachment_namings_1 = require("~/attachment/attachment.namings");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const database_connection_name_1 = require("~/commons/database/database-connection-name");
const abstract_bucket_1 = require("~/commons/services/abstract.bucket");
let AttachmentsBucket = class AttachmentsBucket extends abstract_bucket_1.AbstractBucket {
    constructor(connection, bucket) {
        super(bucket, attachment_namings_1.attachmentBucketName, connection);
        this.bucket = bucket;
    }
};
AttachmentsBucket = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(database_connection_name_1.databaseConnectionName)),
    __param(1, common_1.Inject(attachment_namings_1.attachmentBucketName)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Connection !== "undefined" && mongoose_1.Connection) === "function" ? _a : Object, Object])
], AttachmentsBucket);
exports.AttachmentsBucket = AttachmentsBucket;
//# sourceMappingURL=attachement.bucket.js.map