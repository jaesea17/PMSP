"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObservation = void 0;
const observationsUtils_1 = require("../../utils/observations/observationsUtils");
const observationsModel_1 = require("../../models/userObservations/observationsModel");
const options_1 = require("../../utils/helpers/options");
const petrolModel_1 = require("../../models/commodities/petrolModel");
const extractIds_1 = require("../../utils/helpers/extractIds");
async function updateObservation(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const { likes, price } = req.body;
        const { commodityId, observationId } = (0, extractIds_1.getIds)(id);
        console.log("updateObservation 15: ", req.body);
        const validateUpdate = observationsUtils_1.updateObservationsSchema.validate(req.body, options_1.options);
        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message });
        }
        const record = await observationsModel_1.ObservInstance.findOne({ where: { id: observationId } });
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find observation",
            });
        }
        const updatedObservation = await record.update({
            likes
        });
        //automatically updating the petrol price with the observation price
        if (likes === 5) {
            const record = await petrolModel_1.PetrolInstance.findOne({ where: { id: commodityId } });
            if (!record) {
                return res.status(400).json({
                    Error: "Cannot find Petrol commodity, to automatically update price",
                });
            }
            await record.update({
                price
            });
        }
        return res.status(200).json({
            message: 'You have successfully updated observation',
            record: updatedObservation
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'failed to update obsrvation',
            route: '/update/:id'
        });
    }
}
exports.updateObservation = updateObservation;
