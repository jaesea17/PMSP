import express from "express";
import { UsersInstance } from "../../models/users/user";
import { ObservInstance } from "../../models/userObservations/observationsModel";

export async function getUser(req: express.Request, res: express.Response) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await UsersInstance.findOne({
            where: { id },
            include: {
                model: ObservInstance,
                as: "observations"
            }
        })
        return res.status(200).json({
            message: 'Retrieved user successfully',
            product: record
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve user',
            route: '/get/:id'
        })
    }
}
