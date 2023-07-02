import express from "express";
import { PetrolInstance } from "../../../models/commodities/petrolModel";
import { ObservInstance } from "../../../models/userObservations/observationsModel";

export async function getPetrol(req: express.Request, res: express.Response) {
    try {
        const { id } = req.params;
        const limit = req.query?.limit as number | undefined
        const record = await PetrolInstance.findOne({
            where: { id },
            include: {
                model: ObservInstance,
                as: "observations"
            }
        })
        return res.status(200).json({
            message: 'Retrieved Petrol commodity successfully',
            products: record
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Petrol commodity',
            route: '/read '
        })
    }
}


