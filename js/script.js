$(document).ready(function(){
$('#btnNav').click(function(){
    $('.navigation').fadeToggle(500);
    $(this).toggleClass("active");
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
        var father = $(this).parent();
        father.next(".table__container").slideToggle(500);
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
        var carousel = $('.jcarousel').jcarousel({
            // Configuration goes here

            list: '.jcarousel-list',
            items: '.jcarousel-item',
            wrap: 'circular'
        }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
        $('.prevSL').jcarouselControl({
            target: '-=1',
            carousel: carousel
        });
        $('.nextSL').jcarouselControl({
            target: '+=1',
            carousel: carousel
        });
        var target = $('.jcarousel').jcarousel('target');
        $('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
            .on('jcarouselpagination:inactive', 'a', function () {
                $(this).removeClass('active');
            }).jcarouselPagination({
            'perPage': 1,
            'item': function (page, carouselItems) {

                return '<a class="carouselPagination" href="#' + page + '"></a>';
            }
        });
        /*WORKERS*/
        $('.workers-carousel')
            .on('jcarousel:create jcarousel:reload', function() {
                var element = $(this),
                    width = element.innerWidth();

                if (width > 900) {
                    width = width / 4;
                } else if (width > 600) {
                    width = width / 2;
                }

                element.jcarousel('items').css('width', width + 'px');
            })
        var wcarousel = $('.workers-carousel').jcarousel({
            list: '.workers-list',
            items: '.workers-item',
            animation: {
                duration: 800,
                easing:   'linear',
                complete: function() {
                }},
            wrap: 'circular'
        }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
        $('.workerPrevSL').jcarouselControl({
            target: '-=1',
            carousel: wcarousel
        });
        $('.workerNextSL').jcarouselControl({
            target: '+=1',
            carousel: wcarousel
        });
        //WORK SLIDER
        $('.work .workers-carousel')
            .on('jcarousel:create jcarousel:reload', function() {
                var element = $(this),
                    width = element.innerWidth();

                if (width > 900) {
                    width = width / 3.2;
                } else if (width > 600) {
                    width = width / 2;
                }

                element.jcarousel('items').css('width', width + 'px');
            })
        var wcarousel = $('.work .workers-carousel').jcarousel({
            list: '.workers-list',
            items: '.workers-item',
            animation: {
                duration: 800,
                easing:   'linear',
                complete: function() {
                }},
            wrap: 'circular'
        }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });
        $('.work .workerPrevSL').jcarouselControl({
            target: '-=1',
            carousel: wcarousel
        });
        $('.work .workerNextSL').jcarouselControl({
            target: '+=1',
            carousel: wcarousel
        });
    });
});


    





