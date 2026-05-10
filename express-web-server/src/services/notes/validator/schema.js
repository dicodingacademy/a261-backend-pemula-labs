import joi from 'joi';

export const notePayloadSchema = joi.object({
    title: joi.string().required(),
    body: joi.string().required(),
    tags: joi.array().items(joi.string()).required(),
});

export const noteQuerySchema = joi.object({
    title: joi.string().empty(),
})
