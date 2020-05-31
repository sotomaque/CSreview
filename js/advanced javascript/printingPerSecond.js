

// for (let i = 0; i < 6; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000)
// }

function printPerSecond(n) {
    for (var i = 1; i <= n; i++) {
        ((i) => {
            setTimeout(function() {
                console.log(i)
            }, i* 1000);
        })(i);
    }
}

printPerSecond(5)