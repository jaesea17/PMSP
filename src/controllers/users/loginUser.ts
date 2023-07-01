import express from "express";
import bcrypt from "bcrypt";
import { userSchema } from "../../utils/users/usersUtils";
import { options } from "../../utils/options";
import { UsersInstance } from "../../models/users/user";
import { generateToken } from "../../utils/generateToken";

export async function loginUser(req: express.Request, res: express.Response) {
    // const id = uuidv4();
    try {
        const validationResult = userSchema.validate(req.body, options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }

        const User = (await UsersInstance.findOne({
            where: { userName: req.body.userName }
        })) as unknown as { [key: string]: string };

        if (!User) {
            return res.status(401).json({
                message: "Incorrect Email or password",
            });
        }

        const { id } = User;
        const token = generateToken({ id });

        const validUser = await bcrypt.compare(req.body.password, User.password);

        if (!validUser) {
            return res.status(401).json({
                message: "Incorrect username or password",
            });
        }

        if (validUser) {
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