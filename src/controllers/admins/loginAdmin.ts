import express from "express";
import bcrypt from "bcrypt";
import { options } from "../../utils/options";
import { generateToken } from "../../utils/generateToken";
import { adminLoginSchema } from "../../utils/admins/adminUtils";
import { AdminsInstance } from "../../models/admins/admin";

export async function loginAdmin(req: express.Request, res: express.Response) {
    // const id = uuidv4();
    try {
        const validationResult = adminLoginSchema.validate(req.body, options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }

        const Admin = (await AdminsInstance.findOne({
            where: { email: req.body?.email }
        })) as unknown as { [key: string]: string };

        if (!Admin) {
            return res.status(401).json({
                message: "Incorrect Email or password",
            });
        }

        const { id } = Admin;
        const token = generateToken({ id });

        const validAdmin = await bcrypt.compare(req.body?.password, Admin.password);

        if (!validAdmin) {
            return res.status(401).json({
                message: "Incorrect username or password",
            });
        }

        if (validAdmin) {
            return res.status(200).json({
                message: "Login successful",
                token
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            msg: "failed to login",
            route: "/login",
        });
    }
}