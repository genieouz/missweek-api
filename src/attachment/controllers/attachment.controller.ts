import { AttachmentsBucket } from '~/attachment/attachement.bucket';
import { AttachmentsService } from '~/attachment/services/attachment.service';
import { AuthGuard } from '~/auth/auth.guard';
import { Controller, UseGuards, Query, PlainLiteralObject, Res, HttpStatus, Param, Get } from '@nestjs/common';
import { isValidMongoId, setupDownloadHeaders } from '~/commons/utils';
import { Response } from 'express';

//@UseGuards(AuthGuard)
@Controller('attachment')
export class AttachmentsController {
  constructor(
    private readonly attachmentsService: AttachmentsService,
    private readonly attachmentsBucket: AttachmentsBucket,
  ) {}

  @Get(':id')
  public async getAttachment(
    @Param('id') id: string,
    @Res() res: Response,
    @Query() query: PlainLiteralObject,
  ): Promise<any> {
    if (!isValidMongoId(id)) {
      const errorMessage = `Given Attachment.id is invalid`;
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({
        message: errorMessage,
      });
    }
    const attachmentRecord = await this.attachmentsService.findOneByIdOrFail(
      id,
    );
    const rs = await this.attachmentsBucket.findOneById(
      attachmentRecord.bucketRef,
    );

    if (query.download) {
      setupDownloadHeaders(
        res,
        attachmentRecord.filename,
        attachmentRecord.mimeType,
      );
    }

    rs.pipe(res);
  }
}
