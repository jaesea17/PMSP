"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const usersUtils_1 = require("../../utils/users/usersUtils");
const user_1 = require("../../models/users/user");
const options_1 = require("../../utils/helpers/options");
async function updateUser(req, res) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;
        const validateUpdate = usersUtils_1.updateUsersSchema.validate(req.body, options_1.options);
        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message });
        }
        const record = await user_1.UsersInstance.findOne({ where: { id } });
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find Station",
            });
        }
        const updatedUser = await record.update({
            ...req.body
        });
        return res.status(200).json({
            message: 'You have successfully updated Station',
            record: updatedUser
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'failed to update Station',
            route: '/update/:id'
        });
    }
}
exports.updateUser = updateUser;
