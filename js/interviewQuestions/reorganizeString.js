/*
    given a string s, check if the letters can be rearranged so that 
    two characters that are adjacent are not the same

    if possible, output any possible result. if not possible, output an 
    empty string.

    i.e. 
        - input: S = 'aab'
        - output: 'aba'

    i.e.
        - input: S = 'aaab'
        - ouput: ''

    approach:
        - greedy problem:
            - try to always take the most frequntly occuring char
            and put it at the beg of the output str, so we can 
            add other char's in between each occurances of that char.
                - seperate the most freq occuring char by the next most
                freq occuring char
        - so we need to count all occurances of each letter in out input
            - hash map
        - and we need a datastructure that will let us know the letter with
        max occurances 
            - max heap
        
*/
const PriorityQueue = require('javascript-priority-queue');

/**
 * time-complexity:
 *  - building a hashmap, going through all chars -> O(n)
 *  + building a max heap -> O(n)
 *  + remove everything from the heap -> O(log(n))
 *  - therefore, O(n log(n))
 * 
 * space-complexity:
 *  -
 * 
 * @param {*} str 
 * @returns {string} res 
 */
function reorganizeString(str) {

    let charCount = new Map();
    const maxQueue = new PriorityQueue.default('max');


    for (let i = 0; i < str.length; i++) {
        if (charCount.get(str[i])) {
            let prev = charCount.get(str[i]);
            charCount.set(str[i], prev + 1);
        } else {
            charCount.set(str[i], 1);
        }
    }

    charCount.forEach((key, value) => maxQueue.enqueue(value, key));

    let res = '';

    while (maxQueue.size() > 1) {
        let mostCommon = maxQueue.dequeue();
        let next = maxQueue.dequeue();

        res += mostCommon;
        res += next;

        // deduct count of mostCommon 
            // only deduct if count >= 2
        if (charCount.get(mostCommon) >= 2) {
            let prev = charCount.get(mostCommon);
            charCount.set(mostCommon, prev - 1);
            // since we still have at least 1 occurance of this letter left, re add the letter to the map
            maxQueue.enqueue(mostCommon, prev - 1)
        } 
        // if count < 2 (it must have been 1, we just used it, remove it from map)
        else {
            charCount.delete(mostCommon);
        }

        // do the same for 'next'
        if (charCount.get(next) >= 2) {
            let prev = charCount.get(next);
            charCount.set(next, prev - 1);
            maxQueue.enqueue(next, prev - 1)
        } else {
            charCount.delete(next);
        }
    }

    if (maxQueue.size() > 0) {
        let last = maxQueue.dequeue();
        if (charCount.get(last) > 1) {
            return ''
        }
        res += last
    }

    return res
}

let str = 'aab'
let res = reorganizeString(str)
console.log(res)

