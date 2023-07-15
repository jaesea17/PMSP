import express from "express";
import { updateObservationsSchema } from "../../utils/observations/observationsUtils";
import { ObservInstance } from "../../models/userObservations/observationsModel";
import { options } from "../../utils/helpers/options";
import { PetrolInstance } from "../../models/commodities/petrolModel";
import { getIds } from "../../utils/helpers/extractIds";

export async function updateObservation(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const { likes, price } = req.body
        const { commodityId, observationId } = getIds(id)

        console.log("updateObservation 15: ", req.body)

        const validateUpdate = updateObservationsSchema.validate(req.body, options)

        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message })
        }

        const record = await ObservInstance.findOne({ where: { id: observationId } })
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find observation",
            })
        }

        const updatedObservation = await record.update({
            likes
        })
        //automatically updating the petrol price with the observation price
        if (likes === 5) {
            const record = await PetrolInstance.findOne({ where: { id: commodityId } })
            if (!record) {
                return res.status(400).json({
                    Error: "Cannot find Petrol commodity, to automatically update price",
                })
            }
            await record.update({
                price
            })
        }

        return res.status(200).json({
            message: 'You have successfully updated observation',
            record: updatedObservation
        })

    } catch (err) {
        return res.status(500).json({
            message: 'failed to update obsrvation',
            route: '/update/:id'
        })
    }
}

