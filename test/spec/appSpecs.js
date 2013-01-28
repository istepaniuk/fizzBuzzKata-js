describe("FizzBuzz Kata application", function() {
    var $appBody;
    beforeEach(function(){
        $appBody = $("#sut-frame").contents().find("body");
    });

    it("contains a hundred list items", function(){
        expect($appBody.find("li").length).toBe(100);
    });

    it("contains some Fizz, Buzz and FizzBuzz list items", function(){
        expect(containsLiWithText($appBody, 'Buzz')).toBeTruthy();
        expect(containsLiWithText($appBody, 'Fizz')).toBeTruthy();
        expect(containsLiWithText($appBody, 'FizzBuzz')).toBeTruthy();
    });
    
    function containsLiWithText($element, text){
       var selector = "li:contains('" + text + "')";
       return $element.find(selector).length > 0;
    }
});

