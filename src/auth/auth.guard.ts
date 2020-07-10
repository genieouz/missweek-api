import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { getRequestFromContext } from '~/commons/utils';

@Injectable()
export class AuthGuard extends PassportAuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = getRequestFromContext(context);
    return super.canActivate(new ExecutionContextHost([req]));
  }
}
