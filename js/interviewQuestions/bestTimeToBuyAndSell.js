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

const tempInput = [7, 1, 5, 3, 6, 4];
const result = bestTimeToBuyAndSell(tempInput);

console.log(`max profit in first scenario: $${result}`);
