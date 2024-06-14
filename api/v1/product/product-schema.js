const Joi = require("joi");

const createBooksSchema = {
    payload: Joi.object({
        title: Joi
            .string()
            .min(3)
            .max(60)
            .required(),
        authorId: Joi
            .string()
            .required(),
        publishedDate: Joi
            .date()
            .optional(),
        isbn: Joi
            .string()
            .optional(),
        summary: Joi
            .string()
            .optional()
    })
};

const getById = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};

const deleteById = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};

const getBooks = {
    query: Joi.object({
        title: Joi
            .string()
            .min(1)
            .optional(),
        'author.name': Joi
            .string()
            .min(1)
            .optional()
    })
};

module.exports = {
    createBooksSchema, 
    getById,
    getBooks,
    deleteById
};