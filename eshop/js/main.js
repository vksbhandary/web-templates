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
