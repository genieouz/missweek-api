"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_module_1 = require("~/commons/database/database.module");
const database_url_1 = require("~/commons/database/database.url");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
const user_module_1 = require("~/user/user.module");
const auth_module_1 = require("~/auth/auth.module");
const post_module_1 = require("./post/post.module");
const attachment_module_1 = require("./attachment/attachment.module");
const app_controller_1 = require("./app.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
            mongoose_1.MongooseModule.forRoot(database_url_1.databaseUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
                typePaths: ['./**/*.graphql'],
                context: ({ req }) => ({ req }),
                playground: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            post_module_1.PostModule,
            attachment_module_1.AttachmentModule,
        ],
        controllers: [app_controller_1.AppController],
        exports: [database_module_1.DatabaseModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map