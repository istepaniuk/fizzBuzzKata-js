(function(window, undefined) {
    "use  strict";
    
    var FIZZ = "Fizz",
        BUZZ = "Buzz",
        FIZZ_BUZZ = "FizzBuzz";

    var FIZZ_DIVS = [3],
        BUZZ_DIVS = [5],
        FIZZ_BUZZ_DIVS = [3,5];

    var orderedRules = {
        fizzBuzz: { 
            returns: FIZZ_BUZZ, 
            condition: divisibleByListCondition(FIZZ_BUZZ_DIVS) },
        fizz: { 
            returns: FIZZ, 
            condition: divisibleByListCondition(FIZZ_DIVS) },
        buzz: { 
            returns: BUZZ, 
            condition: divisibleByListCondition(BUZZ_DIVS) },
        };
    
    function fizzBuzz(input){
        for(var i in orderedRules){
            if(orderedRules[i].condition(input))
                return orderedRules[i].returns;
        }
        return input;
    }

    function divisibleByListCondition(divisors){
        return function(x) {
            return isDivisibleByList(x, divisors);
        };
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
