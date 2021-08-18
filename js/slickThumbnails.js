$(document).ready(function(){
 $('.banner_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  speed:1000,
  easing:'ease',
  infinite:true,
  touchThreshold:10,
  waitForAnimate:false,
  fade: true,
  asNavFor: '.thumbnail_slider'
});
$('.thumbnail_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  speed:1000,
  easing:'ease',
  infinite:true,
  touchThreshold:10,
  waitForAnimate:false,
  asNavFor: '.banner_slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
 });