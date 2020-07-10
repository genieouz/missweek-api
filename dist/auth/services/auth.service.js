"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_conf_1 = require("~/auth/auth.conf");
const user_service_1 = require("~/user/services/user.service");
const common_1 = require("@nestjs/common");
const env_1 = require("~/commons/config/env");
const twilio_1 = require("twilio");
const generate_password_1 = require("generate-password");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.client = new twilio_1.Twilio(env_1.TWILIO_ACCOUNT_SID, env_1.TWILIO_AUTH_TOKEN);
    }
    async startRegistration(startRegisterInput) {
        const validationCode = generate_password_1.generate(auth_conf_1.VALIDATION_CODE_CONFIG);
        this.client.messages.create({
            body: validationCode,
            from: env_1.TWILIO_PHONE_NUMBER,
            to: `+${startRegisterInput.countryCode}${startRegisterInput.phone}`,
        });
        const payload = {
            ...startRegisterInput,
            validationCode,
        };
        const validationToken = this.createToken(payload, auth_conf_1.TOKEN_OPTIONS.validationCodeTokenOption);
        return { ...payload, validationToken };
    }
    async finalizeRegistration(finalizeRegistrationInput) {
        let user;
        const errorMessage = `Votre code de validation ${finalizeRegistrationInput.validationCode} n'est pas correcte ou le token de validation a expiré!`;
        try {
            user = this.jwtService.verify(finalizeRegistrationInput.validationToken);
            if (user.validationCode !== finalizeRegistrationInput.validationCode) {
                throw new common_1.ForbiddenException(errorMessage);
            }
        }
        catch (error) {
            throw new common_1.ForbiddenException(errorMessage);
        }
        const newUser = await this.userService.upsertOne({ phone: user.phone, countryCode: user.countryCode }, user);
        const token = this.createToken({ sub: newUser._id }, auth_conf_1.TOKEN_OPTIONS.connectionTokenOption);
        return { token };
    }
    createToken(payload, signOptions) {
        return this.jwtService.sign(payload, signOptions);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map