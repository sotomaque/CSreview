/*
    given two strings, return true if one string is 'one edit away' from 
    the other string

    an edit can be deleting a char, changing a char, or adding a char
    
    assumption - you can change a char to itself, therefore two identical strings
    are one edit away

*/


function isOneEditAway(s1, s2) {
    if (Math.abs(s1.length - s2.length) >= 2) return false

    else if (s1.length === s2.length) {
        return isOneEditAwaySameLength(s1, s2)
    } else if (s1.length > s2.length) {
        return isOneEditAwayDiffLength(s1, s2)
    } else {
        return isOneEditAwayDiffLength(s2, s1)
    }
}

// 'aba'
// 'ab'

// -> while we have chars in the shorter string,
// ensure those chars appear in same order in longer string

// assumption: 
// s1.length > s2.length
function isOneEditAwayDiffLength(s1, s2) {
    let i = 0;
    let countDifference = 0;
    while (i < s2.length) {
        if (s1[i + countDifference] === s2[i]) {
            i += 1
        } else {
            countDifference += 1
            if (countDifference > 1) return false
        }
    }
    return true
}


function isOneEditAwaySameLength(s1, s2) {
    let countDifference = 0;
    for (let i = 0; i < s2.length; i++) {
        if (s1[i] !== s2[i]) {
            countDifference += 1
            if (countDifference > 1) return false
        }
    }
    return true
}

let result = isOneEditAway("aaa", "abc")
console.log(result, 'should be false')

