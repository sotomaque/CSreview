/*
  given n queens that we want to place on an n x n cless board such that
  no queens can attack each other
*/

/**
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O()
 *
 * @param {*} n
 */
function nQueens(n) {
  const result = [];
  helper(n, 0, [], result);

  return result;
}

function helper(n, currentIndex, partialSolution, globalSolution) {
  // if (hasConflict(partialSolution)) return;

  // base case
  if (currentIndex === n) {
    globalSolution.push(partialSolution);
    return;
  }

  // recursive case
  for (let i = 0; i < n; i++) {
    if (!hasConflict(partialSolution)) {
      helper(n, currentIndex + 1, [...partialSolution, i], globalSolution);
    }
  }
}

// only checks for conflicts at the column / diagonal level
// since the way we have implented our solution we cannot
// build a slate with conflicts at the row level
function hasConflict(slate) {
  if (slate.length < 2) return false;

  const lastQueen = slate.length - 1;

  for (let i = 0; i < lastQueen; i++) {
    // check for collision at the columns
    if (slate[lastQueen] === slate[[i]]) {
      return true;
    }
    // check for collisions at the diagonals
    if (Math.abs(slate[lastQueen] - slate[i]) === Math.abs(lastQueen - i)) {
      return true;
    }
  }

  // else we have iterated through entire slate and did not find conflicts
  return false;
}

console.log(nQueens(4));
