/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAYS = 40;
  const LONG_TERN = 7;
  const SHORT_TERN = 3;
  const LONG_TERN_DISCOUNT = 50;
  const SHORT_TERN_DISCOUNT = 20;

  const basePrice = days * PRICE_PER_DAYS;

  if (days >= LONG_TERN) {
    return basePrice - LONG_TERN_DISCOUNT;
  }

  if (days >= SHORT_TERN) {
    return basePrice - SHORT_TERN_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
