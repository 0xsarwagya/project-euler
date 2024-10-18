/**
 * Generates a list of prime numbers up to a specified size using the Sieve of Eratosthenes.
 * @param size - The upper limit to find primes.
 * @returns A boolean array indicating whether each number is prime.
 */
function sieveOfEratosthenes(size: number): boolean[] {
  const isPrime: boolean[] = new Array(size + 1).fill(true);
  isPrime[0] = false; // 0 is not prime
  isPrime[1] = false; // 1 is not prime

  for (let i = 4; i <= size; i += 2) {
    isPrime[i] = false; // Mark all even numbers greater than 2 as non-prime
  }

  for (let number = 3; number * number <= size; number += 2) {
    if (isPrime[number]) {
      for (
        let multiplicand = number * number;
        multiplicand <= size;
        multiplicand += number
      ) {
        isPrime[multiplicand] = false; // Mark multiples of the prime as non-prime
      }
    }
  }
  return isPrime;
}

/**
 * Calculates the sum of all prime numbers up to a given limit.
 * @param limit - The upper limit for summing primes.
 * @returns The sum of all prime numbers up to the limit.
 */
function sumOfPrimes(limit: number): number {
  let sum = 0;
  const isPrime = sieveOfEratosthenes(limit);

  for (let i = 0; i < isPrime.length; i++) {
    if (isPrime[i]) {
      sum += i; // Add prime numbers to the sum
    }
  }
  return sum;
}

// Main execution
const biggestArraySize = 2 * Math.pow(10, 6);
const sum = sumOfPrimes(biggestArraySize);
console.log(sum);
