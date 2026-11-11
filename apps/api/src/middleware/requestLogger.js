import { pinoHttp } from 'pino-http';
import crypto from 'node:crypto';
import { logger } from '../utils/logger.js';

export const requestLogger = pinoHttp({
  logger,
  genReqId: req => req.headers['x-request-id'] || `req_${crypto.randomBytes(8).toString('hex')}`,
  customLogLevel: (req, res, err) => {
    if (res.statusCode >= 500 || err) return 'error';
    if (res.statusCode >= 400) return 'warn';
    return 'info';
  },
  autoLogging: {
    ignore: req => req.url.includes('/health'),
  },
});
