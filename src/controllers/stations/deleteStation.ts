import express from "express";
import { StationsInstance } from "../../models/stations/stationsModel";

export async function deleteStation(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await StationsInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                message: 'cannot find bookedtrip'
            })
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'Station deleted successfully',
            deletedRecord
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete Station',
            route: '/admin/deleteStation/:id'
        })
    }
}