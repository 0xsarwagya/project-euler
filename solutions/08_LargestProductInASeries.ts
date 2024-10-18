const CHUNK_SIZE = 13;

/**
 * Checks if a substring contains a zero.
 *
 * @param substring - The substring to check.
 * @returns True if the substring contains a zero, otherwise false.
 */
function substringHasAZero(substring: string): boolean {
  return substring.includes("0");
}

/**
 * Calculates the product of the digits in a substring.
 *
 * @param substring - The substring containing digits.
 * @returns The product of the digits in the substring.
 */
function productOfNumbers(substring: string): number {
  return substring
    .split("")
    .reduce((product, char) => product * Number(char), 1);
}

/**
 * Finds the largest product of adjacent digits in a large number.
 *
 * @param bigNumber - The large number as a string.
 * @param chunkSize - The number of adjacent digits to consider.
 * @returns The largest product found.
 */
function findLargestProduct(bigNumber: string, chunkSize: number): number {
  let largestProduct = 0;

  for (let beginsAt = 0; beginsAt <= bigNumber.length - chunkSize; beginsAt++) {
    const substring = bigNumber.substr(beginsAt, chunkSize);

    if (substringHasAZero(substring)) {
      // Move the iterator to skip past the zero
      beginsAt += substring.lastIndexOf("0");
    } else {
      const substringProduct = productOfNumbers(substring);
      if (substringProduct > largestProduct) {
        largestProduct = substringProduct; // Update largest product
      }
    }
  }

  return largestProduct;
}
