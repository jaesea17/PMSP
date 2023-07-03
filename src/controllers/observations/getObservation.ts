import express from "express";
import { ObservInstance } from "../../models/userObservations/observationsModel";
import { UsersInstance } from "../../models/users/user";
import { PetrolInstance } from "../../models/commodities/petrolModel";

export async function getObservation(req: express.Request, res: express.Response) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await ObservInstance.findOne({
            where: { id },
            include: [
                {
                    model: UsersInstance,
                    as: "user",
                    // separate: true,
                },
                // {
                //     model: PetrolInstance,
                //     as: "Commodity",
                //     // separate: true
                // }
            ]
        })
        return res.status(200).json({
            message: 'Retrieved observation successfully',
            observation: record
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve observation',
            route: '/observation/get/:id'
        })
    }
}
