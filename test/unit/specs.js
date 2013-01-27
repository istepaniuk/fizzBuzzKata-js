describe("FizzBuzz", function() {
	it("returns 1 for 1",function(){
		expect(fb.fizzBuzz(1)).toEqual(1);
	});

    it("returns Fizz for 3", function(){
        expect(fb.fizzBuzz(3)).toEqual("Fizz");
    });

    it("returns Buzz for 5", function(){
        expect(fb.fizzBuzz(5)).toEqual("Buzz");
    });
});

