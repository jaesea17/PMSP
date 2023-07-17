import Joi from "joi";

export const createPetrolSchema = Joi.object().keys({
    price: Joi.number().required(),
    isAvailable: Joi.boolean(),
    commodity: Joi.string().required(),
    stationId: Joi.string().required()
})

export const updatePetrolSchema = Joi.object().keys({
    price: Joi.number(),
    isAvailable: Joi.boolean(),
    commodity: Joi.string(),
    stationId: Joi.string()
})
