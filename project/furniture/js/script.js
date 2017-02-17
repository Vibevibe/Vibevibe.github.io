 $(document).ready(function () {
     $(".show").click(function(){
         var pred = $(this).parent();
         console.log(pred)
         var img = pred.siblings("img")
         console.log(img)
        var lightbox = lity( img.attr("src"))
        $(document).on('click', '[data-lightbox]', lity);
     });
 });