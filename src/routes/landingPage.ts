import express from "express";
import { getStations } from "../controllers/stations/getStations";

const router = express.Router();

router.get("/", getStations);

export default router;

