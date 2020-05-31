
/**
 * function recieves a string, and if you have seen a certain character before,
 * replaces it with a #, otherwise it leaves it as the original character
 * 
 * i.e. 'racecar' -> 'race###'
 * 
 * @param {input string} string 
 */
function hashReoccuringCharacters(input_string){
    let myMap = new Map();
    let result = '';

    for ( let i = 0; i < input_string.length ; i++ ) {
        if ( myMap.has(input_string[i]) ){
            result = result + '#'
        } else {
            myMap.set(inputString[i], 1)
            result = result + inputString[i]
        }
    }
    
    return result;
}


const inputString = 'racecar'
const result = hashReoccuringCharacters(inputString)

console.log(`${result}`)