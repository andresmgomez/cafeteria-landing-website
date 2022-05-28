(function ($) {
	'use strict';
	// Hero Images Slick Slider
	$('.wide-slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		cssEase: 'linear',
		draggable: false,
		prevArrow: '<button class="PrevArrow"></button>',
		nextArrow: '<button class="NextArrow"></button>',
	});

	$('.carousel-cards').owlCarousel({
		items: 4,
		loop: true,
		dots: true,
		nav: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 4,
			},
		},
	});
})(window.jQuery);
