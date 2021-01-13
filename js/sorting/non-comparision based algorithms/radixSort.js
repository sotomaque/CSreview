/*

    Radix Sort

    sort n digits, each integer can be represeneted in d digits, in some base (assume base 10)

    we can do countingSort on the d digits, from least significant to most significant,
    to accomplish sorting our array

    i.e. 
        array = [21, 345, 13, 101, 50, 234, 1]

        ( array of least significant digit -> [1, 5, 3, 1, 0, 4, 1] )

        step 1: counting sort on least siginficant digit

            - data structure holding our original input sorted via counting sort on LSD -
                {
                    0: [50],
                    1: [21, 101, 1],
                    2: [],
                    3: [13],
                    4: [234],
                    5: [345],
                    6: [],
                    7: [],
                    8: [],
                    9: []
                }
                
            - array sorted by least significant digit only = 
                [50, 21, 101, 1, 13, 234, 345]
        
        step 2: counting sort on 2nd least significant digit
            
            - data structure holding our input sorted via countinng sort on 2nd LSD - 
                {
                    0: [101, 1],
                    1: [13],
                    2: [21],
                    3: [234],
                    4: [345],
                    5: [50],
                    6: [],
                    7: [],
                    8: [],
                    9: []
                }

            - array sorted by 1st and 2nd least significant digit = 
                [101, 1, 13, 21, 234, 345, 50]

        step 3: counting sort on 3rd least significant digit
            
            - data structure holding our input sorted via countinng sort on 3rd LSD - 
                {
                    0: [1, 13, 21, 50],
                    1: [101],
                    2: [234],
                    3: [345],
                    4: [],
                    5: [],
                    6: [],
                    7: [],
                    8: [],
                    9: []
                }

            - array sorted by 1st and 2nd and 3rd least significant digit = 
                [1, 13, 21, 50, 101, 234, 345]

            - notice this is fully sorted!
            

*/
