"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdmin = void 0;
const admin_1 = require("../../models/admins/admin");
async function deleteAdmin(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await admin_1.AdminsInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                message: 'cannot find admin'
            });
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'Admin deleted successfully',
            deletedRecord
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete admin',
            route: '/delete/:id'
        });
    }
}
exports.deleteAdmin = deleteAdmin;
