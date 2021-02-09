/*
This question is asked by Amazon. Given two strings representing sentences,
return the words that are not common to both strings (i.e. the words that only
appear in one of the sentences). You may assume that each sentence is a
sequence of words (without punctuation) correctly separated using space characters.

Ex: given the following strings...

sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire",
return ["beat", "to", "lost"]
sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
*/

function uncommonWords(sentence1, sentence2) {
  const myMap = new Map();
  sentence1.split(' ').forEach((word) => {
    if (myMap.has(word)) {
      myMap.set(word, myMap.get(word) + 1);
    } else {
      myMap.set(word, 1);
    }
  });
  const unique = [];
  sentence2.split(' ').forEach((word) => {
    if (myMap.has(word) && myMap.get(word) >= 1) {
      myMap.set(word, myMap.get(word) - 1);
    } else {
      unique.push(word);
    }
  });

  myMap.forEach((value, key) => {
    if (value > 0) {
      unique.push(key);
    }
  });

  return unique;
}

let sentence1 = 'copper coffee pot';
let sentence2 = 'hot coffee pot';
let res = uncommonWords(sentence1, sentence2);

console.log(res);
