/*
  Given an array, a, with 52 elements where each element represents a valid card
  in a standard card deck, implement an algorithm to shuffle the cards
  

  Requirement: Each ordering is equally likely
  p = 1/52! for each ordering
*/

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    let randIdx = randomInteger(i, array.length);
    [array[i], array[randIdx]] = [array[randIdx], array[i]];
  }
  return array;
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
