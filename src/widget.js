window.fb = window.fb || {};

(function(fb, undefined) {
    "use  strict";

    function ListWidget(domId){
        var $el = $("#" + domId);

        this.showList = function(list){
            $.each(list, function(key, val){
                var $item = $("<li>", {text: val});
                $el.append($item);
            });
        };
    }
    
    fb.ListWidget = ListWidget;
}(window.fb));
