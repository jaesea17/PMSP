import express from "express";
import { PetrolInstance } from "../../../models/commodities/petrolModel";

export async function getPetrol(req: express.Request, res: express.Response) {
    try {
        const limit = req.query?.limit as number | undefined
        const { count, rows } = await PetrolInstance.findAndCountAll({
            where: {}, limit,
        });

        return res.status(200).json({
            message: 'Retrieved Petrol commodity successfully',
            products: rows
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Petrol commodity',
            route: '/read '
        })
    }
}
