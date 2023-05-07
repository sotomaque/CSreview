function isPalindromeNumber(x) {
  if (x < 0) return false;
  let xStr = x.toString();
  let start = 0;
  let end = xStr.length - 1;

  while (start <= end) {
    if (xStr[start] !== xStr[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

console.log(isPalindromeNumber(121));
