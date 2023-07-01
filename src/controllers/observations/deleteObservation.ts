import express from "express";
import { ObservInstance } from "../../models/userObservations/observationsModel";

export async function deleteObservation(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await ObservInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                message: 'cannot find observation'
            })
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'Observation deleted successfully',
            deletedRecord
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete observation',
            route: '/observation/delete/:id'
        })
    }
}