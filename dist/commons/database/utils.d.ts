import { Connection } from 'mongoose';
import { MongooseGridFsModel } from '~/commons/typings/gridfs.typings';
export declare function connectToBucket(connection: Connection, bucketName: string): Promise<MongooseGridFsModel>;
