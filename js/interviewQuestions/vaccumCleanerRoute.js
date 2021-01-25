/*
  Given strings representing the sequence of moves a robot makes,
  return whether or not it will return to its original position.

  The string will only contain 'L', 'R', 'U', 'D' chars.

  i.e. 
    input = 'LR'
    output = true

  i.e. 
    input = 'URURD'
    output = false
*/

class Stack {
  constructor() {
    this.items = [];
  }

  // functions
  push(item) {
    // push element into the items
    this.items.push(item);
  }
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return 'Underflow';
    return this.items.pop();
  }
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

  // isEmpty function
  isEmpty() {
    // return true if stack is empty
    return this.items.length == 0;
  }

  // printStack function
  printStack() {
    var str = '';
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
    return str;
  }
}

/**
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - O(n) potentially
 * 
 * @param {*} moves 
 */
function willReturnHome(moves) {
  if (moves.length <= 1) return false

  const myStack = new Stack();
  myStack.push(moves[0]);

  for (let i = 1; i < moves.length; i++) {
    const lastMove = myStack.peek();
    const currentMove = moves[i];
    // case where we are 'undoing' previous move
    if (lastMove === 'L' && currentMove === 'R' || lastMove === 'R' && currentMove === 'L' || lastMove === 'U' && currentMove === 'D' || lastMove === 'D' && currentMove === 'U') {
      myStack.pop();
    } else {
      myStack.push(currentMove)
    }
  }

  return myStack.isEmpty();
}

/**
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} moves 
 */
function willReturnHomeIterative(moves) {
  let UD = 0;
  let LR = 0;
  for (let i = 0; i < moves.length; i++) {
    const current = moves[i];
    if (current === 'U') {
      UD++;
    } else if (current === 'D') {
      UD--;
    } else if (current === 'L') {
      LR++;
    } else if (current === 'R') {
      LR--;
    }
  }

  return UD === 0 && LR === 0;
}

console.log(willReturnHomeIterative('RUULLDRD'))