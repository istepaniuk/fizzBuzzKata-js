window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";
    
    var FIZZ = "Fizz",
        BUZZ = "Buzz",
        FIZZ_BUZZ = "FizzBuzz";

    var orderedRules = {
        whenDivisibleByBoth3And5: { 
            returns: FIZZ_BUZZ, 
            condition: divisibleByListCondition([3,5]) },
        whenDivisibleBy3: { 
            returns: FIZZ, 
            condition: divisibleByListCondition([3]) },
        whenDivisibleBy5: { 
            returns: BUZZ, 
            condition: divisibleByListCondition([5]) },
        whenItContainsTheDigit3: {
            returns :FIZZ,
            condition: containsDigitCondition(3) }
        };
    
    function divisibleByListCondition(divisors){
        return function(x) {
            return isDivisibleByList(x, divisors);
        };
    }

    function containsDigitCondition(digit){
        return function(x){
            return (x.toString().indexOf(digit) >= 0);
        }
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

    fb.fizzBuzzRules = orderedRules;
}(window.fb));
