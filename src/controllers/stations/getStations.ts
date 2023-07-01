import express from "express";
import { StationsInstance } from "../../models/stations/stationsModel";

export async function getStations(req: express.Request, res: express.Response) {
    try {
        const limit = req.query?.limit as number | undefined
        const { count, rows } = await StationsInstance.findAndCountAll({
            where: {}, limit,
        });

        return res.status(200).json({
            message: 'Retrieved Stations successfully',
            products: rows
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Stations',
            route: '/admin/getStation'
        })
    }
}
