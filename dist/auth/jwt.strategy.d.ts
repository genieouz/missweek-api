import { UserService } from '~/user/services/user.service';
import { IUser } from '~/user/interfaces/user.interface';
import { AnyObject } from '~/commons/typings/typescript';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: AnyObject): Promise<IUser>;
}
export {};
