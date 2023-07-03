import express from "express";
import { AdminsInstance } from "../../models/admins/admin";

export async function getAdmins(req: express.Request, res: express.Response) {
    try {
        const limit = req.query?.limit as number | undefined
        const { count, rows } = await AdminsInstance.findAndCountAll({
            where: {}, limit,
        });

        return res.status(200).json({
            message: 'Retrieved admins successfully',
            admins: rows
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve admins',
            route: '/getAdmins'
        })
    }
}
