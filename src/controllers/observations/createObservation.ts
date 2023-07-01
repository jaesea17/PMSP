import express from "express";
import { v4 as uuid4 } from 'uuid';
import { createObservationsSchema } from "../../utils/observations/observationsUtils";
import { ObservInstance } from "../../models/userObservations/observationsModel";
import { options } from "../../utils/options";


export async function createObservation(req: express.Request | any, res: express.Response) {
    try {
        const id = uuid4();
        const validationResult = createObservationsSchema.validate(req.body, options);

        if (validationResult.error) {
            return res.status(400).json({ Error: validationResult.error.details[0].message })
        }

        const record = await ObservInstance.create({
            id,
            ...req.body
        })
        res.status(201).json({
            message: 'You have successfully created an observation',
            record,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'failed to create an observation',
            route: '/observation/create'
        })
    }
}