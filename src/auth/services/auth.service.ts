import { IUser } from '~/user/interfaces/user.interface';
import { IFinalizeRegistration } from '~/auth/interface/finalize-registration.interface';
import { FinalizeRegistrationInput } from '~/auth/dto/finalize-registration.input';
import { AnyObject } from '~/commons/typings/typescript';
import { IStartRegistration } from '~/auth/interface/start-register.interface';
import { VALIDATION_CODE_CONFIG, TOKEN_OPTIONS } from '~/auth/auth.conf';
import { StartRegistrationInput } from '~/auth/dto/start-registration.input';
import { UserService } from '~/user/services/user.service';
import { Injectable, ForbiddenException } from '@nestjs/common';
import {
  TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID,
  TWILIO_PHONE_NUMBER,
} from '~/commons/config/env';
import { Twilio } from 'twilio';
import { generate } from 'generate-password';
import { JwtService } from '@nestjs/jwt';
import { SignOptions } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  client: Twilio;
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
    this.client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  }

  public async startRegistration(
    startRegisterInput: StartRegistrationInput,
  ): Promise<IStartRegistration> {
    const validationCode: string = generate(VALIDATION_CODE_CONFIG);
    this.client.messages.create({
      body: validationCode,
      from: TWILIO_PHONE_NUMBER,
      to: `+${startRegisterInput.countryCode}${startRegisterInput.phone}`,
    });
    const payload: IStartRegistration = {
      ...startRegisterInput,
      validationCode,
    };
    const validationToken: string = this.createToken(
      payload,
      TOKEN_OPTIONS.validationCodeTokenOption,
    );
    return { ...payload, validationToken };
  }

  public async finalizeRegistration(
    finalizeRegistrationInput: FinalizeRegistrationInput,
  ): Promise<IFinalizeRegistration> {
    let user: AnyObject;
    const errorMessage: string = `Votre code de validation ${finalizeRegistrationInput.validationCode} n'est pas correcte ou le token de validation a expiré!`;
    try {
      user = this.jwtService.verify<AnyObject>(
        finalizeRegistrationInput.validationToken,
      );
      if(user.validationCode !== finalizeRegistrationInput.validationCode) {
        throw new ForbiddenException(errorMessage);
      }
    } catch (error) {
        throw new ForbiddenException(errorMessage);
    }
    const newUser: IUser = await this.userService.upsertOne({phone: user.phone, countryCode: user.countryCode}, user);
    const token = this.createToken(
      { sub: newUser._id },
      TOKEN_OPTIONS.connectionTokenOption,
    );
    return { token };
  }

  public createToken(payload: AnyObject, signOptions: SignOptions): string {
    return this.jwtService.sign(payload, signOptions);
  }
}
