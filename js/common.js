head.ready(function() {

  $(document).click(function(){
    $('.js-calc-list').removeClass('is-open');
  });

	$('.js-menu').on('click', function(){
		$('.menu-btn').toggleClass('is-open');
    //$('.js-menu-btn-text').toggleClass('is-open');
    $(this).toggleClass('is-open');
    $('.js-menu-btn-text').fadeIn(200);
    $('.js-menu-btn-text-close').fadeOut(200);
		$('.js-nav').toggleClass('is-open');
    if($('.js-menu').hasClass('is-open')){
      //$('.js-menu-btn-text').text('закрыть');
      $('.js-menu-btn-text-close').fadeIn(200);
      $('.js-menu-btn-text').fadeOut(200);
    }
    else {
      $('.js-menu-btn-text').text('меню');
    }
	});

	// slick

	$('.js-slick').slick({
		infinite: true,
		fade: true,
		dots: true,
		arrows: false,
		slidesToShow: 1
	});
  
  $('.js-slick-news').slick({
    infinite: true,
    speed: 600,
    fade: true,
    arrows: false,
    dots: true,
    swipe: false,
    slidesToShow: 1,
    slide: 'a'
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
    fade: true,
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

	// gallery

	$('.js-gallery-for').slick({
		  slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	fade: true,
    	asNavFor: '.js-gallery-nav',
      onAfterChange: function(){
          var curIndex = $('.js-gallery-for').slickCurrentSlide();
          $('.js-gallery-nav').find('.slick-slide').removeClass('current');
          $('.js-gallery-nav').find('.slick-slide[index='+curIndex+']').addClass('current');
      }
	});
	$('.js-gallery-nav').slick({
		  slidesToShow: 4,
    	slidesToScroll: 1,
    	asNavFor: '.js-gallery-for',
    	focusOnSelect: true,
      onInit: function(){
        $('.js-gallery-nav').find('.slick-slide[index="0"]').addClass('current');
      }
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
        scrollToTopOnError : false,
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

	// popup init/close

	function popupForm(){
		var popup = $('.js-popup-form');

		$('.js-popup-btn').on('click', function(){
			popup.addClass('is-open');
		});
		popup.find('.js-popup-close').on('click', function(){
			popup.removeClass('is-open');
			popup.find('.js-validate').trigger('reset');
			popup.find('.js-step1').removeClass('is-hidden');
      		popup.find('.js-step2').addClass('is-hidden');
		});	
	};

	if ($('.js-popup-form').length) {
		popupForm();
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

	// map
	
  if ($('.map').length) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('YMapsID', {
          center: [53.938615, 27.600765],
          zoom: 14,
          controls: []
      });
      myMap.behaviors.disable('scrollZoom');
     // Создаем метку с помощью вспомогательного класса.
        myPlacemark1 = new ymaps.Placemark([53.938615, 27.600765], {
            // Свойства.
            
            balloonContent: 'Luxplast',
            hintContent: 'Г. МИНСК, УЛ. МЕЛЕЖА 22 А'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            iconLayout: 'default#image',
            iconImageSize: [36, 48],
            iconImageHref: 'img/marker.png'
           
        });

     myMap.geoObjects.add(myPlacemark1)

    });
  };


  	// calculator

  	function calculation(){

  		// add one more input
  		$('.js-calc-add').on('click', function(){
  			$('.js-calc-throw').show();
  			$(this).hide();
  			return false;
  		});
      // remove one more input
      $('.js-calc-remove').on('click', function(){
        $('.js-calc-throw').hide();
        $('.js-calc-add').show();
      });

  		// input change events
  			var item = $('.js-calc-block');
  			
        item.find('.js-calc-input').on('input', function(event){
  				$(this).parent().find('.js-calc-reset').addClass('is-active');
  				if ($(this).val().length == 0) {
  					$(this).parent().find('.js-calc-reset').removeClass('is-active');
  				};
          event.stopPropagation();
  			});
        
        item.find('.js-calc-input').on('click', function(event){
          $('.js-calc-list').removeClass('is-open');
          $(this).parent().find('.js-calc-list').addClass('is-open');
          event.stopPropagation();
        });

  			$('.js-calc-reset').on('click', function(){
  				$(this).prev().val('');
  				$(this).removeClass('is-active');
  			});
      
  		// result button
  		$('.js-calc-sbmt').on('click', function(){
  			$('.js-calc-insert').addClass('is-hidden');
  			$('.js-calc-result').addClass('is-open');
  		}); 	
  		// refresh
  		$('.js-calc-restart').on('click', function(){
  			$('.js-calc-result').removeClass('is-open');
  			$('.js-calc-insert').removeClass('is-hidden');
  			$('.js-calc-input').val('');
  			$('.js-calc-reset').removeClass('is-active');
  			$('.js-calc-list').removeClass('is-open');
        $('.js-calc-throw').hide();
        $('.js-calc-add').show();
  		});

  	}
  	if ($('.js-calc').length) {
  		calculation();
  	};

  	// inner -map
  	$(".js-draggable").draggable();
  	
  	function innerMapFixed(){
  		var height = $(window).outerHeight();
      $('.center__lines .line').css('height', height);
  		//height = (height - 84);
  		if ($(window).scrollTop() >= 700) {
  			$('.js-inner-map').addClass('is-fixed');
  			$('.js-geography-cont').css('margin-top', height);

  		}
  		else {
  			$('.js-inner-map').removeClass('is-fixed');
  			$('.js-geography-cont').css('margin-top', 0);
  		}
  		
  	}
  	innerMapFixed();

  	// scroll down btn
  		
  	$('.js-scroll-down').on('click', function(){
  		$('html, body').animate({
       		scrollTop: ($('.m-geography').offset().top - 200)
    	}, 500);
    	return false;
  	});

  	// animation appearing

  	function appeareAnimation(){ 
  		$('.animate').each(function(){
  			var item_coor = $(this).offset().top,
  				start_Y = ($(document).scrollTop() + $(window).height());
  			if (start_Y >= item_coor) {
  				$(this).addClass('is-animated');
  			};
  		
  		});
  	}
  	appeareAnimation();

    // hide text

    function hideText(text, length){
      if (text == null) {
              return "";
          }
          if (text.length <= length) {
              return text;
          }
          text = text.substring(0, length);
          last = text.lastIndexOf(" ");
          text = text.substring(0, last);
          $('.js-hdt-btn').show();
          return text + "...";
          
    }

    var text = $('.js-hdt').text();
    $('.js-hdt').text(hideText(text, 400));

    $('.js-hdt-btn').on('click', function(){
      $('.js-hdt').text(text);
      //val
      $('.js-hdt-btn-hide').removeClass('is-hide');
      //
      $(this).hide();
      return false;
    });
    //val
    $('.js-hdt-btn-hide').on('click', function() {
      $('.js-hdt').text(hideText(text, 400));
      $(this).addClass('is-hide');
      return false;
    });

// bookblock
      
      function bookblock() {
        $('.bb-bookblock').each( function( i ) {
          
          var $bookBlock = $('.bb-bookblock'),
            $nav = $('.m-news .slick-dots li button'),
            bb = $bookBlock.bookblock( {
              speed : 600,
              shadows : false
            });
            
          // add navigation events
          $nav.each( function( i ) {
            $( this ).on( 'click touchstart', function(event) {
              var $dot = $( this );
              $nav.removeClass( 'bb-current' );
              $dot.addClass( 'bb-current' );
              $bookBlock.bookblock( 'jump', i + 1 );
              //return false;
            });
          });
          
          // add swipe events
          $bookBlock.children().on( {
            'swipeleft' : function( event ) {
              $bookBlock.bookblock( 'next' );
              return false;
            },
            'swiperight' : function( event ) {
              $bookBlock.bookblock( 'prev' );
              return false;
            }
          });
          
        });
      };

  bookblock();

  // chosen select

  $('.chosen-select').chosen({
    width: '100%',
    max_selected_options: 1,
    no_results_text: "Не найдено"
  });

	// window scroll function

	$(window).scroll(function(){
		cloudsParallax();
		innerMapFixed();
		appeareAnimation();
	});
	//sticky-kit sidebar
  $(".js-sticky").stick_in_parent({offset_top: 85});
});