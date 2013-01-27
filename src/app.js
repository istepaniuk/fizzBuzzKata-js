(function(window, undefined) {
    "use  strict";
    
    function fizzBuzz(input){
        var rules = fb.fizzBuzzRules;
        for(var i in rules){
            if(rules[i].condition(input))
                return rules[i].returns;
        }
        return input;
    }

    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
