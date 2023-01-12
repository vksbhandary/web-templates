$(function(){
    "use strict";

function toggleMenu(){
  $('.collapse').collapse("hide");
  // console.log("collapsing");
}

    window.onresize = function() {
      var width = window.innerWidth;
        if (window.innerWidth > 767) {
          toggleMenu();
        }
    }

// var amountmenuScrolled = 50;
//
// function check_scroll(){
//   if ( $(window).scrollTop() > amountmenuScrolled ) {
// 		$('.header-menu .navbar').addClass('navbar-fixed-top');
//     $('.header-menu .navbar').addClass('inbody');
//     $('.header-menu .navbar').addClass('fixed-top');
//
// 	} else {
//             $('.header-menu .navbar').removeClass('navbar-fixed-top');
//             $('.header-menu .navbar').removeClass('inbody');
//             $('.header-menu .navbar').removeClass('fixed-top');
//
//     }
// }

var Slider = $('.owl-carousel');
if(Slider.length) {
Slider.owlCarousel({
 margin:30,
 autoplay:true,
 autoplayTimeout:1000,
 autoplayHoverPause:true,
 loop:true,
 responsive:{
           400:{
               items:1
           },
           663:{
               items:2
           },
           992:{
               items:2
           }
       },
});
}

$(window).scroll(function() {
  // check_scroll();
});

$(document).ready(function(){
  // check_scroll();
});

});
