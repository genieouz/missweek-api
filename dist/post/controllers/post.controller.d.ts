import { IUser } from '~/user/interfaces/user.interface';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { Attachment } from '~/attachment/dto/attachment.type';
import { IncomingFile } from '~/commons/multimedia/typings/incoming-file';
export declare class PostController {
    private readonly attachmentsService;
    constructor(attachmentsService: AttachmentsService);
    post(currentUser: IUser, file: IncomingFile): Promise<Attachment>;
}
