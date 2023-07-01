"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllStations = void 0;
const stationsModel_1 = require("../../models/stations/stationsModel");
async function deleteAllStations(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        await stationsModel_1.StationsInstance.destroy({ where: {} });
        return res.status(200).json({
            message: 'Stations deleted successfully',
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete Station',
            route: '/admin/deleteStations'
        });
    }
}
exports.deleteAllStations = deleteAllStations;
