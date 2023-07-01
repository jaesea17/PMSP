"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = void 0;
const user_1 = require("../../models/users/user");
async function deleteUsers(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        await user_1.UsersInstance.destroy({ where: {} });
        return res.status(200).json({
            message: 'Users deleted successfully',
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to delete users',
            route: '/delete'
        });
    }
}
exports.deleteUsers = deleteUsers;
