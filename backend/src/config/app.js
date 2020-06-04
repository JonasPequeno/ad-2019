const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(cors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
