import { sieveOfEratosthenes } from "./utils/sieveOfEratosthenes";

/**
 * Finds the 10,001st prime number.
 *
 * @returns The 10,001st prime number.
 */
function find10001stPrime(): number {
  const biggestArraySize = Math.pow(10, 6);
  const isPrime = sieveOfEratosthenes(biggestArraySize);
  const primes: number[] = [];

  // Collecting prime numbers
  for (let i = 0; i < isPrime.length; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes[10000]; // Return the 10,001st prime (index 10000)
}