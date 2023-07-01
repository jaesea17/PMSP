import Joi from "joi";

export const userSchema = Joi.object().keys({
    userName: Joi.string().required(),
    password: Joi.string().required()
})

export const updateUsersSchema = Joi.object().keys({
    userName: Joi.string(),
    password: Joi.string()
})