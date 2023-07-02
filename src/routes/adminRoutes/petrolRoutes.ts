import express from "express";
import { getPetrols } from "../../controllers/commodities/petrolCommodity/getPetrols";
import { getPetrol } from "../../controllers/commodities/petrolCommodity/getPetrol";
import { createPetrol } from "../../controllers/commodities/petrolCommodity/createPetrol";
import { updatePetrol } from "../../controllers/commodities/petrolCommodity/updatePetrol";
import { deleteAllPetrol, deletePetrol } from "../../controllers/commodities/petrolCommodity/deletePetrol";

const router = express.Router();

router.get("/get", getPetrols);
router.get("/get/:id", getPetrol);

router.post("/create", createPetrol);

router.patch("/update/:id", updatePetrol);

router.delete("/delete/:id", deletePetrol);
router.delete("/delete", deleteAllPetrol);

export default router;
