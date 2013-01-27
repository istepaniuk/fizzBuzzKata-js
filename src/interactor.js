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
        interactor.attachNumberListWidget(new fb.ListWidget("number-list"));
        interactor.attachSequenceGenerator(new fb.Sequence());
        return interactor; 
    }

    fb.FizzBuzzInteractor = FizzBuzzInteractor;
    fb.createFizzBuzzInteractor = createFizzBuzzInteractor;
}(window.fb));
