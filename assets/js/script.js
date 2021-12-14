$(document).ready(() => {
    $(document).on('click', '.overimage', function(){
		$(this).addClass('d-none');
		$(this).next('.embed-responsive').removeClass('d-none');
		$("#yt")[0].src += "?autoplay=1";
	})



    jQuery('.testimonial__carousel').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		responsiveClass:true,
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
})