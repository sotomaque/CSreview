/*
  given n = ['@', '#', '$', '%', '^', '&'] and 
  b = ['$', '%', '&', '^', '@', '#']
  where there is a 1-to-1 mapping between elements of n and b,

  efficiently map elements from n to their match in b

  - pick ith of b
    - make it my pivot
  - rearrange n
  - return partition of index i such that [...lessThanN[i], N[i], ...greaterThanN[i]]
  - using n[i], partition b
  - recures until i has scanned all of b

  O(n) times (linear scan of array)
  O(n) partitioning
  ----
  O(2n)
*/

function nutsAndBolts(nuts, bolts) {
  // bolts.length === nuts.length by definition
  return helper(nuts, bolts, 0, bolts.length - 1);
}

function helper(nuts, bolts, low, high) {
  let nut_pivot = nuts[low];
  bolt_pivot_pos = partition(bolts, nut_pivot, low, high);
  nut_pivot_pos = partition(nuts, bolts[bolt_pivot_pos], low, high);

  helper(nuts, bolts, low, bolt_pivot_pos - 1);
  helper(nuts, bolts, bolt_pivot_pos + 1, hight);
}

const n = ['@', '#', '$', '%', '^', '&'];
const b = ['$', '%', '&', '^', '@', '#'];

nutsAndBolts(n, b);

console.log(n);
console.log(b);
