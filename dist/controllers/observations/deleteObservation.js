"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObservation = void 0;
const observationsModel_1 = require("../../models/userObservations/observationsModel");
async function deleteObservation(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await observationsModel_1.ObservInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                message: 'cannot find observation'
            });
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'Observation deleted successfully',
            deletedRecord
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete observation',
            route: '/observation/delete/:id'
        });
    }
}
exports.deleteObservation = deleteObservation;
