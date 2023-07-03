"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObservation = void 0;
const observationsModel_1 = require("../../models/userObservations/observationsModel");
const user_1 = require("../../models/users/user");
async function getObservation(req, res) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await observationsModel_1.ObservInstance.findOne({
            where: { id },
            include: [
                {
                    model: user_1.UsersInstance,
                    as: "user",
                    // separate: true,
                },
                // {
                //     model: PetrolInstance,
                //     as: "Commodity",
                //     // separate: true
                // }
            ]
        });
        return res.status(200).json({
            message: 'Retrieved observation successfully',
            observation: record
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
