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

    fb.FizzBuzzInteractor = FizzBuzzInteractor;
}(window.fb));
