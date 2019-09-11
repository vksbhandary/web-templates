$(function(){
    "use strict";

    //Activate main slider
    $("#featured").carousel({
       interval: 3000,
       pause:false,
       keyboard:true
   });

   // Activate Testimonial Carausel
   $("#testimonial").carousel({
       interval: 3000,
       pause:false,
       keyboard:true
   });

   /// Activate Scrollpy
   var topoffset=50;
   $('body').scrollspy({
       target:"header .navbar",
       offset:topoffset
   });



    /// add inbody class to modify menu later
       var hash=$(this).find("li.active a").attr("href");
   if (hash!=="#featured"){
       $('header nav').addClass("inbody");
   }else{
       $('header nav').removeClass("inbody");
   }

    /// track via scrollspyeven

  $('.navbar-fixed-top').on('activate.bs.scrollspy',function(){
       var hash=$(this).find("li.active a").attr("href");
   if (hash!=="#featured"){
       $('header nav').addClass("inbody");
   }else{
       $('header nav').removeClass("inbody");
   }
  });

   /// Add animation to Services images
   $( "#services img.icon" ).addClass( "animated" );
    $( "#services img.icon" ).hover(
  function() {
    $( this ).addClass( "shake" );
  }, function() {
    $( this ).removeClass( "shake" );
  }
);

/// Add animation to chef images
   $( ".chef img.img-circle" ).addClass( "animated" );
    $( ".chef img.img-circle" ).hover(
  function() {
    $( this ).addClass( "rotateIn" );
  }, function() {
    $( this ).removeClass( "rotateIn" );
  }
);



/*
 * Smooth Scrolling gist from link => https://gist.github.com/planetoftheweb/6729f849d7db31061b2e
 */

  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
        var mobilemenu = $('.navbar-collapse.in' );
        if (mobilemenu.length){
          $('.navbar-collapse' ).removeClass( "in" );
        }
        console.log("clicked?")
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 1000);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling



/* scroll to top code*/



var amountScrolled = 300;

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

});
