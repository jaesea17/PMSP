import express from "express";
import { UsersInstance } from "../../models/users/user";

export async function deleteUsers(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        await UsersInstance.destroy({ where: {} });
        return res.status(200).json({
            message: 'Users deleted successfully',
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete users',
            route: '/delete'
        })
    }
}