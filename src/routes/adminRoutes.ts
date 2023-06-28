import express from "express";
import { createStation } from "../controllers/stations/createStations";
import { getStations } from "../controllers/stations/getStations";
import { getStation } from "../controllers/stations/getStation";
import { updateStation } from "../controllers/stations/updateStation";
import { deleteStation } from "../controllers/stations/deleteStation";
import { deleteAllStations } from "../controllers/stations/deleteStations";

const router = express.Router();

router.get("/getStations", getStations);
router.get("/getStations", getStation);

router.post("/createStation", createStation);

router.patch("/updateStation", updateStation);

router.delete("/deletsStation", deleteStation);
router.delete("/deletsStation", deleteAllStations);

export default router;
