"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPetrol = void 0;
const petrolModel_1 = require("../../../models/commodities/petrolModel");
const observationsModel_1 = require("../../../models/userObservations/observationsModel");
const user_1 = require("../../../models/users/user");
async function getPetrol(req, res) {
    try {
        const { id } = req.params;
        const limit = req.query?.limit;
        const record = await petrolModel_1.PetrolInstance.findOne({
            where: { id },
            include: [
                {
                    model: observationsModel_1.ObservInstance,
                    as: "observations",
                    include: [{
                            model: user_1.UsersInstance,
                            as: "user"
                        }]
                }
            ]
        });
        return res.status(200).json({
            message: 'Retrieved Petrol commodity successfully',
            Commodity: record
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
