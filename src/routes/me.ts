import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/me', async (req: Request, res: Response) => {
    res.render(req.directory + '/me.ejs');
});

export default routes;