(function(window, undefined) {
    "use  strict";
    
    var FIZZ = "Fizz",
        BUZZ = "Buzz",
        FIZZ_BUZZ = "FizzBuzz";
    
    function fizzBuzz(input){
        if (isDivisible(input, 5) && isDivisible(input, 3))
            return FUZZ_BUZZ;
        if (isDivisible(input, 5))
            return BUZZ;
        if (isDivisible(input, 3)) 
            return FIZZ;
        return input;
    }

    function isDivisible(x, by){
        return x % by == 0;
    }
    
    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
