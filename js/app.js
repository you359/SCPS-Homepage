(function($, document, window){
	
	$(document).ready(function(){

		$('.dropdown-item').each(function (index, item) {
			$(this).mouseenter(function () {
				$(this).find('.dropdown-menu').fadeIn('fast');
			});
			$(this).mouseleave(function () {
				$(this).find('.dropdown-menu').fadeOut('fast');
			});
		})


		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();

			$('.dropdown-item').each(function (index, item) {
				$(this).mouseenter(function () {
					if(!$(this).find('.dropdown-menu').is(':animated'))
						$(this).find('.dropdown-menu').slideDown('fast');
				});
				$(this).mouseleave(function () {
					$(this).find('.dropdown-menu').slideUp('fast');
				});
			})
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true,
		});

		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){
			
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});
			
		}
	});

	$(window).load(function(){

	});

})(jQuery, document, window);