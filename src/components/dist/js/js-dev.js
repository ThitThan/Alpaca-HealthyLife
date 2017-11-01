$j = jQuery.noConflict();

var lf_main_url = 'http://www.lovefitt.com/';

$j(document).ready(function() {

	if (window.top != window.self) {
		console.log('Hello!');
		alert('Lovefitt.com');
        window.top.location = window.self.location;
    }

    $j('.op img').unveil(200, function(){
    	$j(this).load(function(){
    		this.style.opacity = 1;
    	});
    });

	var windowHeight = $j(window).height();
	var windowWidth = $j(window).width();

	var body = $j('body');
	var bodyOverlay = $j('.overlay-body');
	var bodyContain = $j('.body-container');
	var menuBlock = $j('.main-nav-container');
	var menu = $j('.m-menu');

	function menuOpen()	{
		menuBlock.addClass('active');
		menu.addClass('active');
		menu.attr('data-status', 1);
		overlayOn();
	}

	function menuClose() {
		menuBlock.removeClass('active');
		menu.removeClass('active');
		menu.attr('data-status', 0);
		overlayOff();
	}

	function overlayOn() {
		body.addClass('no-scroll');
		bodyOverlay.addClass('active');
		bodyContain.on('touchmove', function(ev){
			ev.preventDefault();
		});
	}

	function overlayOff() {
		body.removeClass('no-scroll');
		bodyOverlay.removeClass('active');
		bodyContain.off('touchmove');
	}

	// Main Menu
	$j('.m-menu').click(function(ev){
		var status = $j(this).attr('data-status');
		if(status == 0) {
			menuOpen();
		}
		else {
			menuClose();
		}
		ev.preventDefault();
	});	

	// Sub Menu
	$j('.main-nav li .has-sub-menu').click(function(ev){
		var status = $j(this).attr('data-status');
		if(status == 0) {
			$j(this).addClass('active');
			$j(this).find('.label-more').addClass('active');
			$j(this).next().css('display', 'block');
			$j(this).attr('data-status', 1);
		}
		else if(status == 1) {
			$j(this).removeClass('active');
			$j(this).find('.label-more').removeClass('active');
			$j(this).next().css('display', 'none');
			$j(this).attr('data-status', 0);
		}
		ev.preventDefault();
	});

	$j('.menu-search').click(function(ev){
		$j('.section-popup-search').addClass('active');
		menuClose();
		el = $j('.section-popup-search .block-form-search input:text').get(0);
		el.focus();
		ev.preventDefault();
	});
	$j('.section-popup-search .btn-close, .section-popup-search .overlay-bg').click(function(){
		$j('.section-popup-search').removeClass('active');
	});

	// Overlay Body
	$j('.overlay-body').click(function(){
		menuClose();
	});

	fixBody();
	function fixBody()
	{
		windowHeight = $j(window).height();
		// Fix .body-container when there's no search result on Search page
		if( $j('body').hasClass('search-no-results') ) {
			$j('.body-container').css('height', windowHeight);
		}
	}

	// BMI Radio
	$j('.field-radio-gender-block .field-radio').click(function(ev){
		var status = $j(this).attr('data-status');
		if(status == 0) {
			$j('.field-radio-gender-block .field-radio, .field-radio-gender-block .radio-check').removeClass('active');
			$j(this).addClass('active');
			$j(this).find('.radio-check').addClass('active');
			$j('.field-radio-gender-block .field-radio').each(function(){
				$j(this).attr('data-status', 0);
			});
			$j(this).attr('data-status', 1);
		} else if(status == 1) {}
	});

	// BMR Radio
	$j('.field-radio-activity-block .field-radio').click(function(ev){
		var status = $j(this).attr('data-status');
		if(status == 0) {
			$j('.field-radio-activity-block .field-radio, .field-radio-activity-block .radio-check').removeClass('active');
			$j(this).addClass('active');
			$j(this).next().addClass('active');
			$j('.field-radio-activity-block .field-radio').each(function(){
				$j(this).attr('data-status', 0);
			});
			$j(this).attr('data-status', 1);
		}
		else if(status == 1) {}		
	});

	// #TODO : 02
	if( $j('.item-p-1').length > 0) {
		fit_shop_text();
	}

	// Window resize
	$j(window).resize(function() {
		windowWidth = $j(window).width();
		windowHeight = $j(window).height();

		fixBody();

		if( $j('.item-p-1').length > 0) {
			fit_shop_text();
		}
	});


	// Table Row Hightlight
	$j('tr').hover(function(){
		$j(this).addClass('hover');
	}, function(){
		$j(this).removeClass('hover');
	});

	/* BMI */
	$j(".bmi-cal-btn").click(function(event) {
		var mass = 0;
		var height = 0;
		var bmi = 0;
		mass = $j('input[name=mass]').val();		
		height = $j('input[name=height]').val();
		if(height == '') {
			height = 0;
		}
		height = height / 100;
		bmi = mass / (height * height);
		if(mass == '' || height == '') {
			bmi = 0;
		}
		else {
			bmi = bmi.toFixed(2);	
		}		

		$j({value: 0}).animate({value: bmi}, {
			duration: 500,
			easing: 'swing',
			start: function() {
				$j('.result-value').addClass('result-value-shadow');
			},
			step: function() {
				$j('.bmi-value').text(this.value.toFixed(2))
			},
			complete: function() {
				$j('.bmi-value').text(bmi);
				$j('.result-value').removeClass('result-value-shadow');	
			}
		});

		$j(".bmi-desc").hide();
		$j(".bmi-credit").hide();

		if(bmi != 0) {
			for (i = 1; i <= 5; i++) {
				$j(".bmi-table tr").removeClass('bmi-' + i)
			}
			if (bmi < 18.5) {
				$j(".bmi-table tr").eq(1).addClass("bmi-1");
				$j(".bmi-desc-1").show()
			} else if (bmi >= 18.5 && bmi < 23) {
				$j(".bmi-table tr").eq(2).addClass("bmi-2");
				$j(".bmi-desc-2").show()
			} else if (bmi >= 23 && bmi < 25) {
				$j(".bmi-table tr").eq(3).addClass("bmi-3");
				$j(".bmi-desc-3").show()
			} else if (bmi >= 25 && bmi < 30) {
				$j(".bmi-table tr").eq(4).addClass("bmi-4");
				$j(".bmi-desc-4").show()
			} else if (bmi >= 30) {
				$j(".bmi-table tr").eq(5).addClass("bmi-5");
				$j(".bmi-desc-5").show()
			}
			$j(".bmi-credit").show();
		}
		event.preventDefault()
	});

	/* BMR */
	var gender = '';
	var weight = 0;
	var height = 0;
	var age = 0;
	var bmr = 0;
	$j(".bmr-cal-btn").click(function(event) {
		// gender = $j('.bmr-calculator-block input[name=gender]:checked').val();
		gender = $j('.field-radio-gender-block .field-radio[data-status="1"]').attr('data-value');
		weight = $j('.bmr-calculator-block input[name=weight]').val();
		height = $j('.bmr-calculator-block input[name=height]').val();
		age = $j('.bmr-calculator-block input[name=age]').val();
		bmr = 0;
		if (gender == 1) {
			bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
		} else if (gender == 0) {
			bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
		} else {
			bmr = 0
		}
		bmr = bmr.toFixed(0);

		$j({value: 0}).animate({value: bmr}, {
			duration: 500,
			easing: 'swing',
			start: function() {
				$j('.result-value').addClass('result-value-shadow');
			},
			step: function() {
				$j('.bmr-value').text(this.value.toFixed(0))
			},
			complete: function() {
				$j('.bmr-value').text(bmr);
				$j('.result-value').removeClass('result-value-shadow');	
			}
		});

		$j('.bmr-value').text(bmr);

		var activity = $j('.bmr-cal-block input[name=activity]:checked').val();
		var tdeeFactor = 0;
		if (activity == 1) {
			tdeeFactor = 1.2
		} else if (activity == 2) {
			tdeeFactor = 1.375
		} else if (activity == 3) {
			tdeeFactor = 1.55
		} else if (activity == 4) {
			tdeeFactor = 1.725
		} else if (activity == 5) {
			tdeeFactor = 1.9
		}
		var tdee = bmr * tdeeFactor;
		tdee = tdee.toFixed(2);
		event.preventDefault()
	});
	
	var bmrCheck = 0;
	var tdee = 0;
	$j('.tdee-cal-btn').click(function(event) {
		bmrCheck = $j('.bmr-value').text();

		bmr = bmrCheck;
		// var activity = $j('.tdee-calculator-block input[name=activity]:checked').val();
		var activity = $j('.field-radio-activity-block .field-radio[data-status="1"]').attr('data-value');

		var tdeeFactor = 0;
		if (activity == 1) {
			tdeeFactor = 1.2
		} else if (activity == 2) {
			tdeeFactor = 1.375
		} else if (activity == 3) {
			tdeeFactor = 1.55
		} else if (activity == 4) {
			tdeeFactor = 1.725
		} else if (activity == 5) {
			tdeeFactor = 1.9
		}
		tdee = bmr * tdeeFactor;
		tdee = tdee.toFixed(0);

		$j({value: 0}).animate({value: tdee}, {
			duration: 500,
			easing: 'swing',
			start: function() {
				$j('.result-value').addClass('result-value-shadow');
			},
			step: function() {
				$j('.tdee-value').text(this.value.toFixed(0))
			},
			complete: function() {
				$j('.tdee-value').text(tdee);
				$j('.result-value').removeClass('result-value-shadow');	
			}
		});

		event.preventDefault()
	});

	var targetWeight = 0;
	var weightReq = 0;
	var days = 0;
	var tdeeCheck = 0;
	var caloriesperDay = 0;
	var caloriesTotal = 0;
	$j('.wl-cal-btn').click(function(event) {
		tdeeCheck = $j('.tdee-value').text();
		tdee = tdeeCheck;
		targetWeight = $j('.weight-lost-calculator-block input[name=weight_lost]').val();
		days = $j('.weight-lost-calculator-block input[name=days]').val();
		if( days != 0 || targetWeight != 0 ) {
			weight = $j('.bmr-calculator-block input[name=weight]').val();
			var weightReq = weight - targetWeight;
			var totalCalories = 6614 * weightReq;

			caloriesperDay = totalCalories / days;
			caloriesperDay = caloriesperDay.toFixed(0);
			caloriesTotal = tdee - caloriesperDay;
			caloriesTotal = caloriesTotal.toFixed(0);
		}		

		$j({value: 0}).animate({value: caloriesperDay}, {
			duration: 500,
			easing: 'swing',
			start: function() {
				$j('.result-value').addClass('result-value-shadow');
			},
			step: function() {
				$j('.reduct-calories-value').text(this.value.toFixed(0));
			},
			complete: function() {
				$j('.reduct-calories-value').text(caloriesperDay);
				$j('.result-value').removeClass('result-value-shadow');	
			}
		});

		$j({value: 0}).animate({value: caloriesTotal}, {
			duration: 500,
			easing: 'swing',
			start: function() {
				$j('.result-value').addClass('result-value-shadow');
			},
			step: function() {
				$j('.calories-total-pd-value').text(this.value.toFixed(0))
			},
			complete: function() {
				$j('.calories-total-pd-value').text(caloriesTotal);
				$j('.result-value').removeClass('result-value-shadow');	
			}
		});			

		event.preventDefault();
	});
	
	// Calories Table
	$j('.ct-table tr td:nth-child(1)').addClass('ct-col-1');
	$j('.ct-table tr td:nth-child(2)').addClass('ct-col-2');
	$j('.ct-table tr td:nth-child(3)').addClass('ct-col-3');

	// Social Sharers
	$j('.block-social-share .share-social, .social-share-block-s3 .share-social').click(function(ev){
		ev.preventDefault();
		var socialurl = $j(this).attr('href');
		var left = ( screen.width / 2 ) - ( 500 / 2 );
		var top = ( screen.height / 2 ) - ( 300 / 2 );
		top = 300;
		window.open(socialurl, 'Share', 'width=500, height=300, top='+top+', left='+left);		
	});

	// Share Link
	$j('.block-social-share .share-link').click(function(ev){
		var status = $j(this).attr('data-status');
		if(status == 0) {			
			$j('.share-link-block').fadeIn();
			$j('.block-social-share .share-link').each(function(){
				$j(this).attr('data-status', 1);
				$j(this).addClass('active');
			});			
		}
		else if(status == 1) {			
			$j('.share-link-block').fadeOut();
			$j('.block-social-share .share-link').each(function(){
				$j(this).attr('data-status', 0);
				$j(this).removeClass('active');
			});
		}
		ev.preventDefault();
	});

	var bKnowledgeStat = false;
	$j('.b-knowledge-slide').on('afterChange', function(event, slick, currentSlide){
		if(!bKnowledgeStat) {
			if(currentSlide > 0) {
				bKnowledgeStat = true;
				ga("send", "event", "ViewMore", "Knowledge" ,"Slide");
			}
		}
	});

	$j('.b-knowledge-slide').slick({
		slidesToShow: 3,
		dots: true,
		prevArrow: '<div class="slick-prev"><i class="icon-angle-left"></i></div>',
		nextArrow: '<div class="slick-next"><i class="icon-angle-right"></i></div>',
		speed: 300,
		touchThreshold: 8,
		infinite: false,
		responsive : [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	$j('.block-mentions').on('init', function(event, slick){
		var items = $j('.block-mentions .slick-list .slick-track').children('.item').sort(function(){
			return Math.round(Math.random()) - 0.5;
		}).detach().appendTo($j('.block-mentions .slick-list .slick-track'));
	});

	var bMentionsStat = false;
	$j('.block-mentions').on('afterChange', function(event, slick, currentSlide){
		if(!bMentionsStat) {
			if(currentSlide > 0) {
				bMentionsStat = true;
				ga("send", "event", "ViewMore", "Mentions" ,"Slide");
			}
		}
	});

	$j('.block-mentions').slick({
		slidesToShow: 3,
		dots: true,
		prevArrow: '<div class="slick-prev"><i class="icon-angle-left"></i></div>',
		nextArrow: '<div class="slick-next"><i class="icon-angle-right"></i></div>',
		speed: 300,
		touchThreshold: 8,
		infinite: false,
		responsive : [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					arrows: false,
					centerPadding: '20px',
					centerMode: true
				}
			}
		]
	});


	$j('.block-updates').on('init', function(event, slick){
		$j('.block-updates').addClass('active');
	});

	var bUpdatesStat = false;
	$j('.block-updates').on('afterChange', function(event, slick, currentSlide){
		if(!bUpdatesStat) {
			if(currentSlide > 0) {
				bUpdatesStat = true;
				ga("send", "event", "ViewMore", "Updates" ,"Slide");
			}
		}
	});

	$j('.block-updates').slick({
		slidesToShow: 3,
		dots: true,
		prevArrow: '<div class="slick-prev"><i class="icon-angle-left"></i></div>',
		nextArrow: '<div class="slick-next"><i class="icon-angle-right"></i></div>',
		speed: 300,
		touchThreshold: 8,
		infinite: false,
		responsive : [
			{
				breakpoint: 1030,
				settings: {
					slidesToShow: 3,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '30px',
					centerMode: true,
					initialSlide: 1,
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 1,
					centerPadding: '30px',
					centerMode: true,
					arrows: false
				}
			},
		]
	});

	$j('.b-review-slide').slick({
		slidesToShow: 3,
		dots: true,
		prevArrow: '<div class="slick-prev"><i class="icon-angle-left"></i></div>',
		nextArrow: '<div class="slick-next"><i class="icon-angle-right"></i></div>',
		speed: 300,
		touchThreshold: 8,
		infinite: false,
		responsive : [
			{
				breakpoint: 1119,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrows: false
				}
			}
		]
	});

	var bDiaryStat = false;
	$j('.block-diary').on('afterChange', function(event, slick, currentSlide){
		if(!bDiaryStat) {
			if(currentSlide > 0) {
				bDiaryStat = true;
				ga("send", "event", "ViewMore", "Diary" ,"Slide");
			}
		}
	});

	$j('.block-diary').slick({
		slidesToShow: 5,
		dots: true,
		prevArrow: '<div class="slick-prev"><i class="icon-angle-left"></i></div>',
		nextArrow: '<div class="slick-next"><i class="icon-angle-right"></i></div>',
		speed: 300,
		touchThreshold: 8,
		infinite: false,
		responsive : [
			{
				breakpoint: 840,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true
				}
			},
			{
				breakpoint: 479,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					centerPadding: '20px',
					centerMode: true,
					initialSlide: 1
				}
			}
		]
	});


	$j('.btn-play').click(function(ev){
		var ytid = $j(this).attr('data-ytid');
		var ytW = $j(this).attr('data-ytw');
		var ytH = $j(this).attr('data-yth');
		var ytframe = '<iframe width="' + ytW + '" height="' + ytH + '" src="https://www.youtube.com/embed/' + ytid + '?vq=hd720&amp;showinfo=0&amp;rel=0&amp;modestbranding=0&amp;iv_load_policy=3&amp;enablejsapi=1&amp;theme=light&autoplay=1" frameborder="0" allowfullscreen=""></iframe>'

		$j(this).parent().html(ytframe);
		ev.preventDefault();
	});

	var target_reach_mentions = false;

	$j(window).scroll(function(){
		var dist_scroll = $j(window).scrollTop();
		var doc_height = $j(document).height();
		var windowH = $j(window).height();

		if( $j('.section-mentions').length > 0 ) {
			var target_dist_mentions = $j('.section-mentions').offset().top - windowH + $j('.section-mentions').height();
			if( dist_scroll >= target_dist_mentions ) {
				if( !target_reach_mentions )
				target_reach_mentions = true;
				// Call Stat
			}
		}
	});

	/* Only appears on Homepage. How about other pages? */
	if( $j('.home').length > 0 && $j('.paged').length == 0 ) {
		$j.ajax({
			url: lf_main_url + 'system/wp-content/themes/lovefitt/php/get_popular.php',
			data: { 'ref': 'ref' },
			type: 'POST',
			dataType: 'json',
			success: function(data) {
				var max_elements = data.length;
				var output = '<div class="section-content section-popular"><div class="col-100"><div class="block-popular"><div class="item item-top"><div class="item-inner"><p class="item-header">Popular</p></div></div>';

				var t = parseInt(max_elements) - 1;

				$j.each( data, function( i, v ){
					var link = data[i].link;
					var title = data[i].title;
					var number = parseInt(max_elements) - i;
					output += '<a href="'+link+'" class="item"><div class="item-inner"><span class="item-number">'+number+'</span><p class="item-header">'+title+'</p></div></a>';
				});

				output += '</div></div></div>';

				$j('.home .block-latest .item-6').after(output);

				var bPopularStat = false;
				$j('.block-popular').on('afterChange', function(event, slick, currentSlide){
					if(!bPopularStat) {
						if(currentSlide > 0) {
							bPopularStat = true;
							ga("send", "event", "ViewMore", "Popular" ,"Slide");
						}
					}
				});

				$j('.block-popular').slick({
					slidesToShow: 6,
					dots: false,
					arrows: false,
					prevArrow: '<div class="slick-prev"><i class="icon-angle-left"></i></div>',
					nextArrow: '<div class="slick-next"><i class="icon-angle-right"></i></div>',
					speed: 300,
					touchThreshold: 8,
					infinite: false,
					responsive : [
						{
							breakpoint: 976,
							settings: {
								slidesToShow: 5,
								arrows: true,
								dots: true
							}
						},
						{
							breakpoint: 660,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
								arrows: false,
								dots: true
							}
						},
						{
							breakpoint: 400,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
								arrows: false,
								dots: true
							}
						}
					]
				});
			}
		});
	}


	if( $j('.b-healthy-taste').length > 0 ) {

		$j('.b-healthy-taste').on('init', function(event, slick){
			var items = $j('.b-healthy-taste .slick-list .slick-track').children('.item').sort(function(){
				return Math.round(Math.random()) - 0.5;
			}).detach().appendTo($j('.b-healthy-taste .slick-list .slick-track'));
		});

		$j.ajax({
			url: lf_main_url + 'system/wp-content/themes/lovefitt/php/get_shops_ads.php',
			data: { 'ref': 'ref' },
			type: 'POST',
			dataType: 'json',
			success: function(data) {
				var output = '';
				var max_elements = data.length;

				$j.each( data, function( i, v ){
					var number = parseInt(max_elements) - i;
					var title = data[i].title;
					var link = data[i].link;
					var img = '';
					var img1 = data[i].img1;
					var img2 = data[i].img2;
					var img3 = data[i].img3;
					var excerpt = data[i].excerpt;
					var img_num = Math.floor(Math.random() * 3) + 1;

					if(img_num == 1) {
						img = img1;
					} else if(img_num == 2) {
						img = img2;
					} else if(img_num == 3) {
						img= img3;
					}

					output += '<div class="item op">' +
					'<a href="'+link+'" title="'+title+'">' +
						'<div class="item-img">' +
							'<img src="'+img+'" alt="'+title+'" />' +
						'</div>' +
						'<div class="item-content">' +
							'<div class="item-content-inner">' +
								'<p><strong>'+title+'</strong> '+excerpt+'</p>' +
							'</div>' +
						'</div>' +
					'</a>' +
					'</div>';
				});

				$j('.b-healthy-taste').append(output);			

				$j('.b-healthy-taste').slick({
					slidesToShow: 2,
					dots: true,
					prevArrow: '<div class="slick-prev"><i class="icon-angle-left"></i></div>',
					nextArrow: '<div class="slick-next"><i class="icon-angle-right"></i></div>',
					speed: 300,
					touchThreshold: 8,
					infinite: false,
					responsive : [
						{
							breakpoint: 960,
							settings: {
								slidesToShow: 2,
							}
						},		
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 2,
								arrows: false
							}
						},
						{
							breakpoint: 670,
							settings: {
								slidesToShow: 1,
								arrows: false,
								centerPadding: '20px',
								centerMode: true
							}
						},
						{
							breakpoint: 479,
							settings: {
								slidesToShow: 1,
								arrows: false,
								centerPadding: '20px',
								centerMode: true
							}
						},
						{
							breakpoint: 350,
							settings: {
								slidesToShow: 1,
								arrows: false,
								centerPadding: '20px',
								centerMode: true
							}
						}
					]
				});
			}
		});
	}


	$j('.item-knowledge').click(function(ev){
		ev.preventDefault();

		var status = $j('.block-list-knowledge').attr('data-status');
		var item = parseInt($j(this).attr('data-item'));

		if( status == 0 ) {
			$j('.section-popup-knowledge').addClass('active');
			$j('.block-list-knowledge').attr('data-status', 1);
			body.addClass('no-scroll');
		} else if( status == 1) {
			$j('.section-popup-knowledge').removeClass('active');
			$j('.block-list-knowledge').attr('data-status', 0);
			body.removeClass('no-scroll');
		}

		updatePopupKnowledge( item );		
	});

	$j('.block-popup-knowledge .nav-next, .block-popup-knowledge .nav-prev').click(function(){
		var item = parseInt($j(this).attr('data-item'));
		updatePopupKnowledge( item );
	});

	$j('.section-popup-knowledge .btn-close, .section-popup-knowledge .overlay-bg').click(function(){
		$j('.section-popup-knowledge').removeClass('active');
		$j('.block-list-knowledge').attr('data-status', 0);
		$j('.block-list-knowledge').attr('data-item', 0);
		body.removeClass('no-scroll');	
	});

	var max_knowledge_item = $j('.block-list-knowledge .item').length;
	function updatePopupKnowledge(item) {
		var item = item;
		var target_item = $j('.item-' + item);
		var current_item = item;
		var prev_item = item - 1;
		var next_item = item + 1;

		if( prev_item < 1) {
			prev_item = max_knowledge_item;
		}
		if( next_item > max_knowledge_item) {
			next_item = 1;
		}

		var img = target_item.attr('data-img');
		var url = target_item.attr('data-url');

		var img = '<img src="'+img+'" />';
		var comment = '<div class="block-fb-comment">' +
					  '<div class="fb-comments" data-href="'+url+'" data-width="100%" data-num-posts="3" data-colorscheme="light"></div>' +
					  '</div>';

		$j('.block-popup-knowledge .item-img').html(img);
		$j('.block-popup-knowledge .item-comment').html(comment);
		
		FB.XFBML.parse();

		$j('.block-list-knowledge').attr('data-item', current_item);
		$j('.block-popup-knowledge .nav-prev').attr('data-item', prev_item);
		$j('.block-popup-knowledge .nav-next').attr('data-item', next_item);
	}

	$j('.b-pagination .i-current-page').click(function(ev){
		ev.preventDefault();

		var status = $j(this).attr('data-status');
		if( status == 0 ) {
			$j('.b-pagination').addClass('expanded');
			$j('.b-pagination .i-pages').addClass('active');
			$j(this).attr('data-status', 1);
			$j(this).addClass('active');
		}
		else if( status == 1 ) {
			$j('.b-pagination').removeClass('expanded');
			$j('.b-pagination .i-pages').removeClass('active');
			$j(this).attr('data-status', 0);
			$j(this).removeClass('active');
		}
	});

	$j('.page-block-healthy-kitchen .item .btn-comment').click(function(ev){
		ev.preventDefault();

		var item = $j(this).attr('data-item');
		var url = $j(this).attr('data-url');		
		var comment = '<div class="block-fb-comment">' +
					  '<div id="ht-fb-'+item+'" class="fb-comments" data-href="'+url+'" data-width="100%" data-num-posts="3" data-colorscheme="light"></div>' +
					  '</div>';

		$j('.page-block-healthy-kitchen .item-' + item + ' .item-comment').html(comment);
		FB.XFBML.parse();
	});

	//GA
	$j(".share-facebook").on("click",function(){ga("send","event","Social","Share","Facebook")}),$j(".share-twitter").on("click",function(){ga("send","event","Social","Share","Twitter")}),$j(".share-line").on("click",function(){ga("send","event","Social","Share","Line")}),$j(".share-pinterest").on("click",function(){ga("send","event","Social","Share","Pinterest")}),$j(".share-gplus").on("click",function(){ga("send","event","Social","Share","Google+")}),$j(".share-link").on("click",function(){ga("send","event","Social","Share","Link")}),$j(".main-nav-container .follow-facebook").on("click",function(){ga("send","event","Social","Follow-MainNav","Facebook")}),$j(".main-nav-container .follow-twitter").on("click",function(){ga("send","event","Social","Follow-MainNav","Twitter")}),$j(".main-nav-container .follow-instagram").on("click",function(){ga("send","event","Social","Follow-MainNav","Instagram")}),$j(".main-nav-container .follow-pinterest").on("click",function(){ga("send","event","Social","Follow-MainNav","Pinterest")}),$j(".main-nav-container .follow-gplus").on("click",function(){ga("send","event","Social","Follow-MainNav","Google+")}),$j(".main-nav-container .follow-line").on("click",function(){ga("send","event","Social","Follow-MainNav","Line")}),$j(".footer .follow-facebook").on("click",function(){ga("send","event","Social","Follow-Footer","Facebook")}),$j(".footer .follow-twitter").on("click",function(){ga("send","event","Social","Follow-Footer","Twitter")}),$j(".footer .follow-instagram").on("click",function(){ga("send","event","Social","Follow-Footer","Instagram")}),$j(".footer .follow-pinterest").on("click",function(){ga("send","event","Social","Follow-Footer","Pinterest")}),$j(".footer .follow-gplus").on("click",function(){ga("send","event","Social","Follow-Footer","Google+")}),$j(".footer .follow-line").on("click",function(){ga("send","event","Social","Follow-Footer","Line")}),$j(".m-menu").on("click",function(){var o=$j(this).attr("data-status");0==o&&ga("send","event","Navigation","MainNav","Clicked")}),$j(".main-logo").on("click",function(){ga("send","event","Navigation","Logo","Clicked")}),$j(".block-pages-links a").on("click",function(){ga("send","event","Navigation","Footer-Links","Clicked")}),$j(".block-related-posts a").on("click",function(){ga("send","event","ViewMore","Related-Posts","Clicked")}),$j(".block-mentions a").on("click",function(){ga("send","event","ViewMore","Mentions","Clicked")}),$j(".block-updates a").on("click",function(){ga("send","event","ViewMore","Updates","Clicked")}),$j(".block-knowledge a").on("click",function(){ga("send","event","ViewMore","Knowledge","Clicked")}),$j(".block-popular a").on("click",function(){ga("send","event","ViewMore","Popular","Clicked")}),$j(".block-diary a").on("click",function(){ga("send","event","ViewMore","Diary","Clicked")}),$j(".b-healthy-taste a").on("click",function(){ga("send","event","ViewMore","HealthyTaste","Clicked")});

});

$j(window).load(function(){
	var windowW = $j(window).width();
	if( $j('.p-review').length > 0 && windowW <= 520 ) {
		var review_img_w = $j('.s-review-img img').width();
		var scroll_dist = (review_img_w - windowW) / 2;
		$j('.s-review-img').scrollLeft(scroll_dist);
	}

	var followYT = '<a href="https://www.youtube.com/user/Lovefitt?sub_confirmation=1" title="Follow Lovefitt on Youtube" target="_blank"><i class="icon-youtube-play"></i>follow Lovefitt on Youtube</a>';
	$j('.block-follow-youtube').append(followYT);

	hideBlackRibbon();

	pageTimeOn();
	pageVisibility();
});

function hideBlackRibbon() {
	setTimeout(function(){
		$j('.s-black-ribbon').removeClass('active');
	}, 9000);
}

function pageTimeOn() {
	setTimeout(function(){
		ga("send", "event", "Time", "45+ secs" ,"Stay");
	}, 45000);
}

function pageVisibility() {
	var target_mentions_reached = false;
	var target_hk_reached = false;
	var dist_scroll=$j(window).scrollTop(),doc_height=$j(document).height(),windowH=$j(window).height();if($j(".section-mentions").length>0&&!target_mentions_reached){var target_mentions_dist=$j(".section-mentions").offset().top+$j(".section-mentions").outerHeight()-windowH;dist_scroll>=target_mentions_dist&&(target_mentions_reached=!0,ga("send","event","Visibility","Mentions","Scroll"))}if($j(".home .section-healthy-kitchen").length>0&&!target_hk_reached){var target_hk_dist=$j(".home .section-healthy-kitchen").offset().top+$j(".home .section-healthy-kitchen").outerHeight()-windowH;dist_scroll>=target_hk_dist&&(target_hk_reached=!0,ga("send","event","Visibility","Healthy Kitchen","Scroll"))}
}