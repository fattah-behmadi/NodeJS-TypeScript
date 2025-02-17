import { Request, Response, NextFunction } from 'express';
import { Controller } from '../decorators/controller';
import { Route } from '../decorators/route';
import Joi from 'joi';
import { Validate } from '../decorators/validate';

type validation = {
    name: string;
    email?: string;
};

const postHealthCheckValidation = Joi.object<validation>({
    name: Joi.string().required(),
    email: Joi.string().email(),
});

@Controller()
export class UserController {
    @Route('get', '/user')
    getHealthCheck(req: Request, res: Response, next: NextFunction) {
        logging.info('Get User name called successfully!');
        return res.status(200).json({ name: 'Fattah' });
    }

    @Route('post', '/user')
    @Validate(postHealthCheckValidation)
    postHealthCheck(req: Request, res: Response, next: NextFunction) {
        logging.info('User called successfully!');
        return res.status(200).json({ ...req.body });
    }
}