describe("FizzBuz interactor", function(){
    var interactor, seqGenerator, listWidget;
    
    beforeEach(function(){
        interactor = new fb.FizzBuzzInteractor();
        seqGenerator = new fb.Sequence();      
        listWidget = { showList: function(){} };
        interactor.attachSequenceGenerator(seqGenerator);
        interactor.attachNumberListWidget(listWidget);
    });

    it("asks for a sequence of 100 numbers", function(){
        spyOn(seqGenerator,"generate");
       
        interactor.start();

        expect(seqGenerator.generate).toHaveBeenCalledWith(100);
    });

    it("tells a widget to print the generated sequence", function(){
        var list = ["xxx", "yyy"];
        var seqGenerator = { generate: function(){ return list }};
        interactor.attachSequenceGenerator(seqGenerator);
        spyOn(listWidget, "showList");

        interactor.start();

        expect(listWidget.showList).toHaveBeenCalledWith(list);
    });
});
