const express = require('express');
const dotenv = require('dotenv');
const logger = require('./logger');
dotenv.config();

const routes = require('./routes');

const serve = express();

serve.set('view engine', 'ejs');
serve.set('views', __dirname + '/views');
serve.use('/static', express.static(__dirname + '/static'));
serve.use(express.json());

serve.use(routes);

serve.listen(process.env.HTTP_PORT, () => {
    logger.info(`HEWWO!`);
});