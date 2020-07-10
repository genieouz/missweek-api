"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.Any = new graphql_1.GraphQLScalarType({
    name: 'Any',
    description: 'Arbitrary object',
    parseValue(value) {
        return typeof value === 'object'
            ? value
            : typeof value === 'string'
                ? JSON.parse(value)
                : null;
    },
    serialize(value) {
        return typeof value === 'object'
            ? value
            : typeof value === 'string'
                ? JSON.parse(value)
                : null;
    },
    parseLiteral(ast) {
        switch (ast.kind) {
            case graphql_1.Kind.STRING:
                return JSON.parse(ast.value);
            case graphql_1.Kind.OBJECT:
                throw new Error(`Not sure what to do with OBJECT for Any type`);
            default:
                return null;
        }
    },
});
//# sourceMappingURL=any.scalar.js.map