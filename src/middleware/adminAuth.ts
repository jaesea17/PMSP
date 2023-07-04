import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AdminsInstance } from "../models/admins/admin";

// verify token
export async function verifyAdminToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const bearerHeader = req["headers"]["authorization"];
        if (!bearerHeader) {
            return res.status(404).json({ Error: "Admin  not verified" });
        }
        // const token = bearerHeader?.slice(7, bearerHeader.length) as string;
        const token = bearerHeader?.split(' ')[1];


        let verified = jwt.verify(token, process.env.JWT_SECRET as string);

        if (!verified) {
            return res.status(403).json({ Error: "Unauthorized user" });
        }

        const { id } = verified as Record<string, string>;

        const owner = await AdminsInstance.findOne({ where: { id } });

        if (!owner) {
            return res.status(403).json({ Error: "Admin not verified" });
        }

        req.ownerId = id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ Error: "An error courred" });
    }
}



