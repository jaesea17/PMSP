"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createStations_1 = require("../controllers/stations/createStations");
const router = express_1.default.Router();
router.get("/getStations");
router.post("/createStation", createStations_1.createStation);
router.patch("/editStation");
router.delete("/deletsStation");
exports.default = router;
