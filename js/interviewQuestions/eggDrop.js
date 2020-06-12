/*
    given a certain amount of floors, and given a certain amount of eggs,
    what is the least amount of egg drops that i need to preform, to find the pivitoal
    floor, where, right below it if i drop the eggs, they wont break, yet right above it 
    if i drop the egg it will break

    - goal is given the number of floors and number of eggs, return the least drops
    to ensure the pivotal floor is found

    - in other words, find the most amount of eggs needed to find the floor
*/

/*
    approach:

        BASE CASE 1: TOTAL EGGS = 1
            - (totalEggs = 1, totalFloors = 6)
                - initialize DP array = [0, 0, 0, 0, 0, 0, 0] (len totalFloors + 1)
                    representing scenarios where we drop from floor 0, 1, 2, ..., 6
                - start from floor 0, drop, if it doesnt break, move on to floor 1,
                - drop, if it breaks, we know floor 0 is the pivotal floor, else move on to floor 2
                - drop, if it breaks, we know floor 1 is the pivotal floor, else move on to floor 3
                ...
                - drop, if it breaks, we know floor 6 is the pivotal floor, else move on to floor 5
            - drop(1, 6), strategy work from 0 -> 6;
                - least amount of drops = 6 + 1 -> 7
                
        BASE CASE 2: 
            - (totalEggs = infinity, totalFloors = 1)
            - max amount of drops needed = 1, regardless of the value of totalEggs
        
        BASE CASE 3: 
            - (totalEggs = infinity, totalFloors = 0)
            - max amount of drops needed = 0, regardless of the value of totalEggs

        SUBPROBLEM:
            - (totalEggs = 3, totalFloors = 6)
            - max amount of drops needed = 0, regardless of the value of totalEggs
                - case egg didnt break: 
                    - recurse, increasing totalFloors parameter, keeping totalEggs the same
                - case egg broke:
                    - return currentFloor - 1
*/

function drop(totalEggs, totalFloors) {

    if (totalEggs === 1) return totalFloors
    else if (totalFloors === 1 || totalFloors === 0) return totalFloors

    else {
        

    }

}