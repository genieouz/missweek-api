"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.MONGO_HOST = process.env.MONGO_HOST, exports.MONGO_DB_NAME = process.env.MONGO_DB_NAME, exports.MONGO_PORT = process.env.MONGO_PORT, exports.MONGO_URL = process.env.MONGO_URL, exports.TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN, exports.TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID, exports.TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER, exports.TOKEN_SECRET = process.env.TOKEN_SECRET;
//# sourceMappingURL=env.js.map