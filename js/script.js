$(document).ready(function(){
$('.btnNav').click(function(){
    $('.navigation').fadeToggle(500);
    $($this).toggleClass("active");
});

    
    $(".san").click(function(){
        $(".san .down").toggleClass("dispNo");
        $(".san .up").toggleClass("dispNo");
        $(this).next(".ul_san").fadeToggle(500);
    });
    
      $(".kitch").click(function(){
        $(".kitch .down").toggleClass("dispNo");
        $(".kitch .up").toggleClass("dispNo");
        $(this).next(".ul_san").fadeToggle(500);
    });
    
    
    $('.price .table__container').hide();
    $(".btn-green").click(function(){
        $(this).next(".table__container").slideToggle(500);
        $(this).toggleClass("activeBtn");
         return false;
    });
    
    //MODAL
    
    $('#call').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400,
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);  
		});
	});

	$('#modal_close, #overlay').click( function(){ 
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	});
    
    //SLIDER
    $(function() {
    $('.jcarousel').jcarousel({
        // Configuration goes here
    });
    });
    $('.prevSL').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
    });

    $('.nextSL').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
        
    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        },
    });
        
});
    
});




