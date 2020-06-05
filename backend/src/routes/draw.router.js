const express = require('express');
const router = express.Router();
const controller = require('../controllers/draw.controller');

let _ctrl = new controller();

router.post('/',
    _ctrl.post
);

module.exports = router;