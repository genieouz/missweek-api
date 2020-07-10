import { DatabaseModule } from '~/commons/database/database.module';
import { databaseUrl } from '~/commons/database/database.url';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from '~/user/user.module';
import { AuthModule } from '~/auth/auth.module';
import { PostModule } from './post/post.module';
import { AttachmentModule } from './attachment/attachment.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forRoot(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ req }),
      playground: true,
    }),
    UserModule,
    AuthModule,
    PostModule,
    AttachmentModule,
  ],
  exports: [DatabaseModule]
})
export class AppModule {}
