/**
 * Given two strings S and T,
 * return if they are equal when both are typed into empty text editors.
 * # means a backspace character.
 *
 * Note that after backspacing an empty text,
 * the text will continue empty.
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
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

function backspaceCompare(str1, str2) {
  const stack1 = new Stack();
  const stack2 = new Stack();
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === '#') {
      if (!stack1.isEmpty()) {
        stack1.pop();
      }
    } else {
      stack1.push(str1[i]);
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === '#') {
      if (!stack2.isEmpty()) {
        stack2.pop();
      }
    } else {
      stack2.push(str2[i]);
    }
  }
  const s1 = stack1.printStack();
  const s2 = stack2.printStack();
  console.log('s1', s1);
  console.log('s2', s2);
  return s1 === s2;
}

const res = backspaceCompare('a##c', '#a#c');
console.log('res', res);
