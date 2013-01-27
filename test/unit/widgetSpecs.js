describe("List Widget", function(){
    it("creates a list item inside it's DOM element", function(){
        var domId = "number-list"
        $testEl = $("<ul>", {id: domId, style:"display:none;"});
        $("body").append($testEl)
        var widget = new fb.ListWidget(domId);

        widget.showList([98])

        domContents = $("#" + domId).html();
        expect(domContents).toContain("98");
    });

    it("creates it's DOM element if it does not exist", function(){
        var domId = "number-list"

        fb.ListWidget(domId);

        expect($("#"+domId).length).toBeGreaterThan(0);
        $("#"+domId).empty();
    });
});
