/* -----------------------------
Card Style Script
----------------------------- */
$(document).ready(function() {
	'use strict';
	var $el 			= $( '#card-ul' ),
		sectionFeature  = $('#section-feature'),
		baraja 			= $el.baraja();

		if ( $(window).width() > 480) {
			sectionFeature.appear(function(){
				baraja.fan({
					speed : 1500,
					easing : 'ease-out',
					range : 100,
					direction : 'right',
					origin : { x : 50, y : 200 },
					center : true
				});
			});
			$('#feature-expand').click(function() {
				baraja.fan({
					speed : 500,
					easing : 'ease-out',
					range : 100,
					direction : 'right',
					origin : { x : 50, y : 200 },
					center : true
				});
			});
		} else {
			sectionFeature.appear(function(){
				baraja.fan({
					speed : 1500,
					easing : 'ease-out',
					range : 80,
					direction : 'left',
					origin : { x : 200, y : 50 },
					center : true
				});
			});
			$('#feature-expand').click(function() {
				baraja.fan({
					speed : 500,
					easing : 'ease-out',
					range : 80,
					direction : 'left',
					origin : { x : 200, y : 50 },
					center : true
				});
			});
		}

	// Feature navigation
	$('#feature-prev').on( 'click', function( event ) {
		baraja.previous();
	});

	$('#feature-next').on( 'click', function( event ) {
		baraja.next();
	});

	// close Features
	$('#feature-close').on( 'click', function( event ) {
		baraja.close();
	});
});

/* -----------------------------
Fitvids init
----------------------------- */
 $(document).ready(function(){
    'use strict';
    $('.video-content').fitVids();
 });


/* -----------------------------
IE 9 Placeholder fix
----------------------------- */
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();



/* -----------------------------
Screenshot Load
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.view-project').on('click', function(e) {
		e.preventDefault();

		var href 			= $(this).attr('href') + ' .portfolio-project',
			portfolioWrap	= $('.porfolio-container'),
			contentLoaded 	= $('#portfolio-load'),
			offset			= $('#section-screenshots').offset().top;

		portfolioWrap.animate({'left':'-120%'},{duration:400,queue:false});
		portfolioWrap.fadeOut(400);
		$('html, body').animate({scrollTop: offset},{duration:800,queue:true});
		setTimeout(function(){ $('#portfolio-loader').fadeIn('fast'); },300);

		setTimeout(function(){
            contentLoaded.load(href, function(){
                $('#portfolio-loader').fadeOut('fast');
                contentLoaded.fadeIn(600).animate({'left':'0'},{duration:800,queue:false});
                $('.back-button').fadeIn(600);
            });
        },400);



	});



});
