import { AuthGuard } from '~/auth/auth.guard';
import { IUser } from '~/user/interfaces/user.interface';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { Attachment } from '~/attachment/dto/attachment.type';
import { IncomingFile } from '~/commons/multimedia/typings/incoming-file';
import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Post, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';

@UseGuards(AuthGuard)
@Controller('post')
export class PostController {
  constructor(private readonly attachmentsService: AttachmentsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async post(
    @CurrentUser() currentUser: IUser,
    @UploadedFile() file: IncomingFile,
  ): Promise<Attachment> {
    return this.attachmentsService.putAttachment(
      file,
      {
        uploadedBy: currentUser._id,
      },
      currentUser._id,
    );
  }
}
