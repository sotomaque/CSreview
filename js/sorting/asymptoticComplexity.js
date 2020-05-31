 /**
 * (1) Which of the following are system-dependant factors for running time
 * complexity that the asymptotic analysis of algorithms ignores?
 * 
 * (X) the hardware specifications of the machine
 * (X) the programming language used to write the code
 * (X) the operating system of the machine that the algorithm is running on
 * ( ) the input size (i.e. length of the array to be sorted)
 * 
 */

 
/**
 * (2) Ө(5n) is the same as Ө(n). True or False?
 * 
 * (X) True
 * ( ) False
 * 
 */


/**
 * (3) If an algorithm executes exactly 100 basic operations, 
 * regardless of the array input size n, what is its asymptotic time 
 * complexity? (Maybe all it is supposed to do is to check if the first
 * array element is a 0 or not)
 * 
 * () Ө(n)
 * (X) Ө(1)
 * () Ө(n^2)
 * () Undefined
 * 
 */


/***
 * (4) What is the asymptotic time complexity of an algorithm that does a 
 * linear scan of an unsorted array of numbers A[1...n] to compute their mean?
 * 
 * () Ө(n^2)
 * (X) Ө(n)
 * () Ө(n^3)
 * () Ө(1)
 */


/***
 * (5) Your friend shows you an implementation of selection sort in which the 
 * number of iterations she has is N-1 instead of N. She says that there is no
 * need for an Nth iteration as the last element by itself is already sorted. 
 * It doesn’t require any swaps with any other element. So the total number of 
 * swaps can be brought down from N to N-1. What would be your response?  
 * 
 * () Her algorithm is correct and has a better asymptotic time complexity.
 * () Her algorithm is incorrect and so the time complexity is irrelevant. 
 * (x) Her algorithm is correct and has the same asymptotic time complexity.
 * (x) The asymptotic time complexity of her algorithm is Ө(N^2)
 */

 
 /**
  * (6) What is the running time of th epseudocode below on an array A of length n?
  * 
  * sum = 0
  * for i in 1 to A.length:
  *   sum += A[i]
  * print(sum)
  * 
  * () Ө(n^2)
  * (X) Ө(n)
  * () Ө(n^3)
  * () Ө(1)
  */