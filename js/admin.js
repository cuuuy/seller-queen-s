$(function(){
		var winW = $(window).width();
					
		if(winW < 640) {
			// 테이블 부모에 scroll	
			$('.adminContent_table').parent('div').css({'overflow-x':'scroll','min-height':'320px','padding':'0 20px','margin-top':'20px'});

			//leftmenu
			$('.ham').click(function(){
				$('.rightmenu').animate({
						'left': '0'
					}, 300);
			});

			//카테고리관리
			$('.adminWrap_title_category').click(function(){
				$('.adminContent_leftmenu').css('display','block');
			});

			// 탭개수에따라 모양 다르게
			if ($('.adminContent_tab ul li').length > 4)
			{
				$('.adminContent_tab li').css('height','120px');
				$('.adminContent_tab li a').css('padding','32px 0');
			}

			$('.header_gnb_logo').hide();


		}


});