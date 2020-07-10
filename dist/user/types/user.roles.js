"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
var UserRoles;
(function (UserRoles) {
    UserRoles["USER"] = "USER";
    UserRoles["ADMIN"] = "ADMIN";
})(UserRoles = exports.UserRoles || (exports.UserRoles = {}));
type_graphql_1.registerEnumType(UserRoles, {
    name: 'UserRoles',
    description: 'User role',
});
//# sourceMappingURL=user.roles.js.map