describe("FizzBuzz Kata application", function() {

    it("prints a list of a hundred items", function(){
        expect(theQuantityOfListItems()).toBe(100);
    });
    
    function theQuantityOfListItems(){
        var $appBody = $("#sut-frame").contents().find("body");
        return $appBody.find("li").length;
    }
});

