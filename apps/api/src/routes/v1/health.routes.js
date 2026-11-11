import { Router } from 'express';
import { sendSuccess } from '../../utils/response.js';
import { env } from '../../config/env.js';

export const healthRouter = Router();

healthRouter.get('/health', (req, res) => {
  return sendSuccess(res, 'Wedora API is operational.', {
    environment: env.NODE_ENV,
    uptime: Number(process.uptime().toFixed(2)),
    timestamp: new Date().toISOString(),
  });
});
