import Joi from "joi";

export const createObservationsSchema = Joi.object().keys({
    price: Joi.string().required(),
    queue: Joi.string().required()
})

export const updateObservationsSchema = Joi.object().keys({
    price: Joi.string().required(),
    queue: Joi.string().required()
})

