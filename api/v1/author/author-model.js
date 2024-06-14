const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'codigo'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    biography: {
        type: Sequelize.TEXT,
        allowNull: true,
        field: 'biografia'
    },
    birthDate: {
        type: Sequelize.DATE,
        allowNull: true,
        field: 'data_nascimento'
    }
}, {
    timestamps: false,
    tableName: 'tb_autor'
});

module.exports = Author;
