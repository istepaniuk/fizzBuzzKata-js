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

    it("returns Fizz for other numbers divisible by 3", function(){
        expect(fb.fizzBuzz(6)).toEqual("Fizz");
        expect(fb.fizzBuzz(9)).toEqual("Fizz");
    });

    it("returns Buzz for other numbers divisible by 5", function(){
        expect(fb.fizzBuzz(20)).toEqual("Buzz");
        expect(fb.fizzBuzz(10)).toEqual("Buzz");
    });
});

