const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Author = require('../author/author-model');

const Product = database.sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'codigo'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'titulo'
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'autor_codigo',
        references: {
            model: Author,
            key: 'id'
        }
    },
    publishedDate: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'data_publicacao'
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'isbn'
    },
    summary: {
        type: Sequelize.TEXT,
        allowNull: true,
        field: 'resumo'
    }
}, {
    timestamps: false,
    tableName: 'tb_produto'
});

module.exports = Product;