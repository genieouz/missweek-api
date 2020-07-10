"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_gender_1 = require("~/user/types/user-gender");
const user_roles_1 = require("~/user/types/user.roles");
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    phone: {
        type: Number,
        required: true,
    },
    countryCode: {
        type: Number,
    },
    fullName: {
        type: String,
    },
    gender: {
        type: user_gender_1.UserGender,
    },
    birthDate: {
        type: Date,
    },
    role: {
        type: String,
        default: user_roles_1.UserRoles.USER,
    },
});
//# sourceMappingURL=user.schema.js.map