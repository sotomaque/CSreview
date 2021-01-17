/**
 * say you have an array for which the ith element
 * is the price of a stock on day i
 *
 * if you were only permitted to complete at most one
 * transaction, design an algo to find the max profit
 */

/*
i.e.
  input = [7, 1, 5, 3, 6, 4]
  temp = [
    if i bought at 7 at day 0,
    i could profit -6 if i sell at day 1,
    i could profit -2 if i sell at day 2,
    i could profit -4 if i sell at day 3,
    i could profit -1 if i sell at day 4,
    i could profit -3 if i sell at day 5,

    if i bought at 1 at day 1,
    i could profit 4 if i sell at day 2,
    i could profit 2 if i sell at day 3,
    i could profit 5 if i sell at day 4,
    i could profit 3 if i sell at day 5,

    if i bought at 5 at day 2,
    i could profit -2 if i sell at day 3,
    i could profit 1 if i sell at day 4,
    i could profit -1 if i sell at day 5,

    if i bought at 3 at day 3,
    i could profit 3 if i sell at day 4,
    i could profit 1 if i sell at day 5,

    if i bought at 6 at day 4,
    i could profit 2 if i sell at day 5,
  ]
  output = 5
*/

function bestTimeToBuyAndSellStock(inputArray) {
  let runningMax = 0;
  let runningMin = Number.MAX_VALUE;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < runningMin) {
      runningMin = inputArray[i];
    } else {
      runningMax = Math.max(runningMax, inputArray[i] - runningMin);
    }
  }
  return runningMax;
}

console.log(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]));
