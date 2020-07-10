"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bson_1 = require("bson");
const utils_1 = require("~/commons/utils");
const common_1 = require("@nestjs/common");
const image_frame_size_1 = require("~/commons/multimedia/images/image-frame-size");
const utils_2 = require("~/commons/multimedia/utils");
const utils_3 = require("~/commons/multimedia/utils");
class AbstractBucket {
    constructor(bucket, modelName, connection) {
        this.abstractBucket = bucket;
        this.modelName = modelName;
        this.connection = connection;
    }
    async findOneById(id) {
        if (!utils_1.isValidMongoId(id)) {
            const message = 'Received arg is not a valid ObjectId!';
            throw new common_1.UnprocessableEntityException(message);
        }
        return utils_2.readFileFromDB(id, this.modelName, this.connection).catch((error) => {
            throw new common_1.NotFoundException();
        });
    }
    async removeOneById(id) {
        return new Promise((resolve, reject) => {
            this.abstractBucket.unlink(new bson_1.ObjectID(id), error => {
                return error !== null ? reject(false) : resolve(true);
            });
        });
    }
    async removeOneByIdOrFail(id) {
        const isRemoved = await this.removeOneById(id);
        if (isRemoved === false) {
            throw new common_1.NotFoundException();
        }
        return true;
    }
    async removeManyByIds(ids) {
        const promises = ids.map(id => {
            return this.removeOneById(id);
        });
        return Promise.all(promises);
    }
    getImageFrameSize(imageSize) {
        return image_frame_size_1.imageFrameSize[imageSize.toLowerCase()];
    }
    async putFileToBucket(incomingFile, options = {
        filename: incomingFile.originalname,
    }) {
        return new Promise(async (resolve, reject) => {
            const rs = utils_3.transformBufferToReadableStream(incomingFile.buffer);
            this.abstractBucket.write(options, rs, (error, writtenFile) => {
                return error !== null ? reject(error) : resolve(writtenFile);
            });
        });
    }
}
exports.AbstractBucket = AbstractBucket;
//# sourceMappingURL=abstract.bucket.js.map