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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_guard_1 = require("~/auth/auth.guard");
const user_service_1 = require("~/user/services/user.service");
const complete_registration_input_1 = require("~/auth/dto/complete-registration.input");
const user_type_1 = require("~/user/dto/user.type");
const finalize_registration_input_1 = require("~/auth/dto/finalize-registration.input");
const start_registration_type_1 = require("~/auth/dto/start-registration.type");
const start_registration_input_1 = require("~/auth/dto/start-registration.input");
const auth_service_1 = require("~/auth/services/auth.service");
const graphql_1 = require("@nestjs/graphql");
const finalize_registration_1 = require("~/auth/dto/finalize-registration");
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../decorators/current-user.decorator");
let AuthResolver = class AuthResolver {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    startRegistration(startRegistrationInput) {
        return this.authService.startRegistration(startRegistrationInput);
    }
    finalizeRegistration(finalizeRegistrationInput) {
        return this.authService.finalizeRegistration(finalizeRegistrationInput);
    }
    async completeRegistration(completeRegistrationInput, currentUser) {
        return this.userService.updateOneById(currentUser._id, completeRegistrationInput);
    }
};
__decorate([
    graphql_1.Mutation(returns => start_registration_type_1.StartRegistration),
    __param(0, graphql_1.Args({
        name: 'startRegistrationInput',
        type: () => start_registration_input_1.StartRegistrationInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [start_registration_input_1.StartRegistrationInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "startRegistration", null);
__decorate([
    graphql_1.Mutation(returns => finalize_registration_1.FinalizeRegistration),
    __param(0, graphql_1.Args({
        name: 'finalizeRegistrationInput',
        type: () => finalize_registration_input_1.FinalizeRegistrationInput,
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [finalize_registration_input_1.FinalizeRegistrationInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "finalizeRegistration", null);
__decorate([
    common_1.UseGuards(auth_guard_1.AuthGuard),
    graphql_1.Mutation(returns => user_type_1.User),
    __param(0, graphql_1.Args({
        name: 'completeRegistrationInput',
        type: () => complete_registration_input_1.CompleteRegistrationInput,
    })),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [complete_registration_input_1.CompleteRegistrationInput, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "completeRegistration", null);
AuthResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        user_service_1.UserService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map