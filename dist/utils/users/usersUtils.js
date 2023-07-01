"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsersSchema = exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSchema = joi_1.default.object().keys({
    userName: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});
exports.updateUsersSchema = joi_1.default.object().keys({
    userName: joi_1.default.string(),
    password: joi_1.default.string()
});
