import { ERROR_CODES } from '@wedora/shared';
import { sendError } from '../utils/response.js';
import { logger } from '../utils/logger.js';
import { env } from '../config/env.js';

export function errorHandler(err, req, res, next) {
  // If headers already sent, delegate to default Express handler
  if (res.headersSent) {
    return next(err);
  }

  const requestId = req.id || req.headers['x-request-id'];

  // Zod validation error
  if (err.name === 'ZodError') {
    const details = err.errors.map(e => ({
      field: e.path.join('.'),
      message: e.message,
    }));
    return sendError(
      res,
      ERROR_CODES.VALIDATION_ERROR,
      'Request validation failed.',
      422,
      details,
      requestId
    );
  }

  // Syntax error in JSON body
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return sendError(res, 'MALFORMED_JSON', 'Malformed JSON payload provided.', 400, [], requestId);
  }

  // Custom application error with code and statusCode
  if (err.isAppError) {
    return sendError(
      res,
      err.code || 'APPLICATION_ERROR',
      err.message,
      err.statusCode || 400,
      err.details || [],
      requestId
    );
  }

  // Log unhandled server error
  logger.error(
    {
      err: {
        message: err.message,
        stack: env.NODE_ENV !== 'production' ? err.stack : undefined,
      },
      requestId,
      method: req.method,
      url: req.originalUrl,
    },
    'Unhandled server exception occurred.'
  );

  return sendError(
    res,
    ERROR_CODES.INTERNAL_SERVER_ERROR,
    'An unexpected error occurred. Please try again later.',
    500,
    [],
    requestId
  );
}
