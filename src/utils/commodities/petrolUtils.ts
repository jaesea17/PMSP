import Joi from "joi";

export const createPetrolSchema = Joi.object().keys({
    name: Joi.number().required()
})

export const updatePetrolSchema = Joi.object().keys({
    name: Joi.number()
})
