"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObservation = void 0;
const observationsModel_1 = require("../../models/userObservations/observationsModel");
async function getObservation(req, res) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await observationsModel_1.ObservInstance.findOne({
            where: { id },
            // include: {
            //     model: PetrolInstance,
            //     as: "petrol"
            // }
        });
        console.log("getStation 19");
        return res.status(200).json({
            message: 'Retrieved observation successfully',
            product: record
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve observation',
            route: '/observation/get/:id'
        });
    }
}
exports.getObservation = getObservation;
