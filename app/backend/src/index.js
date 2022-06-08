const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());

app.use('/peoples', router);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});
