"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStation = void 0;
const stationsUtils_1 = require("../../utils/stations/stationsUtils");
const stationsModel_1 = require("../../models/stations/stationsModel");
const options_1 = require("../../utils/options");
async function updateStation(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const { name } = req.body;
        const validateUpdate = stationsUtils_1.updateStationsSchema.validate(req.body, options_1.options);
        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message });
        }
        const record = await stationsModel_1.StationsInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find Station",
            });
        }
        const updatedStation = await record.update({
            name,
        });
        return res.status(200).json({
            message: 'You have successfully updated Station',
            record: updatedStation
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'failed to update Station',
            route: '/admin/updateStation/:id'
        });
    }
}
exports.updateStation = updateStation;
