import { UserInput } from '~/user/dto/user.input';
import { IUser } from '~/user/interfaces/user.interface';
import { UserService } from '~/user/services/user.service';
export declare class ProfileResolver {
    private readonly userService;
    constructor(userService: UserService);
    updateProfile(userInput: UserInput, currentUser: IUser): Promise<IUser>;
    fetchProfile(currentUser: IUser): Promise<IUser>;
}
