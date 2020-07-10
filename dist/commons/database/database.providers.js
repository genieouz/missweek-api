"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_typings_1 = require("~/commons/typings/mongodb.typings");
const database_url_1 = require("~/commons/database/database.url");
const database_connection_name_1 = require("~/commons/database/database-connection-name");
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: database_connection_name_1.databaseConnectionName,
        useFactory: async () => {
            return await mongoose.createConnection(database_url_1.databaseUrl, mongodb_typings_1.mongoConnectionOptions);
        },
    },
];
//# sourceMappingURL=database.providers.js.map