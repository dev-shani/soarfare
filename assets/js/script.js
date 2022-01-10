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

	// $(document).on('click','.btn-add-tour', function(){
	// 	let html = `<div class="st-form">
	// 	<div class="st-card_mt">
	// 		<input class="form-control" type="text" name="" id="" placeholder="From">
	// 	</div>
	// 	<div class="st-card_mt">
	// 		<input class="form-control" type="text" name="" id="" placeholder="To">
	// 	</div>
	// 	<div class="st-card_mt">
	// 		<input class="form-control mt_date" type="date" name="" id="">
	// 	</div>
	// 		<span class="btn-remove-tour"><i class="fa fa-times"></i></span>
		
	// </div>`;
	// 	if($('.tour-append').children().length < 3){
	// 		$('.tour-append').append(html);
	// 	}
	// })


	$(document).on('click','.btn-add-tour', function(){
		if($('.tour-append').children().length < 4){
			$(this).parents('.tour-ctrl').parents('.multi-tour').find('.st-form').last().clone().appendTo('.tour-append');
			$('.mt_date:first-child').parents('.st-form').nextAll('.st-form').find('.mt_date').attr('min', $('.mt_date:first-child').val())
		}
	})
	
	$(document).on('click','.btn-remove-tour', function(){
		console.log($('.tour-append').children().length);
			if($('.tour-append').children().length > 1){
				$(this).parents('.st-form').remove();
			}
	})

	$(document).on('change','.mt_date', adjustDate)
	function adjustDate(){ 
		console.log($(this).parents('.st-form').nextAll('.st-form').find('.mt_date').val($(this).val()));
	 }
	
	 $(document).on('change','.mt_date:first-child', setDateLimit);

	 function setDateLimit(){
		$(this).parents('.st-form').nextAll('.st-form').find('.mt_date').attr('min', $(this).val())
	 }

	 $(document).on('click','.show_ticket_details', function(){
		 $(this).parents('.body').next('.ticket_details').slideToggle();
	 })

	 $(document).on('click', '.filter_close', function(){
		 $('.search-result-filters').css('transform','translateX(-100%)');
		 $('.search-result-filters').css('transition','.3s ease');
	 })
	 
	 $(document).on('click', '.btn-filter', function(){
		 $('.search-result-filters').css('transform','translateX(0%)');
		 $('.search-result-filters').css('transition','.3s ease');
	 })
	 
	 $(document).on('click', '.fs_close', function(){
		 $('.flight-summry').css('transform','translateX(100%)');
		 $('.flight-summry').css('transition','.3s ease');
	 })
	 
	 $(document).on('click', '.btn-fs', function(){
		 $('.flight-summry').css('transform','translateX(0%)');
		 $('.flight-summry').css('transition','.3s ease');
	 })

	 $( ".ui_slider" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
		  $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	  });
	  $( "#amount" ).val( "$" + $( ".ui_slider" ).slider( "values", 0 ) +
		" - $" + $( ".ui_slider" ).slider( "values", 1 ) );

})

