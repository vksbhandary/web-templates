var topMenu = $('.activesection'),
  topMenuHeight = 145.296875+10 ,
  // All list items
  menuItems = $('.allcategory_container').find('.main_category_container');

// Bind to scroll
function initActiveMenu(element) {
  var fromTop = $(element).scrollTop()+topMenuHeight ;
  // Get id of current scroll item
  var currentMenu = null;
  var cur = menuItems.map(function () {

    if ($(this).offset().top < topMenuHeight) {
      currentMenu = $(this);
      return this;
    }
  });

  const activehtml = currentMenu.find('.main_category_name').html();
  $('.main_category_container.active').removeClass('active');
  currentMenu.addClass('active');
  topMenu.html(activehtml);
}
$('.allcategory_container').scroll(function () {
  initActiveMenu($(this));
});

initActiveMenu($('.allcategory_container'));

function getCurrentScroll(element){
  var firstprod= $(element).find('.product_single').first();
  var current_scroll = $(element).offset().left - firstprod.offset().left;
  return current_scroll;
}
function getScrollWidth(element){
  var lastprod = $(element).find('.product_single').last();
  var maxcroll = lastprod.offset().left + lastprod.width() - $(element).width() - $(element).offset().left;
  return maxcroll;
}
$('.product_slider').on('scroll',function(){
  var element = $(this);
  var current_scroll = getCurrentScroll(element), maxcroll = getScrollWidth(element);
  var leftbutton = $(this).parent().find('.slide-button.left');
  var rightbutton = $(this).parent().find('.slide-button.right');
  if (current_scroll > 0){
    leftbutton.css('visibility','visible');
  }else{
    leftbutton.css('visibility','hidden');
  }
  if (maxcroll > 0){
    rightbutton.css('visibility','visible');
  }else{
    rightbutton.css('visibility','hidden');
  }
});

$('.slide-button.left').on('click',function(){
  var slider =$(this).parent().find('.product_slider');
  var current_scroll = getCurrentScroll(slider), maxcroll = getScrollWidth(slider);
  if (current_scroll>0){
    slider.animate({
      scrollLeft: current_scroll-350
  }, 1000);
  }
});

$('.slide-button.right').on('click',function(){
  var slider =$(this).parent().find('.product_slider');
  var current_scroll = getCurrentScroll(slider), maxcroll = getScrollWidth(slider);
  if (maxcroll>0){
    slider.animate({
      scrollLeft: current_scroll+350
  }, 1000);
  }
});