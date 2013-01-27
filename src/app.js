(function(window, undefined) {
    "use  strict";
    
    var FIZZ = "Fizz",
        BUZZ = "Buzz",
        FIZZ_BUZZ = "FizzBuzz";

    var FIZZ_DIV = 3,
        BUZZ_DIV = 5;
    
    function fizzBuzz(input){
        if (isDivisible(input, BUZZ_DIV) && isDivisible(input, FIZZ_DIV))
            return FIZZ_BUZZ;
        if (isDivisible(input, BUZZ_DIV))
            return BUZZ;
        if (isDivisible(input, FIZZ_DIV)) 
            return FIZZ;
        return input;
    }

    function isDivisible(x, by){
        return x % by == 0;
    }
    
    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
