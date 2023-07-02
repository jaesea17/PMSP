"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const options_1 = require("../../utils/options");
const adminUtils_1 = require("../../utils/admins/adminUtils");
const admin_1 = require("../../models/admins/admin");
async function registerAdmin(req, res) {
    const id = (0, uuid_1.v4)();
    try {
        const validationResult = adminUtils_1.adminSchema.validate(req.body, options_1.options);
        if (validationResult.error) {
            return res.status(400).json({
                Error: validationResult.error.details[0].message,
            });
        }
        const passwordHash = await bcrypt_1.default.hash(req.body.password, 8);
        if (await admin_1.AdminsInstance.findOne({ where: { email: req.body.email } })) {
            return res.status(409).json({
                message: "Username already exists"
            });
        }
        const record = await admin_1.AdminsInstance.create({
            id: id,
            ...req.body
        });
        return res.status(200).json({
            message: "registered successfully",
            record,
        });
    }
    catch (err) {
        res.status(500).json({
            msg: "failed to create",
            route: "/create",
        });
    }
}
exports.registerAdmin = registerAdmin;
