import express from "express";
import { updateObservationsSchema } from "../../utils/observations/observationsUtils";
import { ObservInstance } from "../../models/userObservations/observationsModel";
import { options } from "../../utils/options";

export async function updateObservation(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;

        const validateUpdate = updateObservationsSchema.validate(req.body, options)

        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message })
        }

        const record = await ObservInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find observation",
            })
        }

        const updatedTrip = await record.update({
            id,
            ...req.body
        })

        return res.status(200).json({
            message: 'You have successfully updated observation',
            record: updatedTrip
        })

    } catch (err) {
        return res.status(500).json({
            message: 'failed to update obsrvation',
            route: '/update/:id'
        })
    }
}