"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePetrol = void 0;
const petrolUtils_1 = require("../../../utils/commodities/petrolUtils");
const petrolModel_1 = require("../../../models/commodities/petrolModel");
const options_1 = require("../../../utils/helpers/options");
async function updatePetrol(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const { name } = req.body;
        const validateUpdate = petrolUtils_1.updatePetrolSchema.validate(req.body, options_1.options);
        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message });
        }
        const record = await petrolModel_1.PetrolInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find Petrol commodity",
            });
        }
        const updatedPetrol = await record.update({
            ...req.body
        });
        return res.status(200).json({
            message: 'You have successfully updated Petrol commodity',
            record: updatedPetrol
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'failed to update Petrol commodity',
            route: '/update/:id'
        });
    }
}
exports.updatePetrol = updatePetrol;
