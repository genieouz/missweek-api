import { AnyObject } from '~/commons/typings/typescript';
import { OrderByInput } from '~/commons/graphql/types-and-inputs/order-by.input';
export declare class ClientFilterInput {
    offset?: number;
    limit?: number;
    filter?: AnyObject;
    search?: string;
    orderBy?: OrderByInput;
}
