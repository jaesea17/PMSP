"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stationsRoutes_1 = __importDefault(require("./stationsRoutes"));
const petrolRoutes_1 = __importDefault(require("./petrolRoutes"));
const router = express_1.default.Router();
router.use("/station", stationsRoutes_1.default);
router.use("/petrol", petrolRoutes_1.default);
exports.default = router;
