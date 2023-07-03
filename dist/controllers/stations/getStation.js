"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStation = void 0;
const stationsModel_1 = require("../../models/stations/stationsModel");
const petrolModel_1 = require("../../models/commodities/petrolModel");
const observationsModel_1 = require("../../models/userObservations/observationsModel");
const user_1 = require("../../models/users/user");
async function getStation(req, res) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await stationsModel_1.StationsInstance.findOne({
            where: { id },
            include: [
                {
                    model: petrolModel_1.PetrolInstance,
                    as: "commodities",
                    include: [
                        {
                            model: observationsModel_1.ObservInstance,
                            as: "observations",
                            include: [
                                {
                                    model: user_1.UsersInstance,
                                    as: "user"
                                }
                            ]
                        }
                    ]
                }
            ]
        });
        return res.status(200).json({
            message: 'Retrieved Station successfully',
            station: record
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Station',
            route: '/admin/station/get/:id'
        });
    }
}
exports.getStation = getStation;
