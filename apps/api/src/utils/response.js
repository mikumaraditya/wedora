/**
 * Builds standard API success response.
 * @param {import('express').Response} res
 * @param {string} message
 * @param {any} data
 * @param {number} [statusCode=200]
 * @param {object} [pagination]
 */
export function sendSuccess(res, message, data = {}, statusCode = 200, pagination = null) {
  const payload = {
    success: true,
    message,
    data,
  };

  if (pagination) {
    payload.pagination = pagination;
  }

  return res.status(statusCode).json(payload);
}

/**
 * Builds standard API error response.
 * @param {import('express').Response} res
 * @param {string} code - Stable error code
 * @param {string} message - User-safe error description
 * @param {number} [statusCode=500]
 * @param {Array} [details=[]]
 * @param {string} [requestId]
 */
export function sendError(
  res,
  code,
  message,
  statusCode = 500,
  details = [],
  requestId = undefined
) {
  return res.status(statusCode).json({
    success: false,
    error: {
      code,
      message,
      details,
      requestId: requestId || res.req?.id || undefined,
    },
  });
}
