(function($){
	jQuery(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		//header-carousel
		jQuery('.header-carousel').owlCarousel({
			items: 1,
		    loop: true,
		    nav: true,
		    dots: true,
		    navText: [
						'<i class="fas fa-chevron-left"></i>',
						'<i class="fas fa-chevron-right"></i>'
					]
		});

		//getting-carousel
		jQuery('.getting-carousel').owlCarousel({
			items: 1,
		    loop: true,
		    nav: false,
		    dots: true,
		});

		//client-carousel
		jQuery('.client-carousel').owlCarousel({
			items: 6,
		    loop: true,
		    center: true,
		    nav: false,
		    dots: false,
		    margin: 40,
		    responsive: {
		    	0: {
		    		items: 2.5,
		    		margin: 20,
		    	},
		    	576: {
		    		items: 3,
		    		margin: 30,
		    	},
		    	768: {
		    		items: 5,
		    		margin: 30,
		    	},
		    	768: {
		    		items: 6,
		    		margin: 40,
		    	},
		    }
		});

		//custom accordion
		jQuery(".filter-item-inner2").click(function() {
			if ($(this).hasClass("active")) {
		      	$(this).removeClass("active").next().slideDown();
		    } else {
		      	$(".filter-item-inner2").next().slideDown();
		      	$(".filter-item-inner2").removeClass("active");
		      	$(this).addClass("active").next().slideUp();
		    }
		    return false;
		})

		jQuery('[data-fancybox="gallery"]').fancybox({
			thumbs : {
				autoStart : true
				
			}
		});

		//nice slect

        jQuery('select').niceSelect();


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);