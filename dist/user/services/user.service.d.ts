import { IUser } from '~/user/interfaces/user.interface';
import { Model } from 'mongoose';
import { AbstractService } from '~/commons/services/abstract.service';
export declare class UserService extends AbstractService<IUser> {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
}
