import { IFinalizeRegistration } from '~/auth/interface/finalize-registration.interface';
import { FinalizeRegistrationInput } from '~/auth/dto/finalize-registration.input';
import { AnyObject } from '~/commons/typings/typescript';
import { IStartRegistration } from '~/auth/interface/start-register.interface';
import { StartRegistrationInput } from '~/auth/dto/start-registration.input';
import { UserService } from '~/user/services/user.service';
import { Twilio } from 'twilio';
import { JwtService } from '@nestjs/jwt';
import { SignOptions } from 'jsonwebtoken';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    client: Twilio;
    constructor(userService: UserService, jwtService: JwtService);
    startRegistration(startRegisterInput: StartRegistrationInput): Promise<IStartRegistration>;
    finalizeRegistration(finalizeRegistrationInput: FinalizeRegistrationInput): Promise<IFinalizeRegistration>;
    createToken(payload: AnyObject, signOptions: SignOptions): string;
}
