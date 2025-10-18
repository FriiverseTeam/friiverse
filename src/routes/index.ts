import { Router } from 'express';
const subdomain = require('express-subdomain');
import { logger } from '../logger';
import { directoryResolver } from '../middleware/directory-resolver';

import show from './show';

const routes = Router();

const consoleRoutes = Router();

logger.info('[FRIIVERSE] Middleware Initialized!');
routes.use(directoryResolver);

logger.info('[FRIIVERSE] Wii U Miiverse Initialized!');
routes.use(subdomain('portal', consoleRoutes));

logger.info('[FRIIVERSE] 3DS Miiverse Initialized!');
routes.use(subdomain('n3ds', consoleRoutes));

consoleRoutes.use('/titles/show', show);

export default routes;