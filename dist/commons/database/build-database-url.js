"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("~/commons/config/env");
function buildDatabaseUrl() {
    if (env_1.MONGO_URL === undefined) {
        return `mongodb://${env_1.MONGO_HOST}:${env_1.MONGO_PORT}/${env_1.MONGO_DB_NAME}`;
    }
    return env_1.MONGO_URL;
}
exports.buildDatabaseUrl = buildDatabaseUrl;
//# sourceMappingURL=build-database-url.js.map