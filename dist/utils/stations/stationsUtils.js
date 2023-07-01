"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStationsSchema = exports.createStationsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createStationsSchema = joi_1.default.object().keys({
    name: joi_1.default.string().required()
});
exports.updateStationsSchema = joi_1.default.object().keys({
    name: joi_1.default.string()
});
