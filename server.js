const Hapi = require("@hapi/hapi");
const routes = require('./routes');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const { version } = require('./package.json');

const server = Hapi.server({
    port: 5000,
    host: "0.0.0.0"
});

const swaggerPlugin = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            documentationPath: '/docs',
            schemes: ['http', 'https'],
            info: {
                title: 'API de Cadastro de Livros e Autores',
                version: version,
                description: 'Esta API permite cadastrar, atualizar, listar e deletar livros e autores.',
            }
        }
    }
];

const init = async () => {
    await server.register([
        ...swaggerPlugin,
        {
            plugin: routes,
            options: {
                routesBaseDir: './api'
            }
        }
    ]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

module.exports = { server };