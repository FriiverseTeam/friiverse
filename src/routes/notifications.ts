import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/my_news', async (req: Request, res: Response) => {
    res.render(req.directory + '/notifications.ejs');
});

export default routes;