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


	$(document).on('change','input[name=flight_type]', function(){
		console.log($(this).val());
		let flightType = $(this).val();
		if(flightType == 1){
			$('.search-box').find('.tour_type').removeClass('d-block').addClass('d-none');
			$('.search-box').find('.tour_type.single-tour').removeClass('d-none');
			$('.search-box').find('.tour_type.single-tour .return input').removeAttr('disabled');
			
		}else if(flightType == 2){
			$('.search-box').find('.tour_type').removeClass('d-block').addClass('d-none');
			$('.search-box').find('.tour_type.single-tour').removeClass('d-none').addClass('d-block');
			$('.search-box').find('.tour_type.single-tour .return input').attr('disabled','disabled');
		}else if(flightType == 3){
			$('.search-box').find('.tour_type').removeClass('d-block').addClass('d-none');
			$('.search-box').find('.tour_type.multi-tour').removeClass('d-none').addClass('d-block');
		}
	})

	$(document).on('click','.cls_dropdown', function(){
		$(this).next('.cls_dd-menu').slideToggle();
	})

	$(document).on('click','.btn-add', function(){
		let num = parseInt($(this).prev('input').val());
		num++;
		$(this).prev('input').val((num).toString());
	})
	
	$(document).on('click','.btn-sub', function(){
		let num = parseInt($(this).next('input').val());
		if(num != 0){
			num--;
		}
		$(this).next('input').val((num).toString());
	})

	$(document).on('click','.btn-add-tour', function(){
		$(this).parents('.tour-ctrl').parents('.multi-tour').find('.st-form').first().clone().appendTo('.tour-append')
	})
	
	$(document).on('click','.btn-remove-tour', function(){
		$(this).parents('.tour-ctrl').prev('.tour-append').children().last().remove();
	})
})