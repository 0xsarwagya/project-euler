/**
 * Calculates the sum of even Fibonacci numbers up to a given limit.
 *
 * @param limit - The upper limit for the Fibonacci sequence.
 * @returns The sum of even Fibonacci numbers that do not exceed the limit.
 */
export function sumOfEvenFibonacci(limit: number): number {
  // Using long integer types in C++ is analogous to number in TypeScript, as JS handles large numbers well.
  let sum_of_fibonacci: number = 2; // Start with 2 because it's the first even Fibonacci number
  let f_n: number = 1; // The nth Fibonacci number (initial value)
  let f_nplus1: number = 2; // The (n+1)th Fibonacci number (initial value)
  let f_nplus2: number = 0; // Variable to store the (n+2)th Fibonacci number

  // Continue calculating Fibonacci numbers until the next term exceeds the limit
  while (f_nplus1 + f_n <= limit) {
    f_nplus2 = f_nplus1 + f_n;

    // If the Fibonacci number is even, add it to the sum
    if ((f_nplus2 & 1) === 0) {
      sum_of_fibonacci += f_nplus2;
    }

    // Shift terms: move to the next Fibonacci numbers in the sequence
    f_n = f_nplus1;
    f_nplus1 = f_nplus2;
  }

  return sum_of_fibonacci;
}