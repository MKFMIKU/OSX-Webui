define(['jq','ui'], function(jq,ui) {
    'use strict';
    function newBox(id){
        var $box = $('#'+id);
        $box.css(ui.style);
        $box.append('<div id="box-titlebar"></div>');
        $('#box-titlebar').css(ui.titleBar);
        $box.append('<div id="bar-content"></div>');
        $('#bar-content').css(ui.content);
    }
    
    return {
        newBox:newBox
    };     
});