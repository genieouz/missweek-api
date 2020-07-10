import { Options } from 'generate-password';
import { SignOptions } from 'jsonwebtoken';
export declare const VALIDATION_CODE_MAX_LENGTH = 4;
export declare const VALIDATION_CODE_CONFIG: Options;
export declare const TOKEN_OPTIONS: {
    validationCodeTokenOption: SignOptions;
    connectionTokenOption: SignOptions;
};
