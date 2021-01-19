/*
    Problem: TOWER OF HANOI

    - there are three towers, each capable of holding disks

    rules:
        1) only one disk can be moved from one peg to another peg at a time
        2) A disk can be placed only on top of a larger one
        3) A disk can be moved from top only

    - the objective of the game is to all the disks from tower 1 
    to tower 3 following these rules

    i.e.
        input:
             [ a ]
           [   b   ]                |                    |
        [      c     ]              |                    |
        --------------         -----|-----          -----|-----
            tower 1               tower 2              tower 3


        output:
                                                        [ a ]
                                                      [   b   ] 
                                                    [     c     ]
        --------------         -----|-----          -----|-----
            tower 1               tower 2              tower 3

*/

function moveDisk(diskNumber, from, to) {
  console.log(`Moving Disk ${diskNumber} from ${from} to ${to}`);
}

/**
 * time-complexity:
 *  - to move n disks from 1 tower to another when there are 3 tower,
 * it takes 2^n - 1 moves
 *  - in order to enumerate all the moves it thus takes O(2^n) time
 *  - O(2^n)
 *
 * space-complexity:
 *  - recursive algorithm, however when we do the second recursive call
 * the first recursive call is over, so we can reuse the space of the 1st call
 *  - therefore the space-complexity is linear,
 *  - O(n)
 *
 * @param {*} n: number of disks; serves as the problem size for recursion
 * @param {*} from: the "from" tower is where the disks are placed
 * @param {*} to: the "to" tower is where the disks must be finally placed
 * @param {*} via: the "via" tower is that used as an intermediate location
 *                 as disks are moved between the towers from and to.
 */
function towerOfHanoi(n, from, to, via) {
  if (n === 0) return;

  towerOfHanoi(n - 1, from, via, to);
  moveDisk(n, from, to);
  towerOfHanoi(n - 1, via, to, from);
}

let n = 3;
towerOfHanoi(n, 'a', 'b', 'c');

// ALT PROBLEM WHERE WE ARE ASKED TO RETURN AN ARRAY OF THE MOVIES
// AS OPPOSED TO SIMPLY PRINTING OUT THE MOVE EVERY TIME IT OCCURS

function helper(n, source, destination, aux, results) {
  if (n === 1) {
    results.push([source, destination]);
  } else {
    helper(n - 1, source, aux, destination, results);
    results.push([source, destination]);
    helper(n - 1, aux, destination, source, results);
  }
}
function tower_of_hanoi(n) {
  let moves = [];
  helper(n, 1, 3, 2, moves);
  return moves;
}

// results = tower_of_hanoi(4)

// console.log(results)
