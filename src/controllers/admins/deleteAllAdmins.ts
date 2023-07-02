import express from "express";
import { AdminsInstance } from "../../models/admins/admin";


export async function deleteAdmins(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        await AdminsInstance.destroy({ where: {} });
        return res.status(200).json({
            message: 'Admins deleted successfully',
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete admins',
            route: '/delete'
        })
    }
}