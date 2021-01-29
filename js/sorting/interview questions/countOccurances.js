function countOccurances(array) {
  // counts in a data structure
  const myMap = new Map();

  for (let i = 0; i < array.length; i++) {
    if (myMap.has(array[i])) {
      myMap.set(array[i], myMap.get(array[i]) + 1);
    } else {
      myMap.set(array[i], 1);
    }
  }

  console.log(myMap);
}

array = [16, 16, 1, 32, 5, 3, 3, 2, 1, 5, 6, 6, 6, 6, 1, 45, 34, 11];

countOccurances(array);
