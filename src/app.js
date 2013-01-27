window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";
    
    function Sequence(qty){
        this.generate = function(){
            return [1];
        };
    }

    fb.Sequence = Sequence;
}(window.fb));
