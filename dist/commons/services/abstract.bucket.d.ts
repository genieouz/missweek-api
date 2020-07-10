/// <reference types="node" />
import { Readable } from 'stream';
import { ImageSize } from '~/commons/multimedia/images/image-size';
import { MongooseGridFSBucketFile, MongooseGridFsModel } from '~/commons/typings/gridfs.typings';
import { Connection } from 'mongoose';
export declare abstract class AbstractBucket {
    protected abstractBucket: MongooseGridFsModel;
    protected modelName: string;
    protected connection: Connection;
    protected constructor(bucket: MongooseGridFsModel, modelName: string, connection: Connection);
    findOneById(id: string): Promise<Readable>;
    removeOneById(id: string): Promise<boolean>;
    removeOneByIdOrFail(id: string): Promise<boolean>;
    removeManyByIds(ids: string[]): Promise<boolean[]>;
    getImageFrameSize(imageSize: ImageSize): number;
    putFileToBucket(incomingFile: any, options?: {
        filename: any;
    }): Promise<MongooseGridFSBucketFile>;
}
