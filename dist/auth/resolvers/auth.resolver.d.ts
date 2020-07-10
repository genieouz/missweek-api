import { UserService } from '~/user/services/user.service';
import { CompleteRegistrationInput } from '~/auth/dto/complete-registration.input';
import { IUser } from '~/user/interfaces/user.interface';
import { IFinalizeRegistration } from '~/auth/interface/finalize-registration.interface';
import { FinalizeRegistrationInput } from '~/auth/dto/finalize-registration.input';
import { IStartRegistration } from '~/auth/interface/start-register.interface';
import { StartRegistrationInput } from '~/auth/dto/start-registration.input';
import { AuthService } from '~/auth/services/auth.service';
export declare class AuthResolver {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    startRegistration(startRegistrationInput: StartRegistrationInput): Promise<IStartRegistration>;
    finalizeRegistration(finalizeRegistrationInput: FinalizeRegistrationInput): Promise<IFinalizeRegistration>;
    completeRegistration(completeRegistrationInput: CompleteRegistrationInput, currentUser: IUser): Promise<IUser>;
}
