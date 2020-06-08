/*
    Problem Statement:
        - we know in american football, teams can score 2, 3, or 7 points
        - we are given n representing to total points scored by a team
        - we are asked to return the total # of different ways a team could have 
        arrived to that final score

    i.e. 
        - N = 10
        - possibleScores = [
            [7, 3],
            [3, 7],
            [2, 2, 3, 3],
            [2, 3, 2, 3],
            [2, 3, 3, 2],
            [3, 3, 2, 2],
            [3, 2, 3, 2],
            [3, 2, 2, 3]
        ]
        - result = possibleScores.length = 8

    - approach:
        - recursive formula:    
            - C(n):
                if (n === 0): return 1
                if (n < 0): return 0
                else: 
                    return C(n - 7) + c(n - 3) + c(n - 2)

        - need for DP:
            - the above formula is an exponential time algorithm, there will be
            overlapping subproblems in our recursive tree. we can avoid recomputing
            them with DP

        to avoid ever overshooting the target, we can conditionally call our 
        function recursively, i.e.

            - C(n):
                if (n === 0): return 1
                else: 
                    if (n >= 7) {
                        let a = C(n - 7) 
                    } 
                    if (n >= 3) {
                        let b = C(n - 3)
                    }
                    if (n >= 2) {
                        let c = C(n-2)
                    }
                    return a + b + c

        - since we ensured we will not overshoot our target we can now define the range of
        our variable:
            - N: (0, N)
            - size of our range: (N + 1)
            
        - initialize an array of size N + 1
                [0, 1, ..., N] (len of a = N + 1)
                 ^          ^
                base        return
                case        value        

*/

/**
 * time-complexity:
 *  -O(n)
 * 
 * space-complexity:
 *  -O(n)
 * 
 * @param {*} N 
 */
function count(N) {
    DP = new Array(N + 1)
    DP[0] = 1
    for (let n = 1; i <= N; n++) {
        let s = 0;
        if (n >= 2) s += DP[n-2]
        if (n >= 3) s += DP[n-3]
        if (n >= 7) s += DP[n-7]
        
        DP[n] = s
    }
    return DP[N]
}