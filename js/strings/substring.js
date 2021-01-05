/**
 * use built-in functions
 *
 * i.e. 'theParentString', 'Parent' -> 'true'
 *
 * inputParentString.includes(inputSubstring)
 *
 * time-complexity:
 *  - O(n)
 *
 * space-complexity:
 *  - O(1)
 *
 * @param {input string} string
 */
function substringMatch(p, s) {
  return p.includes(s);
}

const string_1 = 'theParentString';
const string_2 = 'Parent';
const result = substringMatch(string_1, string_2);

result
  ? console.log(`${string_2} is a substring of ${string_1}`)
  : console.log(`${string_2} is NOT substring of ${string_1}`);
