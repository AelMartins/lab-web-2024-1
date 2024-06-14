const productModel = require('./product-model');
const { Op } = require('sequelize');
const Author = require('../author/author-model');

const save = async (product) => {
    return productModel.create(product);
}

const findAll = async (filter) => {
    const { title, authorName } = filter;

    return productModel.findAll({
        include: [{
            model: Author,
            required: true, // inner join
            where: {
                ...(authorName) ? { name: { [Op.iLike]: `${authorName}%` } } : {}
            }
        }],
        where: {
            ...(title) ? { title: { [Op.iLike]: `${title}%` } } : {}
        }
    });
}

const findById = async (id) => {
    return productModel.findOne({
        include: [{
            model: Author,
            required: false // left join
        }],
        where: {
            id: id
        }
    });
}

const deleteById = async (id) => {
    return productModel.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    save,
    findAll,
    findById,
    deleteById
};