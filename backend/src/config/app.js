const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const PersonRouter = require('../routes/person.router');
const DrawRouter = require('../routes/draw.router');
const app = express();
const mongoose = require('mongoose');

app.set('port', process.env.PORT || 7000);
app.use(cors);

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/draw', DrawRouter);
app.use('/api/person', PersonRouter);

module.exports = app;
