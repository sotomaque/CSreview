
/**
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity:
 *  - O(1)
 * 
 * @param {*} someString 
 */
function isPalidrome(someString) {
    let i = 0;
    let j = someString.length - 1;

    while (i < j) {
        if (someString[i] !== someString[j]) {
            return false
        } else {
            i = i + 1;
            j = j - 1;
        }
    }
    return true;
}


function test() {
    const input1 = '12021'

    const result = isPalidrome(input1) ? `${input1} is a palidrome` : `${input1} is NOT a palidrome`
    console.log(result);

}

test()