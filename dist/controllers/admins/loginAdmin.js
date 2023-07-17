"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const options_1 = require("../../utils/helpers/options");
const generateToken_1 = require("../../utils/helpers/generateToken");
const adminUtils_1 = require("../../utils/admins/adminUtils");
const admin_1 = require("../../models/admins/admin");
async function loginAdmin(req, res) {
    // const id = uuidv4();
    try {
        const validationResult = adminUtils_1.adminLoginSchema.validate(req.body, options_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const Admin = (await admin_1.AdminsInstance.findOne({
            where: { email: req.body?.email }
        }));
        if (!Admin) {
            return res.status(401).json({
                message: "Incorrect Email or password",
            });
        }
        const { id } = Admin;
        const token = (0, generateToken_1.generateToken)({ id });
        const validAdmin = await bcrypt_1.default.compare(req.body?.password, Admin.password);
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
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            msg: "failed to login",
            route: "/admin/login",
        });
    }
}
exports.loginAdmin = loginAdmin;
