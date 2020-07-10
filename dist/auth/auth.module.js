"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_strategy_1 = require("~/auth/jwt.strategy");
const auth_resolver_1 = require("~/auth/resolvers/auth.resolver");
const user_module_1 = require("~/user/user.module");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("~/auth/services/auth.service");
const jwt_1 = require("@nestjs/jwt");
const env_1 = require("~/commons/config/env");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            jwt_1.JwtModule.register({
                secret: env_1.TOKEN_SECRET,
            }),
        ],
        providers: [
            auth_service_1.AuthService,
            auth_resolver_1.AuthResolver,
            jwt_strategy_1.JwtStrategy
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map