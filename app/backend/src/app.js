const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/peoples', router.peopleRouter);

module.exports = app;
