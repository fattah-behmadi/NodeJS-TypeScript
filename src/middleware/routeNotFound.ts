import { Request, Response, NextFunction } from 'express';

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
    const error = new Error('Route Not found');
    logging.warning(error);

    res.status(404).send({ error: error.message })
}