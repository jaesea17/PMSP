import jwt from "jsonwebtoken";

export const generateToken = (user: { [key: string]: unknown }): unknown => {
    const pass = process.env.JWT_SECRET as string;
    console.log("util 25", pass);

    return jwt.sign(user, pass, { expiresIn: "7d" });
};