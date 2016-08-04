//smooth scroll
$(function smooth() {
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});

//efecto "rasho laser"
$("#hola").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

//flip, from http://simonlockyer.info/flip-div-css3-tutorial/
$(document).ready(function(){
    // set up hover panels
    // although this can be done without JavaScript, we've attached these events
    // because it causes the hover to be triggered when the element is tapped on a touch device
    $('.hover').hover(function(){
        $(this).addClass('flip');
    },function(){
        $(this).removeClass('flip');
    });
});

//change navbar color when scrolling
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.menu-menu').css('background-color', '#02AFB6');
       } else {
          $('.menu-menu').css('background-color', 'rgba(24, 255, 255, 0.3)');
       }
   });
});