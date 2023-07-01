"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getStations_1 = require("../controllers/stations/getStations");
const router = express_1.default.Router();
router.get("/", getStations_1.getStations);
exports.default = router;
