$(document).ready(function() {
  $("article").hide();
  $("article").fadeIn(2500);
  $("article").hover(function(){
    $(this).css('opacity', '0.6');
    $(this).css('border-width', '5px');
  });
  $("article").mouseleave(function(){
    $(this).css('opacity', '1.0');
    $(this).css('border-width', '3px');
  });
});
