export interface AnyObject {
    [key: string]: any;
}
export interface ObjectOfPrimitives {
    [key: string]: string | number | boolean;
}
export interface ObjectOfStringLists {
    [key: string]: string[];
}
export declare type FuncType = () => void;
export declare type MapType = Record<string, any>;
export declare type LatLongType = [number, number];
