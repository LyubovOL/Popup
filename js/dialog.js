$(document).ready(function() {
    PopUpHide();

function PopUpShow(){
    $("#popup").show();
}
function PopUpHide(){
    $("#popup").hide();
}
function alignCenter(elem) {
    elem.css({ // назначение координат left и top
        left: ($(window).width() - elem.width()) / 2 + 'px',
        top: ($(window).height() - elem.height()) / 2 + 'px'
});
};
$('#button').bind('click', function(){
    alignCenter($('#popup-content'));
    $("#popup-content").show();
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=30)'});
});
});

//$(document).ready(function() {
//$( "#dialog" ).dialog({
//    autoOpen: false,
//    width: 500,
//    buttons: [
//        {
//            text: "Ok",
//            click: function() {
//                $( this ).dialog( "close" );
//            }
//        }
//    ]
//});
//$( "#button" ).click(function( event ) {
//    $("#popup").show();
//
//    event.preventDefault();
//});
//});