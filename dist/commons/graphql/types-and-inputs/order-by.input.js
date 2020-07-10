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
const type_graphql_1 = require("type-graphql");
const order_by_direction_1 = require("~/commons/graphql/types-and-inputs/order-by-direction");
let OrderByInput = class OrderByInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], OrderByInput.prototype, "property", void 0);
__decorate([
    type_graphql_1.Field(type => order_by_direction_1.OrderByDirection),
    __metadata("design:type", Object)
], OrderByInput.prototype, "direction", void 0);
OrderByInput = __decorate([
    type_graphql_1.InputType()
], OrderByInput);
exports.OrderByInput = OrderByInput;
//# sourceMappingURL=order-by.input.js.map