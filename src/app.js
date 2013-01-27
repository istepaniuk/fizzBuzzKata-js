(function(window, undefined) {
    "use  strict";

    function fizzBuzz(input){
        if (input == 3) 
            return "Fizz";
        return 1;
    }
    
    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
