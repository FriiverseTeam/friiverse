import { Request, Response, NextFunction } from 'express';

export async function versionResolver(
	req: Request,
	_res: Response,
	next: NextFunction
): Promise<void> {
	req.timestamp = Date.now();
	req.directory = getDirectory(req);
	req.isWrite = isWriteMethod(req.method);
	next();
}

function getDirectory(req: Request): string {
	if (req.subdomains.some((sub) => sub.includes('portal'))) {
		return 'portal';
	}
	return 'ctr';
}

function isWriteMethod(method: string): boolean {
	const writeMethods = new Set(['POST', 'PUT', 'DELETE']);
	return writeMethods.has(method.toUpperCase());
}