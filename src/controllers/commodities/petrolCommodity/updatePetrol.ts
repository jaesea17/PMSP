import express from "express";
import { updatePetrolSchema } from "../../../utils/commodities/petrolUtils";
import { PetrolInstance } from "../../../models/commodities/petrolModel";
import { options } from "../../../utils/options";

export async function updatePetrol(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const { name } = req.body;

        const validateUpdate = updatePetrolSchema.validate(req.body, options)

        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message })
        }

        const record = await PetrolInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find Petrol commodity",
            })
        }

        const updatedTrip = await record.update({
            id,
            ...req.body
        })

        return res.status(200).json({
            message: 'You have successfully updated Petrol commodity',
            record: updatedTrip
        })

    } catch (err) {
        return res.status(500).json({
            message: 'failed to update Petrol commodity',
            route: '/update/:id'
        })
    }
}