import express from "express";
import { v4 as uuid4 } from "uuid";
import { createPetrolSchema } from "../../../utils/commodities/petrolUtils";
import { options } from "../../../utils/helpers/options";
import { PetrolInstance } from "../../../models/commodities/petrolModel";

export async function createPetrol(req: express.Request | any, res: express.Response) {
    try {
        const id = uuid4();
        console.log("createPetrol 10");
        const validationResult = createPetrolSchema.validate(req.body, options);
        console.log("createPetrol 12");
        if (validationResult.error) {
            return res.status(400).json({ Error: validationResult.error.details[0].message })
        }
        console.log("createPetrol 16");
        const record = await PetrolInstance.create({
            id,
            ...req.body
        })
        res.status(201).json({
            message: 'You have successfully created Petrol commodity',
            record,
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to create Petrol commodity',
            route: "/create"
        })
    }
}