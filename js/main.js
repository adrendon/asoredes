(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	// var loader = function() {
	// 	setTimeout(function() { 
	// 		if($('#ftco-loader').length > 0) {
	// 			$('#ftco-loader').removeClass('show');
	// 		}
	// 	}, 1);
	// };
	// loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			loop:true,
			center: false,
			dots:false,
			nav: true,
			autoplay: true,
			navText: [
				'<i class="fa fa-angle-left" aria-hidden="true"></i>',
				'<i class="fa fa-angle-right" aria-hidden="true"></i>'
			],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	// var scrollWindow = function() {
	// 	$(window).scroll(function(){
	// 		var $w = $(this),
	// 				st = $w.scrollTop(),
	// 				navbar = $('.ftco_navbar'),
	// 				sd = $('.js-scroll-wrap');

	// 		if (st > 150) {
	// 			if ( !navbar.hasClass('scrolled') ) {
	// 				navbar.addClass('scrolled');	
	// 			}
	// 		} 
	// 		if (st < 150) {
	// 			if ( navbar.hasClass('scrolled') ) {
	// 				navbar.removeClass('scrolled sleep');
	// 			}
	// 		} 
	// 		if ( st > 350 ) {
	// 			if ( !navbar.hasClass('awake') ) {
	// 				navbar.addClass('awake');	
	// 			}
				
	// 			if(sd.length > 0) {
	// 				sd.addClass('sleep');
	// 			}
	// 		}
	// 		if ( st < 350 ) {
	// 			if ( navbar.hasClass('awake') ) {
	// 				navbar.removeClass('awake');
	// 				navbar.addClass('sleep');
	// 			}
	// 			if(sd.length > 0) {
	// 				sd.removeClass('sleep');
	// 			}
	// 		}
	// 	});
	// };
	// scrollWindow();

	
	// var counter = function() {
		
	// 	$('#section-counter').waypoint( function( direction ) {

	// 		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

	// 			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
	// 			$('.number').each(function(){
	// 				var $this = $(this),
	// 					num = $this.data('number');
	// 					console.log(num);
	// 				$this.animateNumber(
	// 				  {
	// 				    number: num,
	// 				    numberStep: comma_separator_number_step
	// 				  }, 7000
	// 				);
	// 			});
				
	// 		}

	// 	} , { offset: '95%' } );

	// }
	// counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.book_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('.book_time').timepicker();


	// Cache selectors
var lastId,
topMenu = $("#mainNav"),
topMenuHeight = topMenu.outerHeight()+1,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
   if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
 var href = $(this).attr("href"),
	 offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
 $('html, body').stop().animate({ 
	 scrollTop: offsetTop
 }, 850);
 e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;
  
  // Get id of current scroll item
  var cur = scrollItems.map(function(){
	if ($(this).offset().top < fromTop)
	  return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  
  if (lastId !== id) {
	  lastId = id;
	  // Set/remove active class
	  menuItems
		.parent().removeClass("active")
		.find("[href=#"+id+"]").parent().addClass("active");
  }                   
});

var scrollWindow = function() {
	$(window).scroll(function(){
		var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.mimenu'),
				sd = $('.hero-wrap');
	
		if (st > 600) {
			if ( !navbar.hasClass('fixed') ) {
				navbar.addClass('fixed');	
			}
		} 
		if (st < 600) {
			if ( navbar.hasClass('fixed') ) {
				navbar.removeClass('fixed');
			}
		} 
	});
	};
	scrollWindow();
	
})(jQuery);

if($('.timeline').length){
	window.sr = ScrollReveal();
sr.reveal('.timeline');

	  
if ($(window).width() < 768) {
	  
	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
	}

	sr.reveal('.js--fadeInRight', {
	  origin: 'right',
	  distance: '300px',
	  easing: 'ease-in-out',
	  duration: 800,
	});

} else {
	
	sr.reveal('.js--fadeInLeft', {
	  origin: 'left',
	  distance: '300px',
		easing: 'ease-in-out',
	  duration: 800,
	});

	sr.reveal('.js--fadeInRight', {
	  origin: 'right',
	  distance: '300px',
	  easing: 'ease-in-out',
	  duration: 800,
	});

}

sr.reveal('.js--fadeInLeft', {
	  origin: 'left',
	  distance: '300px',
		easing: 'ease-in-out',
	  duration: 800,
	});

	sr.reveal('.js--fadeInRight', {
	  origin: 'right',
	  distance: '300px',
	  easing: 'ease-in-out',
	  duration: 800,
	});

}