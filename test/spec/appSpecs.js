describe("FizzBuzz Kata application", function() {
    var $appBody;
    beforeEach(function(){
        $appBody = $("#sut-frame").contents().find("body");
    });

    it("contains a hundred list items", function(){
        expect($appBody.find("li").length).toBe(100);
    });
});

