(function(window, undefined) {
    "use  strict";

    function fizzBuzz(input){
        if (input == 5)
            return "Buzz";
        if (isDivisibleBy3(input)) 
            return "Fizz";
        return 1;
    }

    function isDivisibleBy3(x){
        return x % 3 == 0;
    }
    
    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
