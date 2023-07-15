import Joi from "joi";

export const registerUserSchema = Joi.object().keys({
    userName: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required()
})

export const loginUserSchema = Joi.object().keys({
    userName: Joi.string().required(),
    password: Joi.string().required(),
})

export const updateUsersSchema = Joi.object().keys({
    userName: Joi.string(),
    password: Joi.string(),
    email: Joi.string()
})