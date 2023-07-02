"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStation = void 0;
const stationsModel_1 = require("../../models/stations/stationsModel");
const petrolModel_1 = require("../../models/commodities/petrolModel");
async function getStation(req, res) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await stationsModel_1.StationsInstance.findOne({
            where: { id },
            include: {
                model: petrolModel_1.PetrolInstance,
                as: "commodity"
            }
        });
        return res.status(200).json({
            message: 'Retrieved Station successfully',
            product: record
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
