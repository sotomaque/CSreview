/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

function sumOfMultiplesOf3or5BelowN(n) {
  let total = 0;
  const multipules = [];
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += 1;
      multipules.push(i);
    }
  }
  console.log('multipules', multipules);
  return total;
}

console.log(sumOfMultiplesOf3or5BelowN(1000));
