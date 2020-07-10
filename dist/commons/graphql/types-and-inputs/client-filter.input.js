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
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const any_scalar_1 = require("../scalars/any.scalar");
const order_by_input_1 = require("~/commons/graphql/types-and-inputs/order-by.input");
let ClientFilterInput = class ClientFilterInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    class_validator_1.Min(0),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], ClientFilterInput.prototype, "offset", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    class_validator_1.Min(1),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], ClientFilterInput.prototype, "limit", void 0);
__decorate([
    type_graphql_1.Field(type => any_scalar_1.Any, { nullable: true }),
    __metadata("design:type", Object)
], ClientFilterInput.prototype, "filter", void 0);
__decorate([
    type_graphql_1.Field(type => String, { nullable: true }),
    __metadata("design:type", String)
], ClientFilterInput.prototype, "search", void 0);
__decorate([
    type_graphql_1.Field(type => order_by_input_1.OrderByInput, { nullable: true }),
    __metadata("design:type", order_by_input_1.OrderByInput)
], ClientFilterInput.prototype, "orderBy", void 0);
ClientFilterInput = __decorate([
    type_graphql_1.InputType()
], ClientFilterInput);
exports.ClientFilterInput = ClientFilterInput;
//# sourceMappingURL=client-filter.input.js.map