/*
  Given an array of meeting time intervals where intervals[i] = [starti, endi],
  determine if a person could attend all meetings
*/

/*
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false
*/

function meetingRooms(array) {
  // sort interval
  let startTimes = [];
  let endTimes = [];
  array.forEach((meeting, index) => {
    startTimes[index] = meeting[0];
    endTimes[index] = meeting[1];
  });
  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);
  // iterate and check if next meeting
  // starts before current meeting ends
  for (i = 0; i < startTimes.length; i++) {
    if (startTimes[i + 1] < endTimes[i]) {
      return false;
    }
  }
  return true;
}

console.log(
  meetingRooms([
    [7, 10],
    [2, 4],
  ])
);
