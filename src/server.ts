import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import './config/logging';
import 'reflect-metadata'

import { mongo, server } from './config/config';
import { corsHandler } from './middleware/corsHandler';
import { loggingHandler } from './middleware/loggingHandler';
import { routeNotFound } from './middleware/routeNotFound';
import { errorHandler } from './middleware/errorHandler';
import MainController from './controllers/main';
import { defineRoutes } from './modules/routes';
import { UserController } from './controllers/user';

export const application = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = async () => {
    logging.log('----------------------------------------');
    logging.log('Initializing API');
    logging.log('----------------------------------------');
    application.use(express.urlencoded({ extended: true }));
    application.use(express.json());

    logging.log('----------------------------------------');
    logging.log('Connect to Mongo');
    logging.log('----------------------------------------');
    try {
        const connection = await mongoose.connect(mongo.MONGO_CONNECTION, mongo.MONGO_OPTIONS);
        logging.log('----------------------------------------');
        logging.log('Connected to Mongo: ', connection.version);
        logging.log('----------------------------------------');
    } catch (error) {
        logging.log('----------------------------------------');
        logging.error(error);
        logging.error('Unable to connect to Mongo');
        logging.log('----------------------------------------');
    }

    logging.log('----------------------------------------');
    logging.log('Error Handling');
    logging.log('----------------------------------------');
    application.use(errorHandler);

    logging.log('----------------------------------------');
    logging.log('Logging & Configuration');
    logging.log('----------------------------------------');
    application.use(corsHandler);
    application.use(loggingHandler);

    logging.log('----------------------------------------');
    logging.log('Define Controller Routing');
    logging.log('----------------------------------------');
    defineRoutes([MainController, UserController], application);

    // application.get('/main', (req, res, next) => {
    //     res.status(200).json({ hello: 'world!' })
    // });

    logging.log('----------------------------------------');
    logging.log('Define Routing Error');
    logging.log('----------------------------------------');
    application.use(routeNotFound);

    logging.log('----------------------------------------');
    logging.log('Starting Server');
    logging.log('----------------------------------------');

    httpServer = http.createServer(application);

    httpServer.listen(server.SERVER_PORT, () => {
        logging.log('----------------------------------------');
        logging.log(`Server started on ${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`);
        logging.log('----------------------------------------');
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();