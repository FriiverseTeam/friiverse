const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const logger = require('./logger');
const database = require('./database');
dotenv.config();

const routes = require('./routes');

const serve = express();

serve.set('view engine', 'ejs');
serve.set('views', __dirname + '/views');
serve.use('/static', express.static(__dirname + '/static'));
serve.use(express.json());
serve.use(express.urlencoded({ extended: true }));

serve.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

serve.use(routes);

serve.use((req, res) => {
    res.render(req.directory + '/404.ejs');
});

serve.listen(process.env.PORT, () => {
    database.connectDB();
    logger.info(`Friiverse started on port :${process.env.PORT}`);
});