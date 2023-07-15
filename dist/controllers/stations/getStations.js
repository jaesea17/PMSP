"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStations = void 0;
const stationsModel_1 = require("../../models/stations/stationsModel");
const petrolModel_1 = require("../../models/commodities/petrolModel");
const observationsModel_1 = require("../../models/userObservations/observationsModel");
const user_1 = require("../../models/users/user");
async function getStations(req, res) {
    try {
        const limit = req.query?.limit;
        const { count, rows } = await stationsModel_1.StationsInstance.findAndCountAll({
            where: {},
            order: [['name', 'ASC']],
            include: [
                {
                    model: petrolModel_1.PetrolInstance,
                    as: "commodities",
                    include: [
                        {
                            model: observationsModel_1.ObservInstance,
                            as: "observations",
                            limit: 1,
                            order: [['createdAt', 'DESC']],
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
            message: 'Retrieved Stations successfully',
            stations: rows
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Stations',
            route: '/'
        });
    }
}
exports.getStations = getStations;
