"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_schema_options_1 = require("~/commons/database/common-schema-options");
const mongoose_1 = require("mongoose");
exports.attachmentSchema = new mongoose_1.Schema({
    extension: {
        type: String,
        required: true,
    },
    mimeType: {
        type: String,
        require: true,
    },
    bucketRef: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },
    size: {
        type: Number,
        required: true,
    },
    uploadedBy: {
        type: String,
        require: true,
    },
}, common_schema_options_1.commonSchemaOptions);
//# sourceMappingURL=attachment.schema.js.map