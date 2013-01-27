window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";

    function ListWidget(domId){
        var $el = $("#" + domId);
        createDomElementIfIdNotFound();

        this.showList = function(list){
            $.each(list, function(key, val){
                var $item = $("<li>", {text: val});
                $el.append($item);
            });
        };

        function createDomElementIfIdNotFound(){
            if($el.length == 0){
                $el = $("<ul>", {id: domId});
                $("body").append($el);
            }   
        }
    }
    
    fb.ListWidget = ListWidget;
}(window.fb));
