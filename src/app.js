(function(window, undefined) {
    "use  strict";
    
    var FIZZ = "Fizz",
        BUZZ = "Buzz",
        FIZZ_BUZZ = "FizzBuzz";

    var FIZZ_DIVS = [3],
        BUZZ_DIVS = [5],
        FIZZ_BUZZ_DIVS = [3,5];
    
    function fizzBuzz(input){
        if (isDivisibleByList(input, FIZZ_BUZZ_DIVS))
            return FIZZ_BUZZ;
        if (isDivisibleByList(input, BUZZ_DIVS))
            return BUZZ;
        if (isDivisibleByList(input, FIZZ_DIVS)) 
            return FIZZ;
        return input;
    }

    function isDivisibleByList(x, divisorList){
        for(var i = 0; i < divisorList.length; i++){
            if(isNotDivisible(x, divisorList[i])) 
                return false;
        }
        return true;
    }

    function isNotDivisible(x, by){
        return x % by != 0;
    }

    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
