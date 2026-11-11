import { Router } from 'express';
import { healthRouter } from './health.routes.js';

export const v1Router = Router();

// Mount system routes
v1Router.use('/', healthRouter);

// Module routes will be mounted here in subsequent phases:
// v1Router.use('/auth', authRouter);
// v1Router.use('/weddings', weddingRouter);
// v1Router.use('/public', publicRouter);
