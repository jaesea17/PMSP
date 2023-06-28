import express from "express";
import { createStationsSchema } from "../../utils/stations/stationsUtils";
import { options } from "../../utils/options";
import { StationsInstance } from "../../models/stations/stationsModel";
import { v4 as uuid4 } from 'uuid';

export async function createStation(req: express.Request | any, res: express.Response) {
    try {
        const id = uuid4();
        const validationResult = createStationsSchema.validate(req.body, options);
        if (validationResult.error) {
            return res.status(400).json({ Error: validationResult.error.details[0].message })
        }
        const record = await StationsInstance.create({
            id,
            ...req.body
        })
        res.status(201).json({
            message: 'You have successfully created a Station',
            record,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to create Station',
            route: '/create'
        })
    }
}