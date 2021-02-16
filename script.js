$('.scrollto a').on('click', function () {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 440,
		easing: "linear"
	});
	return false;
});
new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	keyboard: {
		enable: true,
		onlyInViewport: true,
	},
	autoHeight: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
});