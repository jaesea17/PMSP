import express from "express";
import { PetrolInstance } from "../../../models/commodities/petrolModel";

export async function deletePetrol(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await PetrolInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                message: 'cannot find bookedtrip'
            })
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'Petrol commodity deleted successfully',
            deletedRecord
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete Petrol commodity',
            route: '/delete/:id'
        })
    }
}


export async function deleteAllPetrol(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        await PetrolInstance.destroy();
        return res.status(200).json({
            message: 'Petrol commodity deleted successfully',
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete Petrol commodity',
            route: '/delete/:id'
        })
    }
}
