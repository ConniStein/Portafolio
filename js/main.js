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

//hover proyectos
$(document).ready(function(){
  $(".descripcion").hide();
  $(".proyect-caja").hover(function() {
    $(this).show();
  })
});

//navbar color
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#f0f0f0');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
    }
});
