"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const user_1 = require("../../models/users/user");
async function getUser(req, res) {
    try {
        // const limit = req.query?.limit as number | undefined;
        const { id } = req.params;
        const record = await user_1.UsersInstance.findOne({
            where: { id },
            // include: {
            //     model: PetrolInstance,
            //     as: "petrol"
            // }
        });
        return res.status(200).json({
            message: 'Retrieved user successfully',
            product: record
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to retrieve user',
            route: '/get/:id'
        });
    }
}
exports.getUser = getUser;
