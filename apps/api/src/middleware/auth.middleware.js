import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { ERROR_CODES } from '@wedora/shared';
import { sendError } from '../utils/response.js';

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(
      res,
      ERROR_CODES.UNAUTHORIZED,
      'Authentication token missing or invalid.',
      401
    );
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, env.JWT_ACCESS_SECRET);
    req.user = decoded;
    return next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return sendError(res, ERROR_CODES.TOKEN_INVALID_OR_EXPIRED, 'Access token has expired.', 401);
    }
    return sendError(res, ERROR_CODES.UNAUTHORIZED, 'Invalid authentication token.', 401);
  }
}
