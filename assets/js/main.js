var fbh, fbw;
$(document).ready(function () {
    if($(window).width() > $(window).height()){
        fbh = ($(window).width() - 200) / 2;;
        fbw = $(window).width() - 200;
       
    }else{
        fbh = ($(window).height() - 200) / 2;;
        fbw = $(window).height() - 200;
    }
    $("#flipbook").turn({
        width: fbw
        , height: fbh
        , autoCenter: false
        , duration: 1000
    });
});
$( window ).resize(function() {
    if($(window).width() > $(window).height()){
        
       $("#flipbook").turn("display", "double");
    }else{
        $("#flipbook").turn("display", "single");
    }
});
$("body").click(function (event) {
    if (event.target != $("#menu img")[0]) {
        $("#menu img").attr('src', "assets/icons/menu.png");
        $("#menu").addClass('active');
        $(".btn").removeClass('active');
    }
    else {
        if ($("#menu").hasClass('active')) {
            $("#menu img").attr('src', "assets/icons/menu_closed.png");
            $("#menu").removeClass('active');
            $(".btn").addClass('active');
        }
        else {
            $("#menu img").attr('src', "assets/icons/menu.png");
            $("#menu").addClass('active');
            $(".btn").removeClass('active');
        }
    }
});
$("#pageFld").val($("#flipbook").turn("page"));
$("#flipbook").bind("turned", function (event, page, view) {
    $("#pageFld").val(page);
});
$("#pageFld").change(function () {
    $("#flipbook").turn("page", $(this).val());
});
$("#home").click(function () {
    $("#flipbook").turn("page", 1);
});
$("#prevBtn").click(function () {
    $("#flipbook").turn("previous");
});
$("#nextBtn").click(function () {
    $("#flipbook").turn("next");
});
function goto(p) {
    $("#flipbook").turn("page", p);
}
$(window).bind('keydown', function (e) {
    if (e.keyCode == 37) $('#flipbook').turn('previous');
    else if (e.keyCode == 39) $('#flipbook').turn('next');
});
function zoomDef(){
    $("#zoomRange").val(1);
    zoom(1);
}
function zoomDown(){
    var a =  parseFloat($("#zoomRange").val() ,10) - 0.5;
    $("#zoomRange").val(a);
    if(a <= 2 && a >= 1){
        zoom(a);
    }
}
function zoomUp(){
    var a =  parseFloat($("#zoomRange").val() ,10) + 0.5;
    $("#zoomRange").val(a);
    if(a <= 2 && a >= 1){
        zoom(a);
    }
}
function zoom(z){
    var val = parseFloat(z ,10)
    $("#flipbook").turn("zoom", val);
    if ($("#flipbook").turn("zoom") > 1) {
        /*$("#flipbook").turn("disable", true);*/
        $('#flipbook').css({pointerEvents: "none"})
        $("#main").css( 'cursor', 'move' );
    }
    else {
        $('#flipbook').css( 'cursor', 'auto' );
        /*$("#flipbook").turn("disable", false);*/
        $('#flipbook').css({pointerEvents: "all"})
        $("#main").css( 'cursor', 'auto' );
    }
}
$(function () {
    var curDown = false
        , curYPos = 0
        , curXPos = 0
    $(window).mousemove(function (m) {
        if (curDown === true) {
            $('#main').scrollTop($('#main').scrollTop() + (curYPos - m.pageY));
            $('#main').scrollLeft($('#main').scrollLeft() + (curXPos - m.pageX));
        }
    });
    $(window).mousedown(function (m) {
        curDown = true;
        curYPos = m.pageY;
        curXPos = m.pageX;
    });
    $(window).mouseup(function () {
        curDown = false;
    });
});
