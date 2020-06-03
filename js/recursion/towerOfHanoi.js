function helper(n, source, destination, aux, results) {
    
    if (n === 1) {
        results.push([source, destination])
    }
    
    else {
        helper(n - 1, source, aux, destination, results)
        results.push([source, destination])
        helper(n - 1, aux, destination, source, results)
    }
    
}

function tower_of_hanoi(n) {
    let moves = []
    helper(n, 1, 3, 2, moves)
    return moves
}


results = tower_of_hanoi(4)

console.log(results)