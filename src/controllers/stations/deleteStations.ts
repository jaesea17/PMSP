import express from "express";
import { StationsInstance } from "../../models/stations/stationsModel";
import { log } from "console";

export async function deleteAllStations(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        await StationsInstance.destroy({ where: {} });
        return res.status(200).json({
            message: 'Stations deleted successfully',
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete Station',
            route: '/admin/deleteStations'
        })
    }
}
