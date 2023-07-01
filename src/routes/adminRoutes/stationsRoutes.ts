import express from "express";
import { createStation } from "../../controllers/stations/createStations";
import { getStations } from "../../controllers/stations/getStations";
import { getStation } from "../../controllers/stations/getStation";
import { updateStation } from "../../controllers/stations/updateStation";
import { deleteStation } from "../../controllers/stations/deleteStation";
import { deleteAllStations } from "../../controllers/stations/deleteStations";

const router = express.Router();

router.get("/getAll", getStations);
router.get("/get/:id", getStation);

router.post("/create", createStation);

router.patch("/update/:id", updateStation);

router.delete("/delete/:id", deleteStation);
router.delete("/deleteAll", deleteAllStations);

export default router;
