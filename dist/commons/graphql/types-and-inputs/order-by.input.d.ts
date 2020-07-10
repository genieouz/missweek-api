import { OrderByDirection } from '~/commons/graphql/types-and-inputs/order-by-direction';
export declare class OrderByInput {
    property: string;
    direction?: OrderByDirection | number;
}
