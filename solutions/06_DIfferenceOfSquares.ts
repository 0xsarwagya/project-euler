/**
 * Calculates the difference between the square of the sum of the first `limit` natural numbers
 * and the sum of the squares of the first `limit` natural numbers.
 *
 * @param limit - The upper limit for the calculation (inclusive).
 * @returns The difference between the square of the sum and the sum of the squares.
 */
function calculateDifference(limit: number): number {
  // Calculate the sum of the squares: 1^2 + 2^2 + ... + limit^2
  const sumOfSquares = (limit * (limit + 1) * (2 * limit + 1)) / 6;

  // Calculate the square of the sum: (1 + 2 + ... + limit)^2
  const squareOfSums = Math.pow((limit * (limit + 1)) / 2, 2);

  // Return the difference
  return squareOfSums - sumOfSquares;
}
