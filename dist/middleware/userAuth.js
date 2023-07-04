"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/users/user");
// verify token
async function verifyUserToken(req, res, next) {
    try {
        const bearerHeader = req["headers"]["authorization"];
        if (!bearerHeader) {
            return res.status(404).json({ Error: "Admin  not verified" });
        }
        // const token = bearerHeader?.slice(7, bearerHeader.length) as string;
        const token = bearerHeader?.split(' ')[1];
        let verified = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!verified) {
            return res.status(403).json({ Error: "Unauthorized user" });
        }
        const { id } = verified;
        const owner = await user_1.UsersInstance.findOne({ where: { id } });
        if (!owner) {
            return res.status(403).json({ Error: "User not verified" });
        }
        req.ownerId = id;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ Error: "An error courred" });
    }
}
exports.verifyUserToken = verifyUserToken;
