import express from "express";
import { updateUsersSchema } from "../../utils/users/usersUtils";
import { UsersInstance } from "../../models/users/user";
import { options } from "../../utils/options";

export async function updateUser(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;

        const validateUpdate = updateUsersSchema.validate(req.body, options)

        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message })
        }

        const record = await UsersInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find Station",
            })
        }

        const updatedUser = await record.update({
            ...req.body
        })

        return res.status(200).json({
            message: 'You have successfully updated Station',
            record: updatedUser
        })

    } catch (err) {
        return res.status(500).json({
            message: 'failed to update Station',
            route: '/update/:id'
        })
    }
}