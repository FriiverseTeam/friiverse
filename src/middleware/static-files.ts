import { Request, Response, NextFunction } from 'express';

export async function staticFiles(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	const { path, subdomains } = req;

	const isStaticPath =
		isStartOfPath(path, '/css/') ||
		isStartOfPath(path, '/js/') ||
		path === '/favicon.ico'

	if (isStaticPath) {
		if (subdomains.includes('juxt')) {
			req.directory = 'web';
		} else {
			req.directory = subdomains[1];
		}

		return next();
	}
	if (path === '/') {
		return res.redirect('/titles/show');
	}
	res.sendStatus(404);
	return;
}

function isStartOfPath(path: string, value: string): boolean {
	return path.startsWith(value);
}