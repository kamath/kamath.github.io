new WOW().init();
/*
$(document).ready(function() {
	$("#maincurtain").addClass('short')
})*/

//tan = Math.atan($(window).height*.2/$(window).width())
console.log(Math.atan(2))
tan = 360 - parseInt(Math.atan($(window).height() * .2 / $(window).width()) * 180 / 3.14)
console.log(tan)
$(document).ready(function() {
    $(".rotated").css('-ms-transform', 'rotate(' + tan + 'deg)') /* IE 9 */
    $(".rotated").css('-webkit-transform', 'rotate(' + tan + 'deg)') /* IE 9 */
    $(".rotated").css('transform', 'rotate(' + tan + 'deg)') /* IE 9 */
})

$(".square").css('height', $(".square").parent().find('.m9').height()*1.5)
$(".square").css('width', $(".square").height())
//$(".square").css('right', $(".square").parent().find('.m9').width())
$(".square").css('top', -($(".square").height() - $(".square").parent().find('.m9').height())/2)

$(".rect").css('height', $('.rect').width()*.75)