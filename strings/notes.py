"""
    #Intro
        -classic problems:
            - reverse a string
            - check if string is a paladrome

        - (1) are strings immutable? i.e. JS
              otherwise they can change in place -> i.e. char * / string builder in java
        
        - if its immutable, and modification creates a copy -> affects complexity

        -----------------
        Reverse a String
        -----------------
        - "my dog ran" => "nar god ym"
        - if we have immutable strings, we can start at the end of our input grab that char, and use it 
        to build or output string one char at a time

        - if we have mutable strings, we can actually do better, and do this in place
        - start from the end, swap first and last char,
            - move pointers, repeat until pointers swap position

        -----------------
        Palidrome Check
        -----------------
        - again approach string as an array of character
        - palidrome is defined as a string that is a mirror of itself, left side of the string is the reverse of the right side



    #SubStrings
        - given a string, s, and a string, p, s would be a substring of p if s exists within p as a contiguous array, not meerly that the 
        characters of s exist in p

        - brute force:
            - think of string as array
            - look for substring of substring (also think of it as an array)
            - if we wanted to try all possibilities of matches, we can start at position 0 of string p, and compare its value to the value at index 0 of string s.
                - if they match move pointers down one, until we have move the pointer past the length of string s.
            - if they dont match, only move pointer for p, not s.
                - i.e. compare p[1] to s[0].
            - time-complexity: 
                - time complexity to do one of these comparision will be len(s) in the worst case
                - because we do it for every starting position in which string s can fit in string p
                    total time complexity is: 
                        len(s) x (len(p) - len(s)) = O(n^2)
            - code:
                for (i = 0; i < len(p); ++ i) {
                    for (j = 0; j < len(s); ++ j) {
                        if (p[i] != s[j]): break;
                    }
                    if (j == len(s) - 1):
                        return true
                }
                return false

        - concept: 
            - sliding window:
                - look at a subregion of a string and decide if a property holds. if the property holds, we found what we are looking for. if a property doesn't hold, we might expand or shift that window

                - i.e. given the string 'abaabc' find the shortest substring that contains 3 'a's in it
                    does the substring 'a' contain 3 a's -> no
                    does the substring 'ab' contain 3 a's -> no
                    does the substring 'aba' contain 3 a's -> no
                    does the substring 'abaa' contain 3 a's -> YES -> we found a candidate
                        - shift window
                        does the substring 'baab' contain 3 a's -> no
                        does the substring 'aabc' contain 3 a's -> no
                    
                    - return shortest candidate

        - robin park:
            imagine a string 'abcd' and a substring 'cd' 
                - what if we could make 'cd' equal to some hash
                - if we also were to take every substring of two characters in the first string in a hashmap with its hash value like:
                    {
                        ab: ***,
                        bc: **,
                        cd: ****
                    }
                - we could just compare the hash of our substring and see if its equal to a hash in our dictionary
            - the way we do this is we assign each letter a unique number
                - i.e. start with a small alphabet -> 4 char alphabet
                    'abcd' 
                - we can assign each of these a value
                    {
                        a: 0,
                        b: 1,
                        c: 2,
                        d: 3
                    }
                - we can compute the value of any subsets of out string, for example, if we wanted to get the has value of 'ab', we know our substring size is 2
                - so we can assign each position of our hash length a multiple of the window size
                    hash(ab) = a * 4^(window size - 1) + b * 4^(window size - 2)
                    => hash(ab) = 0 + 1*4^(0) = 1
                    hash(ba) = 4
                    every unique order generates a unique hash
                
                - looking back at the original problem, we have 'abcd' and 'cd'
                - the hash(cd) = 2*4^(1) + 3x4^(0) = 8 + 3 = 11

                - when we look at the first substring of our parent string hash(ab) = 1 which is not equal to 11
                - moving on, hash(bc) = 6 

                - in general:
                    size of (alpahbet) = s
                    window size = length (substring)

                    hash (substring) = sum (i = 0; window size) of substring[i] * s^(window size - i)

                - now we have reduced our search of the string to O(n)
                - O(n) becasue we take the hash of the substring is O(substring) + O(substring) + O(s - substring)

        - KMP

            - imagine a string 'aaaab' and a substring 'aab'



    #PostStrings
"""