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
    commodity: joi_1.default.string().required(),
    stationId: joi_1.default.string().required()
});
exports.updatePetrolSchema = joi_1.default.object().keys({
    price: joi_1.default.number(),
    isAvailable: joi_1.default.boolean(),
    commodity: joi_1.default.string(),
    stationId: joi_1.default.string()
});
