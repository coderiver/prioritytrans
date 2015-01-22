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

	// validation

	var form_validate = $('.js-validate');
	if (form_validate.length) {
		form_validate.each(function () {
			var form_this = $(this);
			$.validate({
				form : form_this,
				validateOnBlur : false,
				borderColorOnError : false,
				onSuccess : function() {
      				$('.js-step1').addClass('is-hidden');
      				$('.js-step2').removeClass('is-hidden');
      				$('.js-form').addClass('is-success');
      				$('.js-form-back').addClass('is-success');
      				return false;
    			}
			});
		});
	};

	// feedback form on main page

	$('.js-form-btn').on('click', function(){
		$(this).parents('.js-form').addClass('is-open');
	});
	$('.js-form-return').on('click', function(){
		$('.js-validate').trigger('reset');
		$('.js-form').removeClass('is-open is-success');
      	$('.js-form-back').removeClass('is-success');
      	$('.js-step1').removeClass('is-hidden');
      	$('.js-step2').addClass('is-hidden');
	});
	
});