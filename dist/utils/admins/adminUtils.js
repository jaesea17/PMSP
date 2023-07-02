"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdminSchema = exports.adminLoginSchema = exports.adminSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.adminSchema = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});
exports.adminLoginSchema = joi_1.default.object().keys({
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});
exports.updateAdminSchema = joi_1.default.object().keys({
    name: joi_1.default.string(),
    email: joi_1.default.string(),
    password: joi_1.default.string()
});
