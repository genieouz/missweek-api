import { JwtStrategy } from '~/auth/jwt.strategy';
import { AuthResolver } from '~/auth/resolvers/auth.resolver';
import { UserModule } from '~/user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from '~/auth/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { TOKEN_SECRET } from '~/commons/config/env';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: TOKEN_SECRET,
    }),
  ],
  providers: [
    AuthService, 
    AuthResolver,
    JwtStrategy
  ],
})
export class AuthModule {}
