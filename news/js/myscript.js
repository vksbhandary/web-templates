$(function(){
    "use strict";

    //Activate main slider
    $("#featured").carousel({
       interval: 3000,
       pause:"hover",
       keyboard:true
   });


   //////////////////// Search JS
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });


    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    });




/* scroll to top code*/



var amountScrolled = 100;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});


/*
 *      Shrink menu when its scrolled down and static
 *
 */


// var amountmenuScrolled = 40;
// $(window).scroll(function() {
// 	if ( $(window).scrollTop() > amountmenuScrolled ) {
// 		$('header .navbar.navbar-default').addClass('navbar-fixed-top');
//                 $('header .navbar.navbar-default').addClass('inbody');
//
// 	} else {
//             $('header .navbar.navbar-default').removeClass('navbar-fixed-top');
//             $('header .navbar.navbar-default').removeClass('inbody');
//
//     }
//
// });

});
