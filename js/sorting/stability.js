/*

    if you have a database with multiple fields, say a student base of student records,
    with fields such as student name, id, gpa, address, major, etc.
    
    - say we first sort the database by student name
    - then we sort the database by gpa using a stable algoritm
    - the result will be students with the same name will be next to eachother,
    AND STILL IN ALPHABETICAL ORDER

    - this is the key aspect of a stable sorting algoritm.
    - an unstable sorting algorithm will not preserve the prior ordering of the list

    - in other words, a sorting algorithm that preserves the relative ordering of 
    items with equal keys, is considered a stable sorting algo
*/


/*
--------------
    STABLE
--------------
- insertion sort
- bubble sort
- merge sort

-----------------
    NOT STABLE
-----------------
- selection sort
- quick sort


*/