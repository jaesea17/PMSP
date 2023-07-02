"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmins = void 0;
const admin_1 = require("../../models/admins/admin");
async function deleteAdmins(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        await admin_1.AdminsInstance.destroy({ where: {} });
        return res.status(200).json({
            message: 'Admins deleted successfully',
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete admins',
            route: '/delete'
        });
    }
}
exports.deleteAdmins = deleteAdmins;
