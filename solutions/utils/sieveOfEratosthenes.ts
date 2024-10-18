/**
 * Generates a list of boolean values representing the primality of numbers
 * up to a given size using the Sieve of Eratosthenes algorithm.
 *
 * @param size - The upper limit (inclusive) for generating prime numbers.
 * @returns An array of boolean values where true indicates that the index is a prime number.
 */
export function sieveOfEratosthenes(size: number): boolean[] {
  const isPrime: boolean[] = new Array(size + 1).fill(true);
  isPrime[0] = false; // 0 is not a prime number
  isPrime[1] = false; // 1 is not a prime number

  // Mark all even numbers greater than 2 as not prime
  for (let i = 4; i <= size; i += 2) {
    isPrime[i] = false;
  }

  // Mark all non-prime numbers using the Sieve of Eratosthenes
  for (let number = 3; number * number <= size; number += 2) {
    if (isPrime[number]) {
      for (
        let multiplicand = number * number;
        multiplicand <= size;
        multiplicand += number
      ) {
        isPrime[multiplicand] = false;
      }
    }
  }

  return isPrime;
}
