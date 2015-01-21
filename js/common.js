head.ready(function() {

	$('.menu-btn').on('click', function(){
		$(this).toggleClass('is-open');
		$('.js-nav').toggleClass('is-open');
	});


	// slick news on main page

	$('.js-slick').slick({
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		slidesToShow: 1
	});
	
});