 $(document).ready(function () {
     
     
     $(".show").click(function(){
        var lightbox = lity( $(this).parent().siblings("img").attr("src"))
        $(document).on('click', '[data-lightbox]', lity);
     });
     
     
 });