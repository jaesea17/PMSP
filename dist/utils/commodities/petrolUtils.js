"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePetrolSchema = exports.createPetrolSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createPetrolSchema = joi_1.default.object().keys({
    price: joi_1.default.number().required(),
    isAvailable: joi_1.default.boolean().required(),
    likes: joi_1.default.number().required(),
    stationId: joi_1.default.string().required()
});
exports.updatePetrolSchema = joi_1.default.object().keys({
    price: joi_1.default.number(),
    isAvailable: joi_1.default.boolean(),
    likes: joi_1.default.number(),
    stationId: joi_1.default.string()
});
