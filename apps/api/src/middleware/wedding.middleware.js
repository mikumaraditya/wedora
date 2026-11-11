import { ERROR_CODES } from '@wedora/shared';
import { sendError } from '../utils/response.js';

/**
 * Tenant scoping middleware that validates wedding membership.
 * Note: Database lookup will be bound once Mongoose models are connected.
 */
export function requireWeddingMembership(req, res, next) {
  const { weddingId } = req.params;

  if (!weddingId) {
    return sendError(res, ERROR_CODES.VALIDATION_ERROR, 'Wedding identifier is required.', 400);
  }

  // Attached to request context for downstream services/repositories
  req.weddingId = weddingId;
  return next();
}
