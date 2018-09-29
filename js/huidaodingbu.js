$(function() {
//  $(window).scroll(function() {
//      if ($(window).scrollTop() > 400){
//          $('div.fanhuidingbu').show();
//      }else{
//          $('div.fanhuidingbu').hide();
//      }
//  });
    $('div.fanhuidingbu').click(function() {
        $('html, body').animate({scrollTop: 0}, 350);
    });
});