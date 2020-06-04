const { check } = require('express-validator');

module.exports = [
    check('name').not().isEmpty().withMessage('O nome é obrigatório!'),
    check('email').not().isEmpty().isEmail().withMessage('O email é obrigatório!'),
];