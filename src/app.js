(function(window, undefined) {
    "use  strict";
    
    var FIZZ = "Fizz",
        BUZZ = "Buzz",
        FIZZ_BUZZ = "FizzBuzz";

    var FIZZ_DIVS = [3],
        BUZZ_DIVS = [5],
        FIZZ_BUZZ_DIVS = [3,5];
    
    function fizzBuzz(input){
        if (isDivisible(input, FIZZ_BUZZ_DIVS))
            return FIZZ_BUZZ;
        if (isDivisible(input, BUZZ_DIVS))
            return BUZZ;
        if (isDivisible(input, FIZZ_DIVS)) 
            return FIZZ;
        return input;
    }

    function isDivisible(x, byList){
        for(var i = 0; i < byList.length; i++){
            if(x % byList[i] != 0) 
                return false;
        }
        return true;
    }
    
    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
