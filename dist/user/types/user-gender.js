"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
var UserGender;
(function (UserGender) {
    UserGender["MALE"] = "MALE";
    UserGender["FEMALE"] = "FEMALE";
})(UserGender = exports.UserGender || (exports.UserGender = {}));
type_graphql_1.registerEnumType(UserGender, {
    name: 'UserGender',
});
//# sourceMappingURL=user-gender.js.map