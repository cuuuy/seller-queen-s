$(function(){
		var winW = $(window).width();
					
		if(winW < 640) {
			// 테이블 부모에 scroll	
			$('.adminContent_table').parent('div').css({'overflow-x':'scroll','min-height':'320px','padding':'0 20px','margin-top':'20px'});

			//leftmenu
			// $('.ham').click(function(){
			// 	$('.rightmenu').animate({
			// 			'left': '0'
			// 		}, 300);
            //     $(this).addClass("rightmenu_on");
			// });

            // $('.rightmenu_on').click(function(){
			// 	alert();
			// });

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

			//$('.header_gnb_logo').hide();
            $('.header_gnb_logo').children().attr("src","../image/market_m_logo2.png");
            $('.header_gnb_logo').children().addClass('m_logo_img')
            
            
            $(".header_gnb_logo").after('<div class="test_top_menu_m"><a href="./admin_teacher_main.html">강사</div>');
            $(".header_gnb_logo").after('<div class="test_top_menu_m"><a href="./admin_domae_main.html">도매</div>');
            $(".header_gnb_logo").after('<div class="test_top_menu_m"><a href="./admin_seller_main.html">셀러</div>');
            $(".header_gnb_logo").after('<div class="test_top_menu_m"><a href="./admin_admin_main.html">관리자</div>');

		}
        

});

$(document).on("click",".ham", function(){
    $('.rightmenu').animate({
        'left': '0'
    }, 300);
    $('.ham').addClass("rightmenu_on");
})

$(document).on("click",".rightmenu_on", function(){
    $('.rightmenu').animate({
        'left': '-280'
    }, 300);
    $('.ham').removeClass("rightmenu_on");
})

$(document).on("click",".admin_m_header>a:first", function(){
    $(this).attr("href","javascript:history.back()");
})