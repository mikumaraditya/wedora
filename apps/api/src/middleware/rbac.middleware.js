import { ERROR_CODES } from '@wedora/shared';
import { sendError } from '../utils/response.js';

/**
 * Role-Based Access Control middleware.
 * @param {string[]} allowedRoles
 */
export function requireRole(allowedRoles = []) {
  return (req, res, next) => {
    const userRole = req.membership?.role || req.user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      return sendError(
        res,
        ERROR_CODES.ROLE_FORBIDDEN,
        'You do not have permission to perform this action.',
        403
      );
    }

    return next();
  };
}
