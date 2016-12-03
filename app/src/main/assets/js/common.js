/*var app = (function(){
    var init = function(){};
    return {init:init}
})();*/

var app = (function(){
    var init = function(){
        location.href = 'second.html';
    };

    var move = function(url){
        location.href = url;
     };

    var second = function(){};

    return {
        init:init,
        second:second,
        move:move
    }
})();