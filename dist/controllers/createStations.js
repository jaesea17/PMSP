"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStation = void 0;
const utils_1 = require("../utils/utils");
const stationsModel_1 = require("../models/stationsModel");
const uuid_1 = require("uuid");
async function createStation(req, res) {
    try {
        const id = (0, uuid_1.v4)();
        const validationResult = utils_1.createStationsSchema.validate(req.body, utils_1.options);
        if (validationResult.error) {
            return res.status(400).json({ Error: validationResult.error.details[0].message });
        }
        const record = await stationsModel_1.StationsInstance.create({
            id,
            ...req.body
        });
    }
    finally {
    }
}
exports.createStation = createStation;
