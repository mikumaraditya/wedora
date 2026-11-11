import rateLimit from 'express-rate-limit';
import { sendError } from '../utils/response.js';

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    return sendError(res, 'RATE_LIMIT_EXCEEDED', 'Too many requests. Please try again later.', 429);
  },
});

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    return sendError(
      res,
      'AUTH_RATE_LIMIT_EXCEEDED',
      'Too many authentication attempts. Please wait 15 minutes.',
      429
    );
  },
});

export const publicTokenLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    return sendError(
      res,
      'TOKEN_RATE_LIMIT_EXCEEDED',
      'Too many requests for this link. Please slow down.',
      429
    );
  },
});
