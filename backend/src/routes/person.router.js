const express = require('express');
const router = express.Router();
const controller = require('../controllers/person.controller');

const erroMiddleware = require('../middleware/error.middleware');
const personValidation = require('../validations/person.validation');

let _ctrl = new controller();

router.get('/',
    _ctrl.get,
);
router.get('/:id',
    _ctrl.getById
);
router.post('/',
    personValidation,
    erroMiddleware,
    _ctrl.post
);
router.put('/:id',
    personValidation,
    erroMiddleware,
    _ctrl.put
);
router.delete('/:id',
    _ctrl.delete
);

module.exports = router;