const menuIcon = $('.menu-icon');
const sideNav = $('.sidenav');
const sideNavClose = $('.sidenav-close-icon');

// Add and remove provided class names
function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// Open the side nav on click
menuIcon.on('click', function() {
  toggleClassName(sideNav, 'active');
});

// Close the side nav on click
sideNavClose.on('click', function() {
  toggleClassName(sideNav, 'active');
});



//SCROLL FADE
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".section-2-h1, .section-2-p, .section-2-button, .section-4-h1, .section-4-p, .section-4-button, .section-6-h1, .section-6-p, .section-6-button").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});