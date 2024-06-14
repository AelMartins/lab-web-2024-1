const { getProducts, create, findById, deleteById } = require('./product-controller');
const schema = require('./product-schema');

const plugin = {
    name: 'book-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    description: 'Lista todos os livros',
                    handler: getProducts,
                    validate: schema.getBooks
                }
            },
            {
                method: "GET",
                path: "/v1/books/{id}",
                options: {
                    tags: ['api'],
                    description: 'Obtém os detalhes de um livro específico',
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    description: 'Adiciona um novo livro',
                    handler: create,
                    validate: schema.createBooksSchema
                }
            },
            {
                method: "DELETE",
                path: "/v1/books/{id}",
                options: {
                    tags: ['api'],
                    description: 'Remove um livro',
                    handler: deleteById,
                    validate: schema.deleteById
                }
            },
        ])
    }
};

module.exports = plugin;