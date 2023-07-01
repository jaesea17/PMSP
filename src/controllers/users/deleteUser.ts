import express from "express";
import { UsersInstance } from "../../models/users/user";

export async function deleteUser(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await UsersInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                message: 'cannot find user'
            })
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'User deleted successfully',
            deletedRecord
        })

    } catch (err) {
        res.status(500).json({
            message: 'failed to delete user',
            route: '/delete/:id'
        })
    }
}