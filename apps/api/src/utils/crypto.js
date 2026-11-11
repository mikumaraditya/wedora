import crypto from 'node:crypto';

/**
 * Generates a cryptographically secure random token string.
 * @param {number} [bytes=32]
 * @returns {string} Hex encoded token
 */
export function generateRandomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString('hex');
}

/**
 * Creates SHA-256 hash of a bearer token for safe database persistence.
 * @param {string} token
 * @returns {string} Hex encoded SHA-256 hash
 */
export function hashToken(token) {
  if (!token) return '';
  return crypto.createHash('sha256').update(token).digest('hex');
}
