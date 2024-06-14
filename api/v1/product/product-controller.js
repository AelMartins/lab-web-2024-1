const business = require('./product-business');

const getProducts = async (request, h) => {
    const { query } = request;

    try {
        const result = await business.list(query);
        return h.response(result).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ message: 'Erro ao listar produtos' }).code(500);
    }
}

const create = async (request, h) => {
    const { payload } = request;

    try {
        payload.authorId = payload.author.id;
        const result = await business.create(payload);
        return h.response(result).code(201);
    } catch (error) {
        console.error(error);
        return h.response({ message: 'Erro ao criar produto' }).code(500);
    }
}

const findById = async (request, h) => {
    const productId = request.params.id;

    try {
        const result = await business.findById(productId);
        if (result) {
            return h.response(result).code(200);
        } else {
            return h.response({ message: 'Produto não encontrado' }).code(404);
        }
    } catch (error) {
        console.error(error);
        return h.response({ message: 'Erro ao buscar produto' }).code(500);
    }
}

const deleteById = async (request, h) => {
    const productId = request.params.id;

    try {
        const result = await business.deleteById(productId);
        if (result) {
            return h.response({}).code(204);
        } else {
            return h.response({ message: 'Produto não encontrado' }).code(404);
        }
    } catch (error) {
        console.error(error);
        return h.response({ message: 'Erro ao deletar produto' }).code(500);
    }
}

module.exports = {
    getProducts,
    create,
    findById,
    deleteById
};