describe("FizzBuz interactor", function(){
    var interactor;

    it("asks for a sequence of 100 numbers", function(){
        interactor = new fb.FizzBuzzInteractor();
        var seqGenerator = new fb.Sequence();      
        interactor.attachSequenceGenerator(seqGenerator);
        spyOn(seqGenerator,"generate");
       
        interactor.start();

        expect(seqGenerator.generate).toHaveBeenCalledWith(100);
    });
});
