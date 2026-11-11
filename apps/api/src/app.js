import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { env } from './config/env.js';
import { API_PREFIX } from './config/constants.js';
import { requestLogger } from './middleware/requestLogger.js';
import { globalLimiter } from './middleware/rateLimiter.js';
import { errorHandler } from './middleware/error.middleware.js';
import { v1Router } from './routes/v1/index.js';
import { swaggerRouter } from './docs/swagger.js';
import { sendError } from './utils/response.js';
import { ERROR_CODES } from '@wedora/shared';

export function createApp() {
  const app = express();

  // Security Headers
  app.use(helmet());

  // CORS Configuration
  app.use(
    cors({
      origin: env.CLIENT_ORIGIN,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Idempotency-Key', 'x-request-id'],
    })
  );

  // Rate Limiting & Logging
  app.use(globalLimiter);
  app.use(requestLogger);

  // Request Parsers
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));
  app.use(cookieParser());

  // API Documentation & Routes
  app.use(API_PREFIX, swaggerRouter);
  app.use(API_PREFIX, v1Router);

  // 404 Route Not Found Handler
  app.use((req, res) => {
    return sendError(
      res,
      ERROR_CODES.NOT_FOUND,
      `Cannot ${req.method} ${req.originalUrl} - Endpoint not found.`,
      404
    );
  });

  // Centralized Error Handler Middleware
  app.use(errorHandler);

  return app;
}
