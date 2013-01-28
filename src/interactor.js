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
        };

        this.attachNumberListWidget = function (widget) {
            numberListWidget = widget;
        };
    
        this.get = function(){
            return {
                numberListWidget: numberListWidget,
                sequenceGenerator: sequenceGenerator
            };
        };
    }

    function createFizzBuzzInteractor(){
        var interactor = new FizzBuzzInteractor();
        var sequence = new fb.Sequence();
        sequence.attachProcessor(fb.fizzBuzz);
        interactor.attachSequenceGenerator(sequence);
        interactor.attachNumberListWidget(new fb.ListWidget("number-list"));
        return interactor; 
    }

    fb.FizzBuzzInteractor = FizzBuzzInteractor;
    fb.createFizzBuzzInteractor = createFizzBuzzInteractor;
}(window.fb));
