/// <reference types="node" />
import { IncomingMessage } from 'http';
import { DecoratorContext } from '~/commons/typings/nest';
export declare function extractReqFromDecoratorContext(decoratorContext: DecoratorContext | IncomingMessage): any;
