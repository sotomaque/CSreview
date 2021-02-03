function convertToMilitarTime(s) {
  let isAM = s.includes('AM');
  let sliced = s.slice(0, s.length - 2);
  let sArr = s.split(':');
  let militaryTime;

  if (sArr[0] === '12') {
    if (isAM) {
      sArr[0] = '00';
    } else {
      sArr[0] = '12';
    }
    let temp = sArr.join(':');
    militaryTime = temp.slice(0, temp.length - 2);
  } else if (isAM) {
    militaryTime = sliced;
  } else {
    if (sArr[0] !== '12') {
      sArr[0] = Number(sArr[0]) + 12;
    } else {
      sArr[0] = '01';
    }
    let temp = sArr.join(':');
    militaryTime = temp.slice(0, temp.length - 2);
  }
  return militaryTime;
}

let s = '12:40:00:47PM';
let res = convertToMilitarTime(s);

console.log(res);
