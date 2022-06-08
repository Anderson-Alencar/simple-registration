const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();
app.use(bodyParser.json());

app.use('/peoples', router);

app.listen(3001, () => console.log('ouvindo porta 3001!'));
