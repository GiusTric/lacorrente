(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/*Slider*/

$('.slider').slider({
    full_width: true,
    interval: 1000
});

$('.slider').slider('pause');

$('#nextBtn').click(function(){
    $('.slider').slider('start');
    setTimeout(function(){
        $('.slider').slider('pause');
    },800);
});

/*Galleria*/

$(document).ready(function(){
    $('.materialboxed').materialbox();
});