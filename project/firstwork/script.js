$(document).ready(function(){
$('.menu__ad').click(function(){
    $('.nav').slideToggle(500);
    $('menu__show').toggleClass("active");
});
$(window).resize(function(){
 if($(window).width() > 700){
    $('.nav').removeAttr('style');
};

});
$(window).scroll(function(){
    $(".billboard").css({"top": $(window).scrollTop()/6});

});
    
});