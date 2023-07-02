import express from "express";
import stationsRouter from './stationsRoutes'
import petrolRouter from './petrolRoutes'
import adminRouter from './adminRoutes'

const router = express.Router();

router.use("/", adminRouter);
router.use("/station", stationsRouter);
router.use("/petrol", petrolRouter);

export default router;