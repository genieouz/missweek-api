import { ObjectOfPrimitives } from '~/commons/typings/typescript';
export declare class ValidationException {
    children: any[];
    constraints: ObjectOfPrimitives;
    property: string;
    target: ObjectOfPrimitives;
    value: any;
}
