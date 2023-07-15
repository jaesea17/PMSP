import express from "express";
import { StationsInstance } from "../../models/stations/stationsModel";
import { PetrolInstance } from "../../models/commodities/petrolModel";
import { ObservInstance } from "../../models/userObservations/observationsModel";
import { UsersInstance } from "../../models/users/user";

export async function getStations(req: express.Request, res: express.Response) {
    try {
        const limit = req.query?.limit as number | undefined
        const { count, rows } = await StationsInstance.findAndCountAll({
            where: {},
            order: [['name', 'ASC']],
            include: [
                {

                    model: PetrolInstance,
                    as: "commodities",
                    include: [
                        {
                            model: ObservInstance,
                            as: "observations",
                            limit: 1,
                            order: [['createdAt', 'DESC']],
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
        });

        return res.status(200).json({
            message: 'Retrieved Stations successfully',
            stations: rows
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Stations',
            route: '/'
        })
    }
}
