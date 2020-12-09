/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction
 * (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
 * Note that you cannot sell a stock before you buy one.
 *
 *
 * i.e.
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation:
 *  Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 *  Not 7-1 = 6, as selling price needs to be larger than buying price.
 */

/**
 * approach:
 *  - keep track of the min stock price i have seen
 *  - since we are tryng to maximize profit, we want to
 *    - minimize buying price
 *    - maximize selling price
 */

// time-complexity: O(n) -> linear
// space-complexity: O(2) -> O(1) -> constant
function bestTimeToBuyAndSell(arrayOfPrices) {
  if (!arrayOfPrices.length || !arrayOfPrices.length > 0) return;
  let runningMin;
  let runningMaxProfit = 0;
  arrayOfPrices.forEach((price, index) => {
    if (index === 0) {
      runningMin = price;
    } else if (price < runningMin) {
      runningMin = price;
    }
    const currentProfit = price - runningMin;
    if (currentProfit > runningMaxProfit) {
      runningMaxProfit = currentProfit;
    }
  });

  return runningMaxProfit;
}

/**
 * Say you have an array prices for which the ith element is the price of a given
 * stock on day i.Design an algorithm to find the maximum profit. You may complete
 * as many transactions as you like (i.e., buy one and sell one share of the stock
 * multiple times).Note: You may not engage in multiple transactions at the same
 * time (i.e., you must sell the stock before you buy again).
 *
 * i.e.
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation:
 *  Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 *  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 */

/**
 * approach:
 *   - buy, wait until bought position is profitiable to unload, sell
 *   - repeat
 *
 */
function bestTimeToBuyAndSellV2() {}

const tempInput = [7, 1, 5, 3, 6, 4];
const result = bestTimeToBuyAndSell(tempInput);

console.log(`max profit in first scenario: $${result}`);
