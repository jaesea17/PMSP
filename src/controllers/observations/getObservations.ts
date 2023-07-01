import express from "express";
import { ObservInstance } from "../../models/userObservations/observationsModel";

export async function getObservations(req: express.Request, res: express.Response) {
    try {
        const limit = req.query?.limit as number | undefined
        const { count, rows } = await ObservInstance.findAndCountAll({
            where: {}, limit,
        });

        return res.status(200).json({
            message: 'Retrieved observations successfully',
            products: rows
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve observations',
            route: '/observation/get'
        })
    }
}