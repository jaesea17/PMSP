"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObservation = void 0;
const observationsUtils_1 = require("../../utils/observations/observationsUtils");
const observationsModel_1 = require("../../models/userObservations/observationsModel");
const options_1 = require("../../utils/options");
async function updateObservation(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const validateUpdate = observationsUtils_1.updateObservationsSchema.validate(req.body, options_1.options);
        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message });
        }
        const record = await observationsModel_1.ObservInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find observation",
            });
        }
        const updatedTrip = await record.update({
            id,
            ...req.body
        });
        return res.status(200).json({
            message: 'You have successfully updated observation',
            record: updatedTrip
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
