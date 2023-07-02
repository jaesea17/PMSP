import express from "express";
import { AdminsInstance } from "../../models/admins/admin";

export async function deleteAdmin(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await AdminsInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                message: 'cannot find admin'
            })
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'Admin deleted successfully',
            deletedRecord
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete admin',
            route: '/delete/:id'
        })
    }
}