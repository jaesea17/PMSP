import express from "express";
import { getObservation } from "../../controllers/observations/getObservation";
import { getObservations } from "../../controllers/observations/getObservations";
import { createObservation } from "../../controllers/observations/createObservation";
import { deleteObservation } from "../../controllers/observations/deleteObservation";
import { deleteAllObservations } from "../../controllers/observations/deleteObservations";


const router = express.Router();

router.get("/get/:id", getObservation);
router.get("/get", getObservations);

router.post("/create", createObservation);

router.patch("/update/:id",);

router.delete("/delete/:id", deleteObservation);
router.delete("/delete", deleteAllObservations)

export default router;