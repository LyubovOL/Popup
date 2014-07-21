$(document).ready(function() {
function alignCenter(elem) {
    elem.css({
        left: ($(window).width() - elem.width()) / 2 + 'px'
});
};
$('#button').bind('click', function(){
    alignCenter($('#popup-content'));
    $(window).resize(function() {
        alignCenter($('#popup-content'));
    })
    $("#popup-content").show();
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=30)'});
});
$('#proceed-to-checkout').bind('click', function(){
    $("#popup-content").hide();
    $('#overlay').hide();
});
$('#image-close').bind('click', function(){
    $("#popup-content").hide();
    $('#overlay').hide();
});
});