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

    it("returns the input for other numbers not divisible by either 5 or 3", function(){
        expect(fb.fizzBuzz(2)).toEqual(2);
        expect(fb.fizzBuzz(4)).toEqual(4);
    });
});

