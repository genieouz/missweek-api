"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const maxLong = Number.MAX_SAFE_INTEGER;
const minLong = Number.MIN_SAFE_INTEGER;
const errorMessage = 'Long cannot represent non 52-bit signed integer value: ';
exports.GraphQLLong = new graphql_1.GraphQLScalarType({
    name: 'Long',
    description: 'The `Long` scalar type represents 52-bit integers',
    parseValue(value) {
        let num;
        if (value === '') {
            throw new TypeError(errorMessage + ' (empty string)');
        }
        num = Number(value);
        if (num === num && num <= maxLong && num >= minLong) {
            return num < 0 ? Math.ceil(num) : Math.floor(num);
        }
        throw new TypeError(errorMessage + value);
    },
    serialize(value) {
        let num;
        if (value === '') {
            throw new TypeError(errorMessage + ' (empty string)');
        }
        num = Number(value);
        if (num === num && num <= maxLong && num >= minLong) {
            return num < 0 ? Math.ceil(num) : Math.floor(num);
        }
        throw new TypeError(errorMessage + value);
    },
    parseLiteral(ast) {
        let num;
        if (ast.kind === graphql_1.Kind.INT) {
            num = parseInt(ast.value, 10);
            if (num <= maxLong && num >= minLong) {
                return num;
            }
            return null;
        }
    },
});
//# sourceMappingURL=long.scalar.js.map