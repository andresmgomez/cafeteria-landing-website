(function ($) {
	'use strict';
	// Smooth Scroll Site Sections
	var scroll = new SmoothScroll('a[href*="#"]', {
		options: {
			speed: 2000,
			speedAsDuration: true,
			easing: 'easeOutCubic',
			clip: true,
		},
	});

	// Top Navbar Scrolling Header
	var scrollFromTop = $(window).scrollTop();
	var displayHeader = $('show-header').height();
	var headerSection = $('header').height();

	if (scrollFromTop >= displayHeader - headerSection) {
		$('header').addClass('scroll-header');
	} else {
		$('header').removeClass('scroll-header');
	}

	// Hero Images Slick Effect
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
	// Pastrie Cards Carousel Effect
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
