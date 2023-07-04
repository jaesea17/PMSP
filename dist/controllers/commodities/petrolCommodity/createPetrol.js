"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPetrol = void 0;
const uuid_1 = require("uuid");
const petrolUtils_1 = require("../../../utils/commodities/petrolUtils");
const options_1 = require("../../../utils/helpers/options");
const petrolModel_1 = require("../../../models/commodities/petrolModel");
async function createPetrol(req, res) {
    try {
        const id = (0, uuid_1.v4)();
        console.log("createPetrol 10");
        const validationResult = petrolUtils_1.createPetrolSchema.validate(req.body, options_1.options);
        console.log("createPetrol 12");
        if (validationResult.error) {
            return res.status(400).json({ Error: validationResult.error.details[0].message });
        }
        console.log("createPetrol 16");
        const record = await petrolModel_1.PetrolInstance.create({
            id,
            ...req.body
        });
        res.status(201).json({
            message: 'You have successfully created Petrol commodity',
            record,
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to create Petrol commodity',
            route: "/create"
        });
    }
}
exports.createPetrol = createPetrol;
