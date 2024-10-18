/**
 * Checks if a number is a palindrome.
 *
 * A palindrome is a number that reads the same forwards and backwards.
 *
 * @param number - The number to check for palindromic properties.
 * @returns True if the number is a palindrome, false otherwise.
 */
function isPalindrome(number: number): boolean {
  let originalNumber = number;
  let reversedNumber = 0;

  while (originalNumber !== 0) {
    reversedNumber = reversedNumber * 10 + (originalNumber % 10); // Build the reversed number
    originalNumber = Math.floor(originalNumber / 10); // Remove the last digit from the original number
  }

  return number === reversedNumber; // Check if the original number and the reversed number are the same
}

/**
 * Finds the largest palindrome made from the product of two 3-digit numbers.
 *
 * @returns The largest palindrome product of two 3-digit numbers.
 */
function largestPalindromeProduct(): number {
  const firstMultiplicand = 999;
  const secondMultiplicand = 999;
  let largestPalindrome = 0;

  // Loop through all combinations of 3-digit numbers
  for (let i = firstMultiplicand; i >= 100; i--) {
    for (let j = secondMultiplicand; j >= 100; j--) {
      const product = i * j; // Calculate the product
      if (isPalindrome(product)) {
        console.log(`Found palindrome: ${product}`);
        largestPalindrome = Math.max(largestPalindrome, product); // Update the largest palindrome found
      }
    }
  }

  return largestPalindrome; // Return the largest palindrome found
}
