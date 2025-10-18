import express from 'express';
import routes from './routes';
import { logger } from './logger';
import dotenv from 'dotenv';

dotenv.config();

const serve = express();

serve.set('view engine', 'ejs');
serve.set('views', __dirname + '/views');
serve.use(express.json());
serve.use('/static', express.static(__dirname + '/static'));

serve.use(routes);

serve.use((req, res) => {
  res.json({
    message: 'Not Found',
    code: 404
  })
});

serve.listen(process.env.HTTP_PORT, () => {
  logger.success(`Friiverse Server is running on port ${process.env.HTTP_PORT}`);
});