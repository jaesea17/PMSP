"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObservationsSchema = exports.createObservationsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createObservationsSchema = joi_1.default.object().keys({
    price: joi_1.default.number().required(),
    queue: joi_1.default.string().required(),
    likes: joi_1.default.number().required(),
    userId: joi_1.default.string().required(),
    commodityId: joi_1.default.string().required()
});
exports.updateObservationsSchema = joi_1.default.object().keys({
    price: joi_1.default.number(),
    queue: joi_1.default.string(),
    likes: joi_1.default.number(),
    userId: joi_1.default.string(),
    commodityId: joi_1.default.string()
});
