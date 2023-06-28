import express from "express";
import { updateStationsSchema } from "../../utils/stations/stationsUtils";
import { StationsInstance } from "../../models/stations/stationsModel";
import { options } from "../../utils/options";

export async function updateStation(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const { name } = req.body;

        const validateUpdate = updateStationsSchema.validate(req.body, options)

        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message })
        }

        const record = await StationsInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find Station",
            })
        }

        const updatedTrip = await record.update({
            name,
        })

        return res.status(200).json({
            message: 'You have successfully updated Station',
            record: updatedTrip
        })

    } catch (err) {
        return res.status(500).json({
            message: 'failed to update Station',
            route: '/update/:id'
        })
    }
}