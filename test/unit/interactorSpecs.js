describe("FizzBuz interactor", function(){
    var interactor;

    it("asks for a sequence of 100 numbers", function(){
        interactor = new fb.FizzBuzzInteractor();
        var seqGenerator = new fb.Sequence();      
        var listWidget = { showList: function(){} };
        interactor.attachSequenceGenerator(seqGenerator);
        interactor.attachNumberListWidget(listWidget);
        spyOn(seqGenerator,"generate");
       
        interactor.start();

        expect(seqGenerator.generate).toHaveBeenCalledWith(100);
    });

    it("tells a widget to print the generated sequence", function(){
        var list = ["xxx", "yyy"];
        interactor = new fb.FizzBuzzInteractor();
        var seqGenerator = { generate: function(){return list} };
        var listWidget = { showList: function(){} };
        interactor.attachSequenceGenerator(seqGenerator);
        interactor.attachNumberListWidget(listWidget);
        spyOn(listWidget,"showList");

        interactor.start();

        expect(listWidget.showList).toHaveBeenCalledWith(list);
    });
});
