"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdmin = void 0;
const options_1 = require("../../utils/options");
const adminUtils_1 = require("../../utils/admins/adminUtils");
const admin_1 = require("../../models/admins/admin");
async function updateAdmin(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const validateUpdate = adminUtils_1.updateAdminSchema.validate(req.body, options_1.options);
        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message });
        }
        const record = await admin_1.AdminsInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find admin",
            });
        }
        const updatedAdmin = await record.update({
            ...req.body
        });
        return res.status(200).json({
            message: 'You have successfully updated admin',
            record: updatedAdmin
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'failed to update admin',
            route: '/update/:id'
        });
    }
}
exports.updateAdmin = updateAdmin;
