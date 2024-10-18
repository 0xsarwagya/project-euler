import { sieveOfEratosthenes } from "./utils/sieveOfEratosthenes";

/**
 * Finds the largest prime factor of a given long integer.
 *
 * @param longInteger - The number to find the largest prime factor of.
 * @returns The largest prime factor of the given number.
 */
function largestPrimeFactor(longInteger: number): {
  firstPrimeFactor: number;
  otherFactor: number;
} {
  if (longInteger < 2) {
    throw new Error("Input must be greater than or equal to 2.");
  }

  const integralSqrtOfLongInteger = Math.ceil(Math.sqrt(longInteger));
  const primes = sieveOfEratosthenes(integralSqrtOfLongInteger);

  let firstPrimeFactor = 1;
  let otherFactor = 1;

  // Iterate backward through the primes array
  for (let i = primes.length - 1; i >= 0; i--) {
    if (primes[i] && longInteger % i === 0) {
      firstPrimeFactor = i; // Found the largest prime factor
      otherFactor = longInteger / i; // Calculate the corresponding factor
      console.log(
        `Found largest prime factor: ${firstPrimeFactor}, other factor: ${otherFactor}`
      );
      break;
    }
  }

  return { firstPrimeFactor, otherFactor };
}
