import express from "express";
import stationsRouter from './stationsRoutes'
import petrolRouter from './petrolRoutes'

const router = express.Router();

router.use("/station", stationsRouter);
router.use("/petrol", petrolRouter);

export default router;