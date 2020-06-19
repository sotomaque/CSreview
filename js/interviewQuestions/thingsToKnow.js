/*
    (1)
        let vs var
        - let: block scope - dies at the end of the block
        - var: functional scope - dies at the end of the function it was defined in
                - hoisted variables
        
        i.e. 

            function foo() {
                let x = 1;

                if (x == 1) {
                    let y = 2;
                }

                console.log(x, y); // error, y is not defined
            }
    
    (2)
        double == vs tripe ===
        - double only compares value
            - first it trys to make types on both sides equal,
            so its not that it doesnt compare types, it that it
            converts type of the element on the right to the type
            of the element on the left
        - right compares value and type

        i.e. 
            if (1 == '1') // true
            if (1 === '1') // false


    (3)
        let vs const

        - const: after first assignment, you cannot change value,
            - we can update values of an object defined using const however
            - if its not a primitive type, we can modify but not reassign
        - let: you can change value, even type with let


        i.e.
            let height = '2 meters'
            const color = 'red'
            const people = [1, 2, 3]
            
            height = 2.25; // works fine (changing type from string to number)
            color = 'blue'; // fails as we are trying to reassing a variable defined with const
            people.push(4) // works

    (4)
        null vs undefined
            - both are 'falsy' values
            - when you define a variable but dont give it a value, it automatically gives a value of undefined
                - a human would never give a variable a value of undefined
                - instead we would use 'null'
                - this lets us distinguish scenarios where it is undefined bc it was defined and never given a value
                vs scenarios where it is null bc we changed its value at some point to null

    (5)
        use of arrow functions

    (6) 
        prototypal inheritence
            - every object has a method called prototype
            - when you call a particular method on an obj, it first looks at 
            its own properties to see if its there, if not it will look at its
            parents

            i.e.

            let car = function(model = 'ford') {
                this.model = model;
            }

            car.prototype.getModel = function() {
                return this.model;
            }

            const nissan = new car('nissan')
            console.log(nissan.getModel()) // 'nissan'

    (7)
        function declaration vs function expression
        
        function declaration:
            - hoisted, can be used before declaration
        i.e.
            function foo() {
                // do stuff
            }

        function expression: 
            - because it is saved to a variable it behaves like a variable, so
            if we are using let, it cannot be used before declaration 
            - used if we want to pass a funciton to another function, by passing in 
            the variable (which holds the function) to the other function
            - annonymous function saved to a variable
        i.e.
            let foo = function() {
                // do stuff
            }
    
    (7)
        Promises
            - JS way of handling async logic
            - can chain logic on that wont execute until preceeding parts have resolved using .then
            - can also catch errors using .catch

    (8)
        setTimeout()

        i.e.
            setTimeout(function() {
                console.log('a');
            }, 0)

            console.log('b')
            console.log('c')

            - order of print statements:
                'b'
                'c'
                'a'
            - despite the setTimeout having a time of 0, it will
            execute a function which is asynchronous, this means
            it has to wait for everything else on the stack to resolve
            before it gets a chance to express its output 
                - so console.log('b') and console.log('c') get executed, 
                then the stack is cleared so now the function within 
                the setTimout can run and console.log('a') finally gets 
                executed

    (9)
        what is closure and how do we use it
        - nothing but functions with preserved data
        
        - when a function returns another function, the returning function
        will hold its enviroment, basically all the variables needed

        i.e.

            let obj = function() {
                let i = 0;

                return {
                    setI(k) {
                        i = k;
                    },
                    getI() {
                        return i;
                    }

                }
            }
*/