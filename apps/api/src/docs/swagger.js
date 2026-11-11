import swaggerUi from 'swagger-ui-express';
import { Router } from 'express';

export const swaggerRouter = Router();

const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Wedora API',
    version: '1.0.0',
    description: 'REST API documentation for Wedora - Collaborative Indian Wedding Planning Platform',
  },
  servers: [
    {
      url: '/api/v1',
      description: 'API v1 root',
    },
  ],
  paths: {
    '/health': {
      get: {
        summary: 'System health check',
        responses: {
          200: {
            description: 'Wedora API is operational.',
          },
        },
      },
    },
  },
};

swaggerRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
