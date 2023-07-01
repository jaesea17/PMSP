import express from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { userSchema } from "../../utils/users/usersUtils";
import { UsersInstance } from "../../models/users/user";
import { options } from "../../utils/options";

export async function registerUser(req: express.Request, res: express.Response) {
    const id = uuidv4();
    try {
        const validationResult = userSchema.validate(req.body, options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }

        const passwordHash = await bcrypt.hash(req.body.password, 8);

        if (await UsersInstance.findOne({ where: { userName: req.body.email } })) {
            return res.status(409).json({
                message: "Username already exists"
            })
        }

        const record = await UsersInstance.create({
            id: id,
            ...req.body
        });
        return res.status(200).json({
            message: "registered successfully",
            record,
        });
    } catch (err) {
        console.log('@48', err);
        res.status(500).json({
            msg: "failed to create",
            route: "/create",
        });
    }
}