"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPetrol = void 0;
const petrolModel_1 = require("../../../models/commodities/petrolModel");
const stationsModel_1 = require("../../../models/stations/stationsModel");
async function getPetrol(req, res) {
    try {
        const { id } = req.params;
        const limit = req.query?.limit;
        const record = await petrolModel_1.PetrolInstance.findOne({
            where: { id },
            include: {
                model: stationsModel_1.StationsInstance,
                as: "station"
            }
        });
        return res.status(200).json({
            message: 'Retrieved Petrol commodity successfully',
            products: record
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Petrol commodity',
            route: '/read '
        });
    }
}
exports.getPetrol = getPetrol;
