/**
 * Converts integer paise to formatted Indian Rupees string.
 * @param {number} paise - Amount in integer paise.
 * @returns {string} Formatted INR currency string (e.g., "₹80,000").
 */
export function formatPaiseToRupees(paise) {
  if (typeof paise !== 'number' || isNaN(paise)) return '₹0';
  const rupees = Math.floor(paise) / 100;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: paise % 100 === 0 ? 0 : 2,
  }).format(rupees);
}

/**
 * Converts rupees float/number to integer paise.
 * @param {number} rupees - Amount in rupees.
 * @returns {number} Integer paise.
 */
export function rupeesToPaise(rupees) {
  if (typeof rupees !== 'number' || isNaN(rupees)) return 0;
  return Math.round(rupees * 100);
}
