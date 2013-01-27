window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";

    function FizzBuzzInteractor(){
        var sequenceGenerator, numberListWidget;

        this.start = function(){
            var seq = sequenceGenerator.generate(100);
            numberListWidget.showList(seq);
        };

        this.attachSequenceGenerator = function (seqGen){
            sequenceGenerator = seqGen;
        }
        this.attachNumberListWidget = function (widget) {
            numberListWidget = widget;
        }
    }

    function ListWidget(domId){
        var $el = $("#" + domId);

        this.showList = function(list){
            $.each(list, function(key, val){
                var $item = $("<li>", {text: val});
                $el.append($item);
            });
        };
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
    fb.ListWidget = ListWidget;
}(window.fb));
