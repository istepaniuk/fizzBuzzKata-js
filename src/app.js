window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";
    
    function Sequence(qty){
        this.generate = function(qty){
            result = [];
            for(var i = 1; i < qty+1; i++){
                result.push(i);
            }
            return result;
        };
    }

    fb.Sequence = Sequence;
}(window.fb));
