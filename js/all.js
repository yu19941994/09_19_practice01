$(document).ready(function() {
	$('.top a').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0

		}, 700);
	});

	$('.topmenu-item').click(function(event) {
		/* Act on the event */
		event.preventDefault();
		//$('.topmenu-item').toggleClass('active');
		$(this).parent().find('ul').slideToggle();
		$(this).parent().siblings().find('ul').slideUp();
	});

	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    //direction: 'vertical',
    effect: "flip",
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

     autoplay: {
    delay: 5000,
  },
  })
});