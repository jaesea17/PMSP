"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createObservation = void 0;
const uuid_1 = require("uuid");
const observationsUtils_1 = require("../../utils/observations/observationsUtils");
const observationsModel_1 = require("../../models/userObservations/observationsModel");
const options_1 = require("../../utils/options");
async function createObservation(req, res) {
    try {
        const id = (0, uuid_1.v4)();
        const validationResult = observationsUtils_1.createObservationsSchema.validate(req.body, options_1.options);
        if (validationResult.error) {
            return res.status(400).json({ Error: validationResult.error.details[0].message });
        }
        const record = await observationsModel_1.ObservInstance.create({
            id,
            ...req.body
        });
        res.status(201).json({
            message: 'You have successfully created an observation',
            record,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to create an observation',
            route: '/observation/create'
        });
    }
}
exports.createObservation = createObservation;
