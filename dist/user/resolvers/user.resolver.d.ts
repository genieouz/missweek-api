import { IUser } from '~/user/interfaces/user.interface';
import { UserService } from '~/user/services/user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    fetchUsers(): Promise<IUser[]>;
}
