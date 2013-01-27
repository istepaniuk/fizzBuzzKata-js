(function(window, undefined) {
    "use  strict";

    function fizzBuzz(input){
        if (isDivisibleBy5(input))
            return "Buzz";
        if (isDivisibleBy3(input)) 
            return "Fizz";
        return 1;
    }

    function isDivisibleBy3(x){
        return x % 3 == 0;
    }
    
    function isDivisibleBy5(x){
        return x % 5 == 0;
    }
    
    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
