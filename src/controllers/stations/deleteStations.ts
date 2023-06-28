import express from "express";
import { StationsInstance } from "../../models/stations/stationsModel";

export async function deleteAllStations(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        await StationsInstance.destroy();
        return res.status(200).json({
            message: 'Station deleted successfully',
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete Station',
            route: '/delete/:id'
        })
    }
}
