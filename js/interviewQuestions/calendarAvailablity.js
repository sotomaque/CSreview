/*
    given two calendars, each being a list of tupes,
    and two lists representing times people are willing to have meetings
    and a meeting duration

    return a list of times that work for both people that satisfy the duration constraint
*/

// approach: 

// create merged array of calendars
// mergedCal = [["12:00", "13:30"], ["12:00", "12:30"], ["13:00", "15:30"], ["15:00", "17:00"], ["16:00", "17:00"]] ✅

// iterate through mergedCal comparing neighbors

// case where end of slot 1 > beginging of slot 2:
    // i.e. ["12:00", "13:30"], ["12:00", "12:30"]
    // make end of slot1 = Math.max(slot1[1], slot2[1]) => max(13:30, 12:30) => 13:30
    // mergedCal = [["12:00", "15:30"], ["15:00", "17:00"]]
// if any slot in mergedCal is greater than or equal to meeting duration, add to results array,
// return results array ✅

// check each of the windows in results, if < duration, remove it ✅

function mergeTwoCalendars(s1, s2) {
    let i = 0;
    let j = 0;
    let k = 0;

    let mergedArrays = [];

    // do merge-sort like algo to sort two arrays into new array 
    while (i < s1.length && j < s2.length) {
        // case: event in s1 starts before event in s2, add event in s1 to mergedList
        if (s1[i][0] < s2[j][0]) {
            mergedArrays[k] = s1[i];
            i += 1;
        }
        else {
            mergedArrays[k] = s2[j];
            j += 1;
        }
        k += 1;
    }
    // collect remaining values
    while (i < s1.length) {
        mergedArrays[k] = s1[i];
        i += 1;
        k += 1;
    }
    while (j < s2.length) {
        mergedArrays[k] = s2[j];
        j += 1;
        k += 1;
    }
    return mergedArrays;
}

function processTimeFromStringToNumOfMinutes(time) {
    let res = time.split(':')
    return res[0] * 60 + res[1]
}

function processTimeFromNumOfMinutesToString(timeInString) {
    let hours = Math.floor(Number(timeInString) / 60);
    // strip trailing 0 
    hours = hours / 100
    let minutes = Number(timeInString) % 60;
    return `${hours}:${minutes}`
}

// asumption time1 < time2
function getTimeDifferenceOfStringInMinutes(time1, time2) {
    let res1 = time1.split(':')
    res1 = Number(res1[0] * 60) + Number(res1[1])

    let res2 = time2.split(':')
    res2 = Number(res2[0] * 60) + Number(res2[1])

    return res2 - res1
}

function considerBounds(mergedArrays, availablity, b1, b2) {
    // consider bounds
    // max(b1[0], b2[0]) is our constraining starttime
    let constrainingStartTime;

    if (b1[0] > b2[0]) constrainingStartTime = b1[0]
    else constrainingStartTime = b2[0]

    let earliestScheduledEvent =  mergedArrays[0][0];
    let newFirstTime = [constrainingStartTime, earliestScheduledEvent]
    
    // min(b1[1], b2[1]) is our constraining endtime
    let constrainingEndTime;
    if (b1[1] > b2[1]) constrainingEndTime = b2[1]
    else constrainingEndTime = b1[1]

    let latestEndingEvent = mergedArrays[ mergedArrays.length - 1 ][1];
    let newEndTime = [latestEndingEvent, constrainingEndTime]
    
    // spread in constraints set by passed in bounds to merged array
    availablity = [newFirstTime, ...availablity, newEndTime]
    return availablity
}

/**
 * function goes through each possible meeting time, and if the window length > meeting duration,
 * appends that window to an array to return 
 * 
 * time-complexity:
 *  - O(n) 
 * 
 * space-complexity:
 *  - O(k) where k is the length of the availability array we return
 * 
 * @param {array} results - array of tupes representing times when users can meet
 * @param {int} duration - time of proposed meeting in minutes
 * @returns {array} availability - either an array of tuples for possible meetings or an empty array if no times in 
 *                                 resuults satisfy duration criteria
 */
function handleDurationConstraint(results, duration) {
    let availablity = []
    // handle meeting duration constraint
    results.forEach(tuple => {
        let availablityInMinutes = getTimeDifferenceOfStringInMinutes(tuple[0], tuple[1])
        if (availablityInMinutes >= duration) {
            availablity.push(tuple)
        }
    });
    return availablity
}

/**
 * function takes in an array 
 *  i.e. input = [["12:00", "12:30"], ["12:00", "13:30"], ["13:00", "15:30"], ["15:00", "17:00"], ["16:00", "17:00"]] 
 *  and compresses input to consider three cases:
 *      case 1: 
 *          - where end time of first event > start time of second event;
 *      case 2:
 *          - where end time of first event < start time of second event;
 *      case 3:
 *          - where end time of first event == start time of second event;
 * 
 * time-complexity:
 *  - O(n)
 * 
 * space-complexity: 
 *  - O(m) where m is the length of the 'results' array
 *      - results being the times between scheduled appointments
 * 
 * @param {array} mergedArrays - array of tuples
 * @returns {array} results - array of times when neither user is busy and they can potentially meet
 */
function reduceMergedArrays(mergedArrays) {
    let results = []
    for (let i = 0; i < mergedArrays.length - 1; i++) {
        // case where end of slot 1 > beginging of slot 2:
        // i.e. ["12:00", "13:30"], ["12:00", "12:30"]
        // make end of slot1 = Math.max(slot1[1], slot2[1]) => max(13:30, 12:30) => 13:30
        // mergedCal = [["12:00", "15:30"], ["15:00", "17:00"]]
        // remove mergedArrays[i + 1] from mergedArrays
        if (mergedArrays[i][1] > mergedArrays[i + 1][0]) {
            let endOfSlot1 = Math.max(processTimeFromStringToNumOfMinutes(mergedArrays[i][1]), processTimeFromStringToNumOfMinutes(mergedArrays[i + 1][1]));
            mergedArrays[i][1] = processTimeFromNumOfMinutesToString(endOfSlot1);
            mergedArrays.splice(i + 1, 1);
        }
        // case where end of slot 1 < begining of slot 2:   
        // i.e. ["12:00", "12:30"], ["13:00", "13:30"]
        // we have a window of availablity
        // window = [endOfSlot1, startOfSlot2]
        // could potentially pre-process and ensure it satisfys out meeting time constraint 
        // push window to results
        else if (mergedArrays[i][1] < mergedArrays[i + 1][0]) {
            results.push([mergedArrays[i][1], mergedArrays[i + 1][0]]);
        }
        // case where end of slot 1 === begining of slot 2
        // i.e. ["12:00", "12:30"], ["12:30", "13:30"]
        // make end of slot1 = endOfSlot2
        // mergedCal = [["12:00", "13:30"]]
        // remove mergedArrays[i + 1] from mergedArrays
        else {
            mergedArrays[i][1] = mergedArrays[i + 1][1];
            mergedArrays.splice(i + 1, 1);
        }
    }
    
    return [ mergedArrays, results ]
}

/**
 * 
 * @param {array} s1 - list of tupes, representing times when person 1 is busy
 * @param {array} s2 - list of tupes, representing times when person 1 is busy
 * @param {int} duration - duration of desired meeting in minutes
 * 
 * @returns {array} result
 */
function suggestMeetingTime(s1, s2, b1, b2, duration) {

    let mergedArrays = mergeTwoCalendars(s1, s2);
    // process mergedArrays 'reducing' array 
    [ mergedArrays, results ] = reduceMergedArrays(mergedArrays);
    // handle time constraints of users
    results = considerBounds(mergedArrays, results, b1, b2)
    // handle duration constraint of meeting
    results = handleDurationConstraint(results, duration)

    return results
}

let cal1 = [["12:00", "12:30"], ["15:00", "17:00"]]
let cal2 = [["13:00", "13:30"], ["16:00", "17:00"]]

let bound1 = ["8:00", "22:00"]
let bound2 = ["9:00", "19:00"]

let meetingDuration = 120 // in minutes

let possibleMeetingTimes = suggestMeetingTime(cal1, cal2, bound1, bound2, meetingDuration)

console.log(`possible meeting times:`, possibleMeetingTimes)