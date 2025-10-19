import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', async (req: Request, res: Response) => {
    res.render(req.directory + '/communities.ejs');
});

routes.get('/all', async (req: Request, res: Response) => {
    res.render(req.directory + '/all_communities.ejs');
});

export default routes;