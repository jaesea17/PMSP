"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStations = void 0;
const utils_1 = require("../../utils/utils");
const stationsModel_1 = require("../../models/stations/stationsModel");
async function updateStations(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const { name } = req.body;
        const validateUpdate = utils_1.updateStationsSchema.validate(req.body, utils_1.options);
        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message });
        }
        const record = await stationsModel_1.StationsInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find Station",
            });
        }
        const updatedTrip = await record.update({
            name,
        });
        return res.status(200).json({
            message: 'You have successfully updated Bookedtrip',
            record: updatedTrip
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'failed to update Station',
            route: '/update/:id'
        });
    }
}
exports.updateStations = updateStations;
