$(document).ready(function(){
$('.bar').click(function(){
    $('.navigation').slideToggle(500);
    $(this).toggleClass("active");
});
$(window).resize(function(){
 if($(window).width() > 700){
    $('.navigation').removeAttr('style');
};

});
    
});