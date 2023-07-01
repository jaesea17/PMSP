"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllObservations = void 0;
const observationsModel_1 = require("../../models/userObservations/observationsModel");
async function deleteAllObservations(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        await observationsModel_1.ObservInstance.destroy({ where: {} });
        return res.status(200).json({
            message: 'Observations deleted successfully',
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete Observations',
            route: '/observation/delete'
        });
    }
}
exports.deleteAllObservations = deleteAllObservations;
