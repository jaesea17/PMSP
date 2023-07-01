import express from "express";
import { ObservInstance } from "../../models/userObservations/observationsModel";

export async function deleteAllObservations(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        await ObservInstance.destroy({ where: {} });
        return res.status(200).json({
            message: 'Observations deleted successfully',
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete Observations',
            route: '/observation/delete'
        })
    }
}
