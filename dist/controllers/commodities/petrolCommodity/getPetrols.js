"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPetrols = void 0;
const petrolModel_1 = require("../../../models/commodities/petrolModel");
async function getPetrols(req, res) {
    try {
        const limit = req.query?.limit;
        const { count, rows } = await petrolModel_1.PetrolInstance.findAndCountAll({
            where: {}, limit,
        });
        return res.status(200).json({
            message: 'Retrieved Petrol commodities successfully',
            commodities: rows
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve Petrol commodity',
            route: '/admin/getPetrols'
        });
    }
}
exports.getPetrols = getPetrols;
