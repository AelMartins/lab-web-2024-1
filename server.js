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

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];

plugins.push(...swaggerPlugin);

module.exports = { server, plugins };