$(function(){

 $('[data-fancybox="gallery1"]').fancybox({
  transitionEffect: "fade",
  transitionDuration: 0,

});
 $('[data-fancybox="gallery2"]').fancybox({
  transitionEffect: "fade",
  transitionDuration: 0,



});

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.chart-header').addClass("sticky");
}
else{
$('.chart-header').removeClass("sticky");
}
});

//-------end sticky header--------
 
$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.chart-anonim').addClass("sticky");
}
else{
$('.chart-anonim').removeClass("sticky");
}
});
// $('.matches__slider').slick({
// prevArrow: false,
// nextArrow: false,
// slidesToShow: 5,
// slidesToScroll: 5,
// infinite: false,
// touchMove: false

// });


});
