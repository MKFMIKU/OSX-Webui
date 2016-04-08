require.config({
    paths:{
        'jq' :'http://cdn.bootcss.com/jquery/2.2.1/jquery.min',
        'box':'./box/box',
        'ui' :'./box/lib/ui'
    } 
});

require(['jq','box'],function($,box){
    box.newBox('box');
});