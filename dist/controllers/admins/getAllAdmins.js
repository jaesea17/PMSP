"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdmins = void 0;
const admin_1 = require("../../models/admins/admin");
async function getAdmins(req, res) {
    try {
        const limit = req.query?.limit;
        const { count, rows } = await admin_1.AdminsInstance.findAndCountAll({
            where: {}, limit,
        });
        return res.status(200).json({
            message: 'Retrieved admins successfully',
            products: rows
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve admins',
            route: '/getAdmins'
        });
    }
}
exports.getAdmins = getAdmins;
