"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const user_1 = require("../../models/users/user");
async function deleteUser(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const record = await user_1.UsersInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                message: 'cannot find user'
            });
        }
        const deletedRecord = await record.destroy();
        return res.status(200).json({
            message: 'User deleted successfully',
            deletedRecord
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete user',
            route: '/delete/:id'
        });
    }
}
exports.deleteUser = deleteUser;
