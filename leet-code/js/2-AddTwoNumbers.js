/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.
*/

function addTwoNumbers(l1, l2) {
        // 2 -> 4 -> 3 
        // -> 342
        // 5 -> 6 -> 4
        // -> 465

        // sum = 807
    const firstNumber = +l1.reverse().join('')
    const secondNumber = +l2.reverse().join('')
    const res = firstNumber + secondNumber;
    return res.toString().split('').reverse().join('');
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))