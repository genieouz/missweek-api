"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const attachment_controller_1 = require("~/attachment/controllers/attachment.controller");
const database_module_1 = require("~/commons/database/database.module");
const attachment_namings_1 = require("~/attachment/attachment.namings");
const mongoose_1 = require("@nestjs/mongoose");
const attachement_bucket_1 = require("~/attachment/attachement.bucket");
const attachment_service_1 = require("~/attachment/services/attachment.service");
const common_1 = require("@nestjs/common");
const attachment_schema_1 = require("~/attachment/attachment.schema");
const database_connection_name_1 = require("~/commons/database/database-connection-name");
const utils_1 = require("~/commons/database/utils");
let AttachmentModule = class AttachmentModule {
};
AttachmentModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: attachment_namings_1.attachmentModelName, schema: attachment_schema_1.attachmentSchema },
            ]),
            database_module_1.DatabaseModule,
        ],
        controllers: [attachment_controller_1.AttachmentsController],
        providers: [
            attachment_service_1.AttachmentsService,
            attachement_bucket_1.AttachmentsBucket,
            {
                provide: attachment_namings_1.attachmentBucketName,
                useFactory: (connection) => {
                    return utils_1.connectToBucket(connection, attachment_namings_1.attachmentBucketName);
                },
                inject: [database_connection_name_1.databaseConnectionName],
            },
        ],
        exports: [attachment_service_1.AttachmentsService, attachement_bucket_1.AttachmentsBucket],
    })
], AttachmentModule);
exports.AttachmentModule = AttachmentModule;
//# sourceMappingURL=attachment.module.js.map