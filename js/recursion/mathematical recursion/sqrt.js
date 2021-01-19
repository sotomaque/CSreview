/*
 */

function sqrt(n) {
  let i = 1;
  let found = false;
  while (!found) {
    // base case
    if (i * i === n) {
      found = true;
      return i;
    } else if (i * i > n) {
      // recurese
      found = true;
      return helper(n, i - 1, i);
    }
    // increment i every time
    i += 1;
  }
}

function helper(n, fromIndex, toIndex) {
  const midpoint = (fromIndex + toIndex) / 2;
  const midpointSquared = Math.pow(midpoint, 2);

  // case midpointSquared === sqrt(n)
  if (midpointSquared === n || Math.abs(midpointSquared - n) < 0.00001) {
    return midpoint;
  } else if (midpointSquared < n) {
    // recurse only from [midpointSquared: toIndex]
    return helper(n, midpoint, toIndex);
  } else {
    // recurse only from [fromIndex: midpointSquared]
    return helper(n, fromIndex, midpoint);
  }
}

console.log(sqrt(24));
