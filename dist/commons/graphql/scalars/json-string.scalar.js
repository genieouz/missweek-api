"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.JsonString = new graphql_1.GraphQLScalarType({
    name: 'JsonString',
    description: 'A custom type, that represents a string, that contains JSON-structured data',
    parseValue(value) {
        return JSON.parse(value);
    },
    serialize(value) {
        return JSON.stringify(value);
    },
    parseLiteral(ast) {
        if (typeof ast === 'string') {
            return JSON.parse(ast);
        }
        return null;
    },
});
//# sourceMappingURL=json-string.scalar.js.map