head.ready(function() {

	$('.menu-btn').on('click', function(){
		$(this).toggleClass('is-open');
		$('.js-nav').toggleClass('is-open');
	});

	// slick

	$('.js-slick').slick({
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		slidesToShow: 1
	});

	$('.js-slick-crls').slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToShow: 1
	});

	var total = $('.driver').length;
	
	$('.js-drivers').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		onInit: function(){
			$('.drivers__total').text(total);
		},
		onAfterChange: function(){
			var index = $('.js-drivers').slickCurrentSlide();
			index++;
			$('.drivers__current').text(index);
		}
	});

	$('.drivers__prev').on('click', function(){
		$('.js-drivers').slickPrev();
		return false;
	});
	$('.drivers__next').on('click', function(){
		$('.js-drivers').slickNext();
		return false;
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

	// clouds parallax effect
	
	function cloudsParallax(){

		$('.js-cloud').each(function(){
			var cloud = $(this),
				yPos = -($(window).scrollTop() / cloud.data('speed'));
				
			if (cloud.data('dir') == 'left') {
				cloud.css('left', yPos);
			}
			else if(cloud.data('dir') == 'right') {
				cloud.css('right', yPos);
			}

		});
		

	};
	cloudsParallax();
	
	// transport bg animation

	$(window).scroll(function(){
		var opacity = ($(window).scrollTop() / $('.transport').height());
		var opacity2 = (1 - opacity);
		$('.js-bg1').css('opacity', opacity2);
		$('.js-bg2').css('opacity', opacity);
	});

	// window scroll function

	$(window).scroll(function(){
		cloudsParallax();
	});
	

});