const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('./logger');
const database = require('./database');
dotenv.config();

const routes = require('./routes');

const serve = express();

serve.set('view engine', 'ejs');
serve.set('views', __dirname + '/views');
serve.use(express.json());
serve.use(express.urlencoded({ extended: true }));
serve.use(express.static(path.join(__dirname, './static')));
serve.use('/css', express.static(path.join(__dirname, 'static/css')));

serve.use(cookieParser());

serve.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

serve.use(routes);

serve.listen(process.env.PORT, () => {
    database.connectDB();
    logger.info(`Friiverse started on port :${process.env.PORT}`);
});