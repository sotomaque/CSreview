/*
    Problem Statement:
        -given a string, s, check if the string is composed of well formed parenthesis sets
            - i.e.
                s = '(())()' -> true
                s = ')(())' -> false
                s = '({})' -> true

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
        if (this.items.length == 0) 
            return "Underflow"; 
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
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        return str; 
    } 



}


/**
 * time-complexity:
 *  - O(n), must iterate through the whole string in the worst case to determine if valid
 * 
 * space-complexity:
 *  -O(n), stack must also be size n / 2 in worst case, i.e. first half of s is all open parenthesis
 *         second half of string is all closing parenthesis
 *  -O(n/2) -> O(n) in big O notation
 * 
 * @param {string} s  
 */
function isValidParenthesisSet(s) {
    if (s.length % 2 === 1 || !s.length) return false;
    if (s[0] !== '(' && s[0] !== '{') return false;
   
    let mySet = new Stack();

    for(let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{') {
            mySet.push(s[i])
        } else {
            if (mySet.peek() === '(' || mySet.peek() === '{') {
                mySet.pop()
            }
        }
    }
    if (mySet.isEmpty()) return true
    else return false
}


let a = '({})';

console.log(isValidParenthesisSet(a))