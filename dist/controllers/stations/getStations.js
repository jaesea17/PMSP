"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStations = void 0;
const stationsModel_1 = require("../../models/stations/stationsModel");
async function getStations(req, res) {
    try {
        const limit = req.query?.limit;
        const { count, rows } = await stationsModel_1.StationsInstance.findAndCountAll({
            where: {}, limit,
        });
        return res.status(200).json({
            message: 'Retrieved Stations successfully',
            products: rows
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Stations',
            route: '/read '
        });
    }
}
exports.getStations = getStations;
