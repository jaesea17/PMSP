"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllPetrol = exports.deletePetrol = void 0;
const petrolModel_1 = require("../../../models/commodities/petrolModel");
async function deletePetrol(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await petrolModel_1.PetrolInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                message: 'cannot find bookedtrip'
            });
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'Petrol commodity deleted successfully',
            deletedRecord
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete Petrol commodity',
            route: '/delete/:id'
        });
    }
}
exports.deletePetrol = deletePetrol;
async function deleteAllPetrol(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        await petrolModel_1.PetrolInstance.destroy();
        return res.status(200).json({
            message: 'Petrol commodity deleted successfully',
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete Petrol commodity',
            route: '/delete/:id'
        });
    }
}
exports.deleteAllPetrol = deleteAllPetrol;
