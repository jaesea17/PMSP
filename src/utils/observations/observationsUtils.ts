import Joi from "joi";

export const createObservationsSchema = Joi.object().keys({
    price: Joi.number().required(),
    queue: Joi.string(),
    likes: Joi.number(),
    commodityId: Joi.string().required()
})

export const updateObservationsSchema = Joi.object().keys({
    price: Joi.number(),
    queue: Joi.string(),
    likes: Joi.number(),
    commodityId: Joi.string()
})

