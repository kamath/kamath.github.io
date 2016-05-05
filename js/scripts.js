
var height = $("#square").height();
$('#square').css('height', height);
$('#square').css('width', height);
$("#h1").css('font-size', (.7 * parseInt(height)).toString() + "px")
$(".side").css('font-size', (.7 * parseInt($(this).parent().height())).toString() + "px")
var height = $(".col-md-9").height();
$('.swag').css('height', height);
$('.swag').css('max-width', $('.swag').height())
var height = $(".square").width();
$('.square').css('height', height);
$('.square').css('width', height);
var height = $(".square").width();
$('.square').css('height', height);
$('.square').css('width', height);
var height = $(".square6").width();
$('.square6').css('height', height);
$('.square6').css('width', height);
$(".square").children().hide();
$(".square").hover(function() {
    $(this).children().fadeIn(250)
    $(this).css('background-size', '200%')
    $(this).css('background-position', 'center center')
}, function() {
    $(this).children().fadeOut()
    $(this).css('background-size', 'cover')
    $(this).css('background-position', 'center center')
})
$(".square6").children().hide();
$(".square6").hover(function() {
    $(this).children().fadeIn(250)
    $(this).css('background-size', '200%')
    $(this).css('background-position', 'center center')
}, function() {
    $(this).children().fadeOut()
    $(this).css('background-size', 'cover')
    $(this).css('background-position', 'center center')
})
$("#kamath").hide();
$("#wavybg-wrapper").hide();
$(document).ready(function() {
    $("body").css('background', 'transparent')
    var height = $("#squareloader").height();
    $('#squareloader').css('height', height);
    $('#squareloader').css('width', height);
    $('#squareloader').css('background', 'rgba(255,255,255,0.5)');
    setTimeout(console.log('swag'), 3000);
    $("#squareloader").fadeOut();
    $("#kamath").fadeIn();
    $("#wavybg-wrapper").fadeIn();
});

$("body").css('background', '#047')

console.log('swag')
