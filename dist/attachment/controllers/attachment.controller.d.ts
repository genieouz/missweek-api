import { AttachmentsBucket } from '~/attachment/attachement.bucket';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { PlainLiteralObject } from '@nestjs/common';
import { Response } from 'express';
export declare class AttachmentsController {
    private readonly attachmentsService;
    private readonly attachmentsBucket;
    constructor(attachmentsService: AttachmentsService, attachmentsBucket: AttachmentsBucket);
    getAttachment(id: string, res: Response, query: PlainLiteralObject): Promise<any>;
}
