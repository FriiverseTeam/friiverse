import express from 'express';
import routes from './routes';
import { logger } from './logger';

const port = 3000;

const serve = express();

serve.set('view engine', 'ejs');
serve.set('views', __dirname + '/views');
serve.use(express.json());

serve.use(routes);

serve.listen(port, () => {
  logger.success(`Friiverse Server running at http://localhost:${port}`);
});