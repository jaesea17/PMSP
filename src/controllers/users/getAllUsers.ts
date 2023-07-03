import express from "express";
import { UsersInstance } from "../../models/users/user";

export async function getUsers(req: express.Request, res: express.Response) {
    try {
        const limit = req.query?.limit as number | undefined
        const { count, rows } = await UsersInstance.findAndCountAll({
            where: {}, limit,
        });

        return res.status(200).json({
            message: 'Retrieved users successfully',
            users: rows
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to retrieve users',
            route: '/getUsers'
        })
    }
}
