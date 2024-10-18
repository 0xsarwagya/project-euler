/**
 * Finds the product of a Pythagorean triplet a, b, c such that a + b + c = 1000.
 */
function findPythagoreanTriplet(maxA: number, maxB: number): number | null {
  let product: number | null = null;

  for (let a = 1; a <= maxA; a++) {
    for (let b = 1; b <= maxB; b++) {
      // Calculate c from the equation a + b + c = 1000
      const c = 1000 - a - b;

      // Check if c is a positive integer
      if (c > 0 && a * a + b * b === c * c) {
        console.log(`The magical values: ${a}, ${b}, ${c}`);
        console.log(
          `Does it satisfy the Pythagorean triplet? ${a * a + b * b}`
        );
        console.log(`Does it satisfy the Pythagorean triplet? ${c * c}`);
        console.log(
          `Does it satisfy the equation a + b + c = 1000? ${a + b + c}`
        );

        product = a * b * c; // Calculate the product
        return product; // Return the product immediately after finding the triplet
      }
    }
  }
  return product; // If no triplet found, return null
}