import express from "express";
import { StationsInstance } from "../../models/stations/stationsModel";
import { PetrolInstance } from "../../models/commodities/petrolModel";
import { ObservInstance } from "../../models/userObservations/observationsModel";
import { UsersInstance } from "../../models/users/user";

export async function getStation(req: express.Request, res: express.Response) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await StationsInstance.findOne({
            where: { id },
            include: [
                {
                    model: PetrolInstance,
                    as: "commodities",
                    include: [
                        {
                            model: ObservInstance,
                            as: "observations",
                            include: [
                                {
                                    model: UsersInstance,
                                    as: "user"
                                }
                            ]
                        }
                    ]
                }
            ]
        })
        return res.status(200).json({
            message: 'Retrieved Station successfully',
            station: record
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Station',
            route: '/admin/station/get/:id'
        })
    }
}
