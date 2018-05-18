$(document).ready(function(){

	// menu icon click function
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');

		// menu open
		if($('#nav-icon1').hasClass('open')){
			// small screen
			if($( window ).width()<991){
				$('.sideMenu').animate({width: "100%"}, {duration: 700});
				$('.sideMenuFooter').animate({width: "100%"}, {duration: 700});

				setTimeout(function() {
					$('#menuItems').fadeIn(700);
					$('.sideMenuFooter').fadeIn(700);
				}, 400);

			}
			// big screen
			else {
				$('.sideMenu').animate({width: "25%"}, {duration: 700});
				$('.sideMenuFooter').animate({width: "25%"}, {duration: 700});
				setTimeout(function() {
					$('#menuItems').fadeIn(700);
				}, 400);
			}
		}
		// menu close
		else {
			//small screen
			if($( window ).width()<991){
				$('.sideMenu').animate({width: 0}, {duration: 500});
				$('.sideMenuFooter').fadeOut(50);
			}
			// big screen
			else{
				$('.sideMenu').animate({width: 100}, {duration: 500});
				$('.sideMenuFooter').animate({width: 100}, {duration: 500});
			}
			$('#menuItems').fadeOut(100);
		}

	});

	// after screen resize change style of menu
	$(window).resize(function () {
		// menu close
		if(! $('#nav-icon1').hasClass('open')){
			// big screen
			if($( window ).width()>991){
				$('.sideMenu').css("width", 100);
				$('.sideMenuFooter').css("width", 100);
				$('.sideMenuFooter').css("display","");
			}
			// small screen
			else{
				$('.sideMenu').css("width", 0);
			}
		}
		// menu open
		else{
			// small screen
			if($( window ).width()<991){
				$('.sideMenuFooter').css("display","block");
				$('.sideMenuFooter').css("width", "100%");
				$('.sideMenu').css("width",  "100%");
			}
			// big screen
			else {
				$('.sideMenuFooter').css("width", "25%");
				$('.sideMenu').css("width",  "25%");
			}
		}
	});
});
