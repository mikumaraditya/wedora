import { ERROR_CODES, WEDDING_LIFECYCLE } from '@wedora/shared';
import { sendError } from '../utils/response.js';

/**
 * Enforces wedding lifecycle write policies.
 * Blocks operational mutations when COMPLETED or ARCHIVED.
 */
export function requireActiveLifecycle(req, res, next) {
  const currentLifecycle = req.wedding?.lifecycle || WEDDING_LIFECYCLE.ACTIVE;

  if (currentLifecycle !== WEDDING_LIFECYCLE.ACTIVE) {
    return sendError(
      res,
      ERROR_CODES.WEDDING_NOT_ACTIVE,
      `Operational modifications are not permitted while wedding is ${currentLifecycle}.`,
      403
    );
  }

  return next();
}
