import { IncomingMessage } from 'http';
import { DecoratorContext } from '~/commons/typings/nest';
import { createParamDecorator } from '@nestjs/common';
import { extractReqFromDecoratorContext } from '~/auth/utils';

export const CurrentUser = createParamDecorator(
  (pick: string, decoratorContext: DecoratorContext | IncomingMessage)=> {
    const req = extractReqFromDecoratorContext(decoratorContext);
      return req.user;
  },
);
