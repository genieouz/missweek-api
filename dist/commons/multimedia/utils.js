"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const mongodb = require("mongodb");
const bson_1 = require("bson");
const pluralize_1 = require("pluralize");
function transformBufferToReadableStream(buff) {
    const readable = new stream_1.Readable();
    readable._read = () => {
    };
    readable.push(buff);
    readable.push(null);
    return readable;
}
exports.transformBufferToReadableStream = transformBufferToReadableStream;
async function readFileFromDB(fileId, modelName, connection) {
    const bucket = new mongodb.GridFSBucket(connection.db, {
        bucketName: pluralize_1.plural(modelName),
    });
    const foundFilesCursor = await bucket.find({ _id: new bson_1.ObjectId(fileId) });
    const foundFiles = (await foundFilesCursor.toArray());
    if (foundFiles.length) {
        const file = foundFiles[0];
        return bucket.openDownloadStream(file._id);
    }
    return null;
}
exports.readFileFromDB = readFileFromDB;
//# sourceMappingURL=utils.js.map