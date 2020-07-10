import { AttachmentModule } from '~/attachment/attachment.module';
import { PostResolver } from '~/post/resolvers/post.resolver';
import { Module } from '@nestjs/common';
import { PostController } from '~/post/controllers/post.controller';

@Module({
  imports: [AttachmentModule],
  controllers: [PostController],
  providers: [PostResolver],
})
export class PostModule {}
