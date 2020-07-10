import { IncomingMessage } from 'http';
import { DecoratorContext } from '~/commons/typings/nest';

export function extractReqFromDecoratorContext(
    decoratorContext: DecoratorContext | IncomingMessage,
): any {
    return decoratorContext instanceof IncomingMessage
        ? decoratorContext
        : (decoratorContext[2].req as any);
}

