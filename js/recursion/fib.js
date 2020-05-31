/**
 * time-complexity:
 *  -O(2^n) - height of recursive stack
 * 
 * space-complexity:
 *  -O(n)
 * 
 * @param {int} n - function returns the n-th fibinacci number 
 */
function fib(n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

/**
 * time-complexity:
 *  -O(n)
 * 
 * space-complexity:
 *  -O(n)
 * 
 * @param {int} n - function returns the n-th fibinacci number 
 */
function fib_dp(n, cache = { 1: 0, 2: 1 }) {
    if (n in cache) {
        return cache[n];
    } else {
        cache[n] = fib_dp(n - 1, cache) + fib_dp(n - 2, cache);
        return cache[n]
    }
}


/**
 * time-complexity:
 *  -O(n)
 * 
 * space-complexity:
 *  -O(1)
 * 
 * @param {int} n - function returns the n-th fibinacci number 
 */
function fib_iterative(n) {
    let last_two = [0, 1];
    let counter = 3;

    while (counter <= n) {
        let nextFib = last_two[0] + last_two[1];
        last_two[0] = last_two[1];
        last_two[1] = nextFib;
        counter = counter + 1;
    }
    if (n > 1) {
        return last_two[1]
    } else {
        return last_two[0]
    }
}



function test() {
    console.log('8th fib recursively: ', fib(8))
    console.log('8th fib dp: ', fib_dp(8))
    console.log('8th fib dp: ', fib_iterative(8))
}

test()