"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStation = void 0;
const stationsUtils_1 = require("../../utils/stations/stationsUtils");
const options_1 = require("../../utils/helpers/options");
const stationsModel_1 = require("../../models/stations/stationsModel");
const uuid_1 = require("uuid");
async function createStation(req, res) {
    try {
        const id = (0, uuid_1.v4)();
        const validationResult = stationsUtils_1.createStationsSchema.validate(req.body, options_1.options);
        if (validationResult.error) {
            return res.status(400).json({ Error: validationResult.error.details[0].message });
        }
        if (await stationsModel_1.StationsInstance.findOne({ where: { name: req.body.name } })) {
            return res.status(409).json({
                message: "Station already Exist"
            });
        }
        const record = await stationsModel_1.StationsInstance.create({
            id,
            ...req.body
        });
        res.status(201).json({
            message: 'You have successfully created a Station',
            record,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to create Station',
            route: '/admin/createStation'
        });
    }
}
exports.createStation = createStation;
