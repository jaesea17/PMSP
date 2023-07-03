import express from "express";
import { AdminsInstance } from "../../models/admins/admin";

export async function getAdmin(req: express.Request, res: express.Response) {
    try {
        const { id } = req.params;
        const record = await AdminsInstance.findOne({
            where: { id },
            // include: {
            //     model: PetrolInstance,
            //     as: "petrol"
            // }
        })
        return res.status(200).json({
            message: 'Retrieved admin successfully',
            admin: record
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve admin',
            route: '/get/:id'
        })
    }
}
