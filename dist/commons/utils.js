"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const lodash_1 = require("lodash");
const graphql_constants_1 = require("~/commons/graphql/graphql-constants");
const order_by_direction_1 = require("~/commons/graphql/types-and-inputs/order-by-direction");
const class_validator_1 = require("class-validator");
function applyClientFilterToArray(array, opts) {
    const offset = (!lodash_1.isEmpty(opts) && opts.offset) || 0;
    const limit = (!lodash_1.isEmpty(opts) && opts.limit) || graphql_constants_1.defaultQueryLimit;
    const filter = opts.filter || {};
    const totalFilterParams = Object.keys(filter).length;
    let totalTakenForFilter = 0;
    return array.filter((item, index) => {
        if (index < offset) {
            return false;
        }
        totalTakenForFilter++;
        if (limit < totalTakenForFilter) {
            return false;
        }
        let matchedFilteredParams = 0;
        if (filter.id) {
            return item.id === filter.id;
        }
        lodash_1.forOwn(filter, (value, key) => {
            if (item[key] === value) {
                matchedFilteredParams++;
            }
        });
        return matchedFilteredParams === totalFilterParams;
    });
}
exports.applyClientFilterToArray = applyClientFilterToArray;
function mergeQueryFilters(inputFilter, plainQueryFilter = {}) {
    if (plainQueryFilter.id) {
        plainQueryFilter._id = plainQueryFilter.id;
        delete plainQueryFilter.id;
    }
    return Object.assign(inputFilter, plainQueryFilter);
}
exports.mergeQueryFilters = mergeQueryFilters;
function getArgsFromContext(context) {
    return context.getArgs()[1];
}
exports.getArgsFromContext = getArgsFromContext;
function normalizeClientFilterForSearch(clientFilter = {}) {
    const normalized = {};
    if (clientFilter.offset === undefined) {
        normalized.offset = 0;
    }
    else {
        normalized.offset = clientFilter.offset;
    }
    if (clientFilter.limit === undefined || clientFilter.limit < 1) {
        normalized.limit = graphql_constants_1.defaultQueryLimit;
    }
    else {
        normalized.limit = clientFilter.limit;
    }
    if (lodash_1.isEmpty(clientFilter.filter)) {
        normalized.filter = {};
    }
    else {
        normalized.filter = clientFilter.filter;
    }
    if (lodash_1.isEmpty(clientFilter.orderBy)) {
        normalized.orderBy = {
            property: 'updatedAt',
            direction: -1,
        };
    }
    else {
        const { property, direction } = clientFilter.orderBy;
        normalized.orderBy = {
            property,
            direction: direction === order_by_direction_1.OrderByDirection.Asc ? 1 : -1,
        };
    }
    return normalized;
}
exports.normalizeClientFilterForSearch = normalizeClientFilterForSearch;
function normalizeClientFilterForCount(clientFilter = {}) {
    const normalized = normalizeClientFilterForSearch(clientFilter);
    normalized.limit = Number.MAX_SAFE_INTEGER;
    return normalized;
}
exports.normalizeClientFilterForCount = normalizeClientFilterForCount;
function isValidMongoId(str) {
    const validator = new class_validator_1.Validator();
    return validator.isMongoId(str);
}
exports.isValidMongoId = isValidMongoId;
function pushIfNotContains(arr, val) {
    if (arr.length === lodash_1.pull(arr, val).length) {
        arr.push(val);
    }
    return arr;
}
exports.pushIfNotContains = pushIfNotContains;
function getMajorityNumber(size) {
    return Math.floor(size / 2) + 1;
}
exports.getMajorityNumber = getMajorityNumber;
function popFirstPrimitive(array, search) {
    const index = array.indexOf(search);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}
exports.popFirstPrimitive = popFirstPrimitive;
function popFirst(array, fn) {
    let index = null;
    array.find((v, i) => {
        const found = fn(v);
        if (found === true) {
            index = i;
        }
        return Boolean(found);
    });
    if (index !== null) {
        array.splice(index, 1);
    }
    return array;
}
exports.popFirst = popFirst;
function getRequestFromContext(context) {
    return (context.switchToHttp().getRequest() ||
        graphql_1.GqlExecutionContext.create(context).getContext().req);
}
exports.getRequestFromContext = getRequestFromContext;
function setupDownloadHeaders(res, filename = 'unnamed', mimeType) {
    res.set('Content-Type', mimeType || 'application/octet-stream');
    res.set('Content-Disposition', `attachment;filename=${filename}`);
    return res;
}
exports.setupDownloadHeaders = setupDownloadHeaders;
//# sourceMappingURL=utils.js.map