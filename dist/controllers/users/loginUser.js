"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usersUtils_1 = require("../../utils/users/usersUtils");
const options_1 = require("../../utils/helpers/options");
const user_1 = require("../../models/users/user");
const generateToken_1 = require("../../utils/helpers/generateToken");
async function loginUser(req, res) {
    try {
        const validationResult = usersUtils_1.loginUserSchema.validate(req.body, options_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const User = (await user_1.UsersInstance.findOne({
            where: { userName: req.body?.userName }
        }));
        if (!User) {
            return res.status(401).json({
                message: "Incorrect Email or password",
            });
        }
        const { id } = User;
        const token = (0, generateToken_1.generateToken)({ id });
        const validUser = await bcrypt_1.default.compare(req.body.password, User.password);
        if (!validUser) {
            return res.status(401).json({
                message: "Incorrect username or password",
            });
        }
        if (validUser) {
            return res.status(200).json({
                message: "Login successful",
                token,
            });
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "failed to login",
            route: "/login",
        });
    }
}
exports.loginUser = loginUser;
