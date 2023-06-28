import Joi from "joi";

export const createStationsSchema = Joi.object().keys({
    name: Joi.string().required()
})

export const updateStationsSchema = Joi.object().keys({
    name: Joi.string()
})

