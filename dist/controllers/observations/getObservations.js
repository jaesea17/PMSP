"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObservations = void 0;
const observationsModel_1 = require("../../models/userObservations/observationsModel");
async function getObservations(req, res) {
    try {
        const limit = req.query?.limit;
        console.log("observationRoutes 7");
        const { count, rows } = await observationsModel_1.ObservInstance.findAndCountAll({
            where: {}, limit,
        });
        console.log("observationRoutes 12", rows);
        return res.status(200).json({
            message: 'Retrieved observations successfully',
            observations: rows
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve observations',
            route: '/observation/get'
        });
    }
}
exports.getObservations = getObservations;
