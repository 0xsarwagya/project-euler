import { sieveOfEratosthenes } from "./utils/sieveOfEratosthenes";

/**
 * Calculates the smallest number that is evenly divisible by all numbers
 * from 1 to a given limit.
 *
 * @param limit - The upper limit for checking divisibility.
 * @returns The smallest number that is evenly divisible by all numbers from 1 to limit.
 */
function smallestMultiple(limit: number): number {
  const primes = sieveOfEratosthenes(limit);
  let smallestFactor = 1;

  // Iterate over the primes in reverse order
  for (let i = primes.length - 1; i >= 0; i--) {
    if (primes[i]) {
      // Check for the highest power of the prime number that is <= limit
      const highestPower = Math.floor(Math.log(limit) / Math.log(i));
      console.log(`${i} ${highestPower}`); // Log the prime and its highest power
      smallestFactor *= Math.pow(i, highestPower); // Multiply by the highest power
    }
  }

  return smallestFactor; // Return the smallest factor
}
