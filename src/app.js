window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";

    function FizzBuzzInteractor(){
        var sequenceGenerator;

        this.start = function(){
            sequenceGenerator.generate(100);
        };

        this.attachSequenceGenerator = function (seqGen){
            sequenceGenerator = seqGen;
        }
    }
    
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
    fb.FizzBuzzInteractor = FizzBuzzInteractor;
}(window.fb));
