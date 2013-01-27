describe("FizzBuz interactor", function(){
    var interactor, seqGenerator, listWidget;
    
    beforeEach(function(){
        interactor = fb.createFizzBuzzInteractor();
        seqGenerator = interactor.get().sequenceGenerator;
        listWidget = interactor.get().numberListWidget;
    });

    it("asks for a sequence of 100 numbers", function(){
        spyOn(seqGenerator, "generate").andCallFake(function(){
            return [];
        });
       
        interactor.start();

        expect(seqGenerator.generate).toHaveBeenCalledWith(100);
    });

    it("tells a widget to print the generated sequence", function(){
        var list = ["xxx", "yyy"];
        seqGenerator.generate = function(){ return list };
        spyOn(listWidget, "showList");

        interactor.start();

        expect(listWidget.showList).toHaveBeenCalledWith(list);
    });
});
