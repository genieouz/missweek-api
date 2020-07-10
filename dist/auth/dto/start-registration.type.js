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
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let StartRegistration = class StartRegistration {
};
__decorate([
    class_validator_1.MaxLength(auth_conf_1.VALIDATION_CODE_MAX_LENGTH),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], StartRegistration.prototype, "validationCode", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], StartRegistration.prototype, "validationToken", void 0);
StartRegistration = __decorate([
    type_graphql_1.ObjectType()
], StartRegistration);
exports.StartRegistration = StartRegistration;
//# sourceMappingURL=start-registration.type.js.map