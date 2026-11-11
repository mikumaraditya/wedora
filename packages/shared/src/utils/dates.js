export const DEFAULT_TIMEZONE = 'Asia/Kolkata';

/**
 * Validates whether an ISO string represents a valid ISO 8601 instant.
 * @param {string} isoString
 * @returns {boolean}
 */
export function isValidIsoDateTime(isoString) {
  if (typeof isoString !== 'string') return false;
  const d = new Date(isoString);
  return !isNaN(d.getTime()) && (isoString.includes('T') || isoString.includes('Z'));
}
