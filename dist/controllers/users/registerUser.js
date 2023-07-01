"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const usersUtils_1 = require("../../utils/users/usersUtils");
const user_1 = require("../../models/users/user");
const options_1 = require("../../utils/options");
async function registerUser(req, res) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = usersUtils_1.userSchema.validate(req.body, options_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const passwordHash = await bcrypt_1.default.hash(req.body.password, 8);
        if (await user_1.UsersInstance.findOne({ where: { userName: req.body.email } })) {
            return res.status(409).json({
                message: "Username already exists"
            });
        }
        const record = await user_1.UsersInstance.create({
            id: id,
            ...req.body
        });
        return res.status(200).json({
            message: "registered successfully",
            record,
        });
    }
    catch (err) {
        console.log('@48', err);
        res.status(500).json({
            msg: "failed to create",
            route: "/create",
        });
    }
}
exports.registerUser = registerUser;
