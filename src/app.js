(function(window, undefined) {
    "use  strict";

    function fizzBuzz(input){
        if (isDivisible(input, 5) && isDivisible(input, 3))
            return "FizzBuzz";
        if (isDivisible(input, 5))
            return "Buzz";
        if (isDivisible(input, 3)) 
            return "Fizz";
        return input;
    }

    function isDivisible(x, by){
        return x % by == 0;
    }
    
    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
