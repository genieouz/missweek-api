import { MongooseGridFsModel } from '~/commons/typings/gridfs.typings';
import { Connection } from 'mongoose';
import { AbstractBucket } from '~/commons/services/abstract.bucket';
export declare class AttachmentsBucket extends AbstractBucket {
    private readonly bucket;
    constructor(connection: Connection, bucket: MongooseGridFsModel);
}
