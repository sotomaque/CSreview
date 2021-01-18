/*
Function Description

Complete the sockMerchant function.
It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock

Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints

 where 
Output Format

Return the total number of matching pairs of socks that Alex can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output

3
*/

function sockMerchant(n, ar) {
  const myMap = new Map();

  // map from ar
  for (let i = 0; i < ar.length; i++) {
    if (myMap.has(ar[i])) {
      myMap.set(ar[i], myMap.get(ar[i]) + 1);
    } else {
      myMap.set(ar[i], 1);
    }
  }
  console.log(myMap);
  let pairsFound = 0;
  // iterate through map adding up
  // cases where value === 2
  myMap.forEach((color, key) => {
    if (color >= 2) {
      // i.e. count of color x = 4
      //  we can make 2 pairs out of that
      // i.e. cound of color x = 5
      //  we can make 2 pairs out of that
      // i.e. cound of color x = 6
      //  we can make 3 pairs out of that
      let temp = color;
      while (temp > 1) {
        pairsFound += 1;
        temp -= 2;
      }
    }
    console.log('pairs found after looking at key', key, ' = ', pairsFound);
  });

  return pairsFound;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
