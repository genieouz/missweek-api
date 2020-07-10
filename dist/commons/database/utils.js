"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_gridfs_1 = require("mongoose-gridfs");
async function connectToBucket(connection, bucketName) {
    return mongoose_gridfs_1.createModel({
        modelName: bucketName,
        connection: connection,
    });
}
exports.connectToBucket = connectToBucket;
//# sourceMappingURL=utils.js.map