import express from "express";
import { createStationsSchema } from "../../utils/stations/stationsUtils";
import { options } from "../../utils/helpers/options";
import { StationsInstance } from "../../models/stations/stationsModel";
import { v4 as uuid4 } from 'uuid';
import { log } from "console";

export async function createStation(req: express.Request | any, res: express.Response) {
    try {
        const id = uuid4();
        const validationResult = createStationsSchema.validate(req.body, options);
        const name = req.body.name.toUpperCase()

        if (validationResult.error) {
            return res.status(400).json({ Error: validationResult.error.details[0].message })
        }

        if (await StationsInstance.findOne({ where: { name } })) {
            return res.status(409).json({
                message: "Station already Exist"
            })
        }
        const record = await StationsInstance.create({
            id,
            name
        })
        res.status(201).json({
            message: 'You have successfully created a Station',
            record,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to create Station',
            route: '/admin/createStation'
        })
    }
}