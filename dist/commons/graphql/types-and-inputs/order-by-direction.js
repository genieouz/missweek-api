"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
var OrderByDirection;
(function (OrderByDirection) {
    OrderByDirection["Asc"] = "Asc";
    OrderByDirection["Desc"] = "Desc";
})(OrderByDirection = exports.OrderByDirection || (exports.OrderByDirection = {}));
type_graphql_1.registerEnumType(OrderByDirection, {
    name: 'OrderByDirection',
    description: 'OrderBy direction',
});
//# sourceMappingURL=order-by-direction.js.map