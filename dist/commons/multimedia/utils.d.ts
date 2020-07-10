/// <reference types="node" />
import { Readable } from 'stream';
import { Connection } from 'mongoose';
export declare function transformBufferToReadableStream(buff: Buffer): Readable;
export declare function readFileFromDB(fileId: string, modelName: string, connection?: Connection): Promise<Readable>;
