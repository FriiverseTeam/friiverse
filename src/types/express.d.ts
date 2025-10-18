import 'express';

declare global {
	namespace Express {
		interface Request {
			directory?: string;
			isWrite?: boolean;
			timestamp?: number;
		}
	}
}