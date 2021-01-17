/**
 * given an input string,
 * return true if the string is valid
 *
 * a valid string is one where:
 *   1. open brackets must be closed by the same type of brackets.
 *   2. open brackets must be closed in the correct order.
 *
 * note that an empty string is considered valid.
 */

/*
 i.e 
   input = "{}"
   output = true
*/

/*
 i.e 
   input = "{()[{}]}"
   output = true
*/

/**
 *
 * @param {string} param0
 */
function validParenthesis(inputString = '') {
  if (inputString.length % 2 !== 0) return false;

  // use a stack
  const myStack = new Stack();
  const OPENING_BRACKETS = ['(', '[', '{'];
  const CLOSING_BRACKETS = [')', ']', '}'];

  // for each letter in the string
  for (let i = 0; i < inputString.length; i++) {
    // push 'opening' brackets into stack
    if (OPENING_BRACKETS.includes(inputString[i])) {
      myStack.push(inputString[i]);
    }
    // when we see closing brackets
    else if (CLOSING_BRACKETS.includes(inputString[i])) {
      // base case
      if (myStack.isEmpty()) {
        return false;
      } else {
        // peek stack
        const peek = myStack.peek();
        // if its same 'type' of backet
        const peekIndex = OPENING_BRACKETS.indexOf(peek); // peek has to be opening brace
        // check if its same type by comparing indexOf
        if (CLOSING_BRACKETS.indexOf(inputString[i]) === peekIndex) {
          // if same type, pop
          myStack.pop();
        } else {
          // if not same type, return false
          return false;
        }
      }
    } else {
      // INVALID INPUT
      return false;
    }
  }

  return myStack.isEmpty();
}

// STACK CLASS
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (this.items.length == 0) return 'Underflow';
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
}

console.log(validParenthesis('))'));
