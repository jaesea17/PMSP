import Joi from "joi";

export const createPetrolSchema = Joi.object().keys({
    price: Joi.number().required(),
    isAvailable: Joi.boolean().required(),
    likes: Joi.number().required(),
    stationId: Joi.string().required()
})

export const updatePetrolSchema = Joi.object().keys({
    price: Joi.number(),
    isAvailable: Joi.boolean(),
    likes: Joi.number(),
    stationId: Joi.string()
})
