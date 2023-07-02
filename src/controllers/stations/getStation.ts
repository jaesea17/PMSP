import express from "express";
import { StationsInstance } from "../../models/stations/stationsModel";
import { PetrolInstance } from "../../models/commodities/petrolModel";

export async function getStation(req: express.Request, res: express.Response) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await StationsInstance.findOne({
            where: { id },
            include: {
                model: PetrolInstance,
                as: "commodity"
            }
        })
        return res.status(200).json({
            message: 'Retrieved Station successfully',
            product: record
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Station',
            route: '/admin/station/get/:id'
        })
    }
}
