$(function(){
    "use strict";
    $(document).ready(function(){
    resizeSlider();
    });
    window.onresize = function(event) {
    resizeSlider();
    }
    function resizeSlider() {
      var height = window.innerHeight - 40
      console.log(height + 'px');
      $('#mainSlider').css({'height': height + 'px'});
      $('.carousel-inner').css({'height': height + 'px'});
    }

    // function makeFixed(el){
    //   el.css( "position", "fixed" );
    //   el.css( "top", "0px" );
    //   var width = $(window).width()	|| document.body.clientWidth || 0	;
    //   var left = "62%";
    //   // else if(width<575.98){
    //   //   left =  "62.2%";
    //   // }else
    //   //  if(width<767.98){
    //   //   left =  "62.2%";
    //   // }else
    //    if (width>1199.98) {
    //     left =  "62%";
    //   }
    //   el.css( "left", left );
    // }
    function ShowSlidingEffect(el,top){
      el.css( "position", "relative" );
      el.css( "top", top+"px" );
    }

    $('.carousel').on('slid.bs.carousel', function () {
      console.log("Sliding")
      var activeitem = 0, present = false;

      $('.carousel .carousel-inner .carousel-item').each(function ( index) {

        if ($( this ).hasClass("active")){
          activeitem = index;
          present = true;

        }
      });
      if (present){
        $('.carousel .carousel-inner .carousel-caption a').each(function ( index) {

          if (activeitem == index){
             $( this ).addClass("slider-stories-special");
          }else{
            $( this ).removeClass("slider-stories-special");
            $( this ).addClass("slider-stories");
          }
        });
      }


    });

    document.addEventListener("scroll", function(event) {
      var scroll =window.pageYOffset;
      $('.story-container').each(function( index ) {
        var position = $( this ).position();
        var el =$( this ).find( ".story-sidebar" );
        // console.log(index +" position "+position.top);
        // console.log(index +" scroll "+scroll);
        // console.log("height "+$( this ).height());
        // && scroll < position.top + $( this ).height
        if (scroll>=position.top+60){
          // console.log("Visible");
          // makeFixed(el);
        }else if (scroll-position.top -$( this ).height <=0) {
          console.log("test");
          ShowSlidingEffect(el,scroll-position.top -$( this ).height -$(el).height);
        }
      });


    });

});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
