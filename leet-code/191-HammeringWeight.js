/*

*/

function hammeringWeight(n) {
    n = n.toString();
    let count = 0;
    n = n.split('')
    n.forEach(elem => {
        if (elem === '1') {
            count++;
        }
    });
    return count;
}

console.log(hammeringWeight('00000000000000000000000000001011'))