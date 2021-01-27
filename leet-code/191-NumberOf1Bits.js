/*
    Write a function that takes an unsigned integer and returns the number
    of '1' bits it has (also known as the Hamming weight).
*/

function hammeringWeight(n) {
  n = n.toString();
  let count = 0;
  n = n.split('');
  n.forEach((elem) => {
    if (elem === '1') {
      count++;
    }
  });
  return count;
  // by passing a 2 into toString, we are
  // converting n to a string of base 2
  // return n.toString(2).split('').filter((ele) => ele === '1').length
}

console.log(hammeringWeight('00000000000000000000000000001011'));
