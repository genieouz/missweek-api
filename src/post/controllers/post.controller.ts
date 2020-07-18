import { AuthGuard } from '~/auth/auth.guard';
import { IUser } from '~/user/interfaces/user.interface';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { Attachment } from '~/attachment/dto/attachment.type';
import { IncomingFile } from '~/commons/multimedia/typings/incoming-file';
import { FileInterceptor } from '@nestjs/platform-express';
import { Controller, Post, UseInterceptors, UploadedFile, UseGuards, Body, BadRequestException } from '@nestjs/common';
import { CurrentUser } from '~/auth/decorators/current-user.decorator';
import { IPost } from '~/post/models/interfaces/post.interface';
import { PostService } from '~/post/services/post.service';

@UseGuards(AuthGuard)
@Controller('post')
export class PostController {
  constructor(
    private readonly attachmentsService: AttachmentsService,
    private readonly postService: PostService
    ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  public async post(
    @CurrentUser() currentUser: IUser,
    @UploadedFile() file: IncomingFile,
    @Body('description') description: string,
  ): Promise<IPost> {
    if(!file) {
      throw new BadRequestException('file required');
    }
    const attachment = await this.attachmentsService.putAttachment(
      file,
      {
        uploadedBy: currentUser._id,
      },
      currentUser._id,
    );
    return this.postService.insertOne({ description, attachment: attachment.id, postedBy: currentUser._id });
  }
}
