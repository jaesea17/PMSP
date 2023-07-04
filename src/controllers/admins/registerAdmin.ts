import express from "express";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { options } from "../../utils/helpers/options";
import { adminSchema } from "../../utils/admins/adminUtils";
import { AdminsInstance } from "../../models/admins/admin";

export async function registerAdmin(req: express.Request, res: express.Response) {
    const id = uuidv4();
    try {
        const validationResult = adminSchema.validate(req.body, options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }

        const passwordHash = await bcrypt.hash(req.body.password, 8);

        if (await AdminsInstance.findOne({ where: { email: req.body.email } })) {
            return res.status(409).json({
                message: "Username already exists"
            })
        }

        const record = await AdminsInstance.create({
            id: id,
            ...req.body
        });
        return res.status(200).json({
            message: "registered successfully",
            record,
        });
    } catch (err) {
        res.status(500).json({
            msg: "failed to create",
            route: "/create",
        });
    }
}