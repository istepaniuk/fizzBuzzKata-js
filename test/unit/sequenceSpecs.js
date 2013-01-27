describe("Number sequence", function(){
    var sequence, qty;

    beforeEach(function(){
        sequence = new fb.Sequence();
    });

    it("contains 1 when asked one number", function(){
        qty = 1;

        var result = sequence.generate(qty);

        expect(result).toContain(1);
    });

    it("contains 1 and 2 when asked for two numbers", function(){
        qty = 2;

        var result = sequence.generate(qty);

        expect(result).toContain(1);
        expect(result).toContain(2);
    });

    it("proccess the numbers with an attached processor", function(){
        qty = 3;
        proc = function(){return "XXX"};
        sequence.attachProcessor(proc);

        var result = sequence.generate(qty);

        expect(result).toContain("XXX"); 
        expect(result.length).toBe(qty);
    });
});
