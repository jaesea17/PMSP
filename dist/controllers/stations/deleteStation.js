"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStation = void 0;
const stationsModel_1 = require("../../models/stations/stationsModel");
async function deleteStation(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await stationsModel_1.StationsInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                message: 'cannot find bookedtrip'
            });
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'Station deleted successfully',
            deletedRecord
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete Station',
            route: '/admin/deleteStation/:id'
        });
    }
}
exports.deleteStation = deleteStation;
