const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('./logger');
const database = require('./database');
const { directoryResolver } = require('./middleware/directory-resolver');
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

serve.use(directoryResolver);

serve.use(async (req, res, next) => {
  try {
    const result = await database.pool.query('SELECT maintenance, ended FROM status WHERE id = 1');
    const status = result.rows[0];

    if (status.ended) {
      return res.render(req.directory + '/ended.ejs');
    } else if (status.maintenance) {
      return res.render(req.directory + '/maintenance.ejs');
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

serve.use(routes);

serve.listen(process.env.PORT, () => {
    database.connectDB();
    logger.info(`Friiverse started on port :${process.env.PORT}`);
});