import Joi from "joi";

export const adminSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
})
export const adminLoginSchema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
})

export const updateAdminSchema = Joi.object().keys({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string()
})