window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";
    
    function Sequence(qty){
        var self = this;

        this.processor = function(x){return x;};

        this.generate = function(qty){
            result = [];
            for(var i = 1; i < qty+1; i++){
                result.push(self.processor(i));
            }
            return result;
        };

        this.attachProcessor = function(proc){
            self.processor = proc;
        }
    }

    fb.Sequence = Sequence;
}(window.fb));
