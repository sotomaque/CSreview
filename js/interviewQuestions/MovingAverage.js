/*
Moving Average
This question is asked by Microsoft. Design a class, MovingAverage, which contains a method, next that is responsible for returning the moving average from a stream of integers.
Note: a moving average is the average of a subset of data at a given point in time.

// i.e. the moving average has a capacity of 3.
MovingAverage movingAverage = new MovingAverage(3);
m.next(3) returns 3 because (3 / 1) = 3
m.next(5) returns 4 because (3 + 5) / 2 = 4 
m.next(7) = returns 5 because (3 + 5 + 7) / 3 = 5
m.next(6) = returns 6 because (5 + 7 + 6) / 3 = 6
*/

class MovingAverage {
  size;
  stream;
  insert;
  sum;

  constructor(size) {
    // initialize array of max input size
    this.stream = new Array(size);
    // initialize class attributes to 0
    this.size = 0;
    this.insert = 0;
    this.sum = 0;
  }

  next(val) {
    if (this.size < this.stream.length) {
      this.size++;
    }

    this.sum -= this.stream[this.insert];
    this.sum += val;
    this.stream[this.insert++] = val;

    this.insert %= this.stream.length;

    return Number(this.sum / this.size);
  }
}

const m = new MovingAverage(3);
console.log(m.next(3)); //returns 3 because (3 / 1) = 3
console.log(m.next(5)); //returns 4 because (3 + 5) / 2 = 4
