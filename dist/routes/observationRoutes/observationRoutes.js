"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getObservation_1 = require("../../controllers/observations/getObservation");
const getObservations_1 = require("../../controllers/observations/getObservations");
const createObservation_1 = require("../../controllers/observations/createObservation");
const deleteObservation_1 = require("../../controllers/observations/deleteObservation");
const deleteObservations_1 = require("../../controllers/observations/deleteObservations");
const router = express_1.default.Router();
router.get("/get/:id", getObservation_1.getObservation);
router.get("/get", getObservations_1.getObservations);
router.post("/create", createObservation_1.createObservation);
router.patch("/update/:id");
router.delete("/delete/:id", deleteObservation_1.deleteObservation);
router.delete("/delete", deleteObservations_1.deleteAllObservations);
exports.default = router;
