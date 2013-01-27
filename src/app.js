window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";
    
    function fizzBuzz(input){
        var rules = fb.fizzBuzzRules;
        for(var i in rules){
            if(rules[i].condition(input))
                return rules[i].returns;
        }
        return input;
    }

    fb.fizzBuzz = fizzBuzz;
}(window.fb));
