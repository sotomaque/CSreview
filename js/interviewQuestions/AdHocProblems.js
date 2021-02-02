/*
implement the four following functions for our api in O(1) time

void insert(int x):
void remove(int x):
bool isPresent(int x):
int getRandom():

i.e.
  insert(5)
  insert(2)
  isPresent(3) // false
  insert(3)
  isPresent(3) // true
  remove(2)
  getRandom() // { 5 , 3 } (50% prob)
*/

class Stream {
  constructor() {
    this.mapping = new Map();
  }

  // insert into map (O(1) time)
  insert(num) {
    if (this.mapping.has(num)) {
      this.mapping.set(num, this.mapping.get(num) + 1);
    } else {
      this.mapping.set(num, 1);
    }
  }

  // decrement map value or remove from map (O(1))
  remove(num) {
    if (this.mapping.has(num) && this.mapping.get(num) >= 1) {
      this.mapping.set(num, this.mapping.get(num) - 1);
    }
  }

  // check if map has value (O(1))
  isPresent(num) {
    return this.mapping.has(num);
  }

  //
  getRandom() {
    const possibleNums = [];
    this.mapping.forEach((value, key) => {
      for (let i = 0; i < value; i++) {
        possibleNums.push(key);
      }
    });
    const randomIndex = Math.floor(Math.random() * possibleNums.length);
    return possibleNums[randomIndex];
  }
}

const myStream = new Stream();

myStream.insert(5);
myStream.insert(5);
myStream.insert(2);
console.log(myStream.isPresent(3));
myStream.insert(3);
console.log(myStream.isPresent(3));
myStream.remove(2);
console.log(myStream.getRandom());
