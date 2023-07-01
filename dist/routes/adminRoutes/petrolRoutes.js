"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getPetrols_1 = require("../../controllers/commodities/petrolCommodity/getPetrols");
const getPetrol_1 = require("../../controllers/commodities/petrolCommodity/getPetrol");
const createPetrol_1 = require("../../controllers/commodities/petrolCommodity/createPetrol");
const updatePetrol_1 = require("../../controllers/commodities/petrolCommodity/updatePetrol");
const deletePetrol_1 = require("../../controllers/commodities/petrolCommodity/deletePetrol");
const router = express_1.default.Router();
router.get("/getAll", getPetrols_1.getPetrols);
router.get("/get/:id", getPetrol_1.getPetrol);
router.post("/create", createPetrol_1.createPetrol);
router.patch("/update/:id", updatePetrol_1.updatePetrol);
router.delete("/delete/:id", deletePetrol_1.deletePetrol);
router.delete("/delete", deletePetrol_1.deleteAllPetrol);
exports.default = router;
