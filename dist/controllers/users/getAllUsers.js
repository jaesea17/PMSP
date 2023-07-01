"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const user_1 = require("../../models/users/user");
async function getUsers(req, res) {
    try {
        const limit = req.query?.limit;
        const { count, rows } = await user_1.UsersInstance.findAndCountAll({
            where: {}, limit,
        });
        return res.status(200).json({
            message: 'Retrieved users successfully',
            products: rows
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve users',
            route: '/getUsers'
        });
    }
}
exports.getUsers = getUsers;
