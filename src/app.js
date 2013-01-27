(function(window, undefined) {
    "use  strict";

    function fizzBuzz(input){
        if (input == 5)
            return "Buzz";
        if (input % 3 == 0) 
            return "Fizz";
        return 1;
    }
    
    window.fb = window.fb || {};
    window.fb.fizzBuzz = fizzBuzz;
}(window))
