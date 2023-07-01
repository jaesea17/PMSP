import express from "express";
import { ObservInstance } from "../../models/userObservations/observationsModel";

export async function getObservation(req: express.Request, res: express.Response) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await ObservInstance.findOne({
            where: { id },
            // include: {
            //     model: PetrolInstance,
            //     as: "petrol"
            // }
        })
        console.log("getStation 19")
        return res.status(200).json({
            message: 'Retrieved observation successfully',
            product: record
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve observation',
            route: '/observation/get/:id'
        })
    }
}
