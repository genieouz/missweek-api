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
const user_input_1 = require("~/user/dto/user.input");
const user_type_1 = require("~/user/dto/user.type");
const auth_guard_1 = require("~/auth/auth.guard");
const user_service_1 = require("~/user/services/user.service");
const type_graphql_1 = require("type-graphql");
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("~/auth/decorators/current-user.decorator");
let ProfileResolver = class ProfileResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async updateProfile(userInput, currentUser) {
        return this.userService.updateOneById(currentUser._id, userInput);
    }
    async fetchProfile(currentUser) {
        return currentUser;
    }
};
__decorate([
    graphql_1.Mutation(returns => user_type_1.User),
    __param(0, graphql_1.Args({ name: 'userInput', type: () => user_input_1.UserInput })),
    __param(1, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_input_1.UserInput, Object]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "updateProfile", null);
__decorate([
    graphql_1.Query(returns => user_type_1.User),
    __param(0, current_user_decorator_1.CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "fetchProfile", null);
ProfileResolver = __decorate([
    common_1.UseGuards(auth_guard_1.AuthGuard),
    type_graphql_1.Resolver(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], ProfileResolver);
exports.ProfileResolver = ProfileResolver;
//# sourceMappingURL=profile.resolver.js.map