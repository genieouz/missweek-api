/// <reference types="node" />
import { Attachment } from './../dto/attachment.type';
import { IncomingFile } from '~/commons/multimedia/typings/incoming-file';
import { Readable } from 'stream';
import { AttachmentsBucket } from './../attachement.bucket';
import { IAttachment } from '~/attachment/interfaces/attachment.interface';
import { Model } from 'mongoose';
import { AnyObject } from '~/commons/typings/typescript';
import { AbstractService } from '~/commons/services/abstract.service';
export declare class AttachmentsService extends AbstractService<IAttachment> {
    private readonly model;
    private readonly attachmentsBucket;
    constructor(model: Model<IAttachment>, attachmentsBucket: AttachmentsBucket);
    getBucket(bucketId: string): Promise<Readable>;
    deleteAttachment(attachmentId: string): Promise<boolean>;
    putAttachment(incomingFile: IncomingFile, meta: AnyObject, userId: string): Promise<Attachment>;
}
