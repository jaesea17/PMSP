"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdmin = void 0;
const admin_1 = require("../../models/admins/admin");
async function getAdmin(req, res) {
    try {
        const { id } = req.params;
        const record = await admin_1.AdminsInstance.findOne({
            where: { id },
            // include: {
            //     model: PetrolInstance,
            //     as: "petrol"
            // }
        });
        return res.status(200).json({
            message: 'Retrieved admin successfully',
            admin: record
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve admin',
            route: '/get/:id'
        });
    }
}
exports.getAdmin = getAdmin;
