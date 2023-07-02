import express from "express";
import { options } from "../../utils/options";
import { updateAdminSchema } from "../../utils/admins/adminUtils";
import { AdminsInstance } from "../../models/admins/admin";

export async function updateAdmin(req: express.Request, res: express.Response) {
    // res.json({ message: 'Hello User' });
    try {
        const { id } = req.params;

        const validateUpdate = updateAdminSchema.validate(req.body, options)

        if (validateUpdate.error) {
            return res.status(400).json({ Error: validateUpdate.error.details[0].message })
        }

        const record = await AdminsInstance.findOne({ where: { id } })
        if (!record) {
            return res.status(400).json({
                Error: "Cannot find admin",
            })
        }

        const updatedAdmin = await record.update({
            ...req.body
        })

        return res.status(200).json({
            message: 'You have successfully updated admin',
            record: updatedAdmin
        })

    } catch (err) {
        return res.status(500).json({
            message: 'failed to update admin',
            route: '/update/:id'
        })
    }
}