/**
 * Calculates the sum of all numbers below a given limit
 * that are divisible by either 3 or 5.
 *
 * @param limit - The upper limit (exclusive) up to which numbers are checked.
 * @returns The sum of numbers divisible by 3 or 5 below the limit.
 */
export function sumOfMultiplesOf3Or5(limit: number): number {
  let sum: number = 0;

  // Loop through all numbers from 3 to the given limit (exclusive)
  for (let num = 3; num < limit; num++) {
    // If the number is divisible by 3 or 5, add it to the sum
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }

  return sum;
}