import { PostService } from '~/post/services/post.service';
import { AttachmentModule } from '~/attachment/attachment.module';
import { PostResolver } from '~/post/resolvers/post.resolver';
import { forwardRef, Module } from '@nestjs/common';
import { PostController } from '~/post/controllers/post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { postModelName } from '~/post/models/post.model-name';
import { PostSchema } from '~/post/models/post.schema';
import { PostPropertyResolver } from '~/post/resolvers/post-property.resolver';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: postModelName, schema: PostSchema }]),
    AttachmentModule,
    forwardRef(() => UserModule)
  ],
  controllers: [PostController],
  providers: [
    PostService, 
    PostResolver,
    PostPropertyResolver,
  ],
})
export class PostModule { }
