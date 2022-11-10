$(document).ready(function() {
	
	var js_now_date = new Date();
	var new_js_now_date_year = js_now_date.getFullYear();
	var new_js_now_date_month = js_now_date.getMonth()+1;
	var new_js_now_date_day = js_now_date.getDate();

	var year_tag1 = ``;
	for(var y = 2010 ; y <= new_js_now_date_year; y++){
		year_tag1 += `<option value="${y}">${y}</option>`
	}
	$("select[name=search_year1]").append(year_tag1);

	var month_tag1 = ``;
	for(var m = 1 ; m <= 12; m++){
		month_tag1 += `<option value="${m}">${m}</option>`
	}
	$("select[name=search_month1]").append(month_tag1);

	var day_tag1 = ``;
	for(var d = 1 ; d <= 31; d++){
		day_tag1 += `<option value="${d}">${d}</option>`
	}
	$("select[name=search_day1]").append(day_tag1);
	


	var year_tag2 = ``;
	for(var y2 = 2010 ; y2 <= new_js_now_date_year; y2++){
		year_tag2 += `<option value="${y2}">${y2}</option>`
	}
	$("select[name=search_year2]").append(year_tag2);

	var month_tag2 = ``;
	for(var m2 = 1 ; m2 <= 12; m2++){
		month_tag2 += `<option value="${m2}">${m2}</option>`
	}
	$("select[name=search_month2]").append(month_tag2);

	var day_tag2 = ``;
	for(var d2 = 1 ; d2 <= 31; d2++){
		day_tag2 += `<option value="${d2}">${d2}</option>`
	}
	$("select[name=search_day2]").append(day_tag2);
	
	
	//$("select[name=search_year1]").val(new_js_now_date_year).prop("selected",true);
	//$("select[name=search_month1]").val(new_js_now_date_month).prop("selected",true);
	//$("select[name=search_day1]").val(new_js_now_date_day).prop("selected",true);
	//
	//$("select[name=search_year2]").val(new_js_now_date_year).prop("selected",true);
	//$("select[name=search_month2]").val(new_js_now_date_month).prop("selected",true);
	//$("select[name=search_day2]").val(new_js_now_date_day).prop("selected",true);

	$("select[name=search_year1]").addClass('date_filter_change');
	$("select[name=search_month1]").addClass('date_filter_change');
	$("select[name=search_day1]").addClass('date_filter_change');

	$("select[name=search_year2]").addClass('date_filter_change');
	$("select[name=search_month2]").addClass('date_filter_change');
	$("select[name=search_day2]").addClass('date_filter_change');

});


function date_setting(origin, time){
	var time_arr = [];
	$.each(origin, function(i, res){
		
		time_arr.push(res.time);
		console.log(time_arr);
	});

	var date2 = new Date(Math.max.apply(null, time_arr) * 1000);
	var mon2 = date2.getMonth()+1;
	var day2 = date2.getDate();

	var date3 = new Date(Math.min.apply(null, time_arr) * 1000);
	var mon3 = date3.getMonth()+1;
	var day3 = date3.getDate();
	
	console.log(time);
	$("select[name=search_year1]").val(date3.getFullYear()).prop("selected",true);
	$("select[name=search_month1]").val(mon3).prop("selected",true);
	$("select[name=search_day1]").val(day3).prop("selected",true);

	$("select[name=search_year2]").val(date2.getFullYear()).prop("selected",true);
	$("select[name=search_month2]").val(mon2).prop("selected",true);
	$("select[name=search_day2]").val(day2).prop("selected",true);
}

function delivery_company_name_switch($Code=''){

    switch($Code){
        case "de.dhl" : $returnTxt = "DHL"; break;
        case "jp.sagawa" : $returnTxt = "Sagawa"; break;
        case "jp.yamato" : $returnTxt = "Kuroneko"; break;
        case "jp.yuubin" : $returnTxt = "Japan Post"; break;
        case "kr.chunilps" : $returnTxt = "천일택배"; break;
        case "kr.cjlogistics" : $returnTxt = "CJ대한통운"; break;
        case "kr.cupost" : $returnTxt = "CU 편의점택배"; break;
        case "kr.cvsnet" : $returnTxt = "GS Postbox 택배"; break;
        case "kr.cway" : $returnTxt = "CWAY (Woori Express)"; break;
        case "kr.daesin" : $returnTxt = "대신택배"; break;
        case "kr.epost" : $returnTxt = "우체국 택배"; break;
        case "kr.hanips" : $returnTxt = "한의사랑택배"; break;
        case "kr.hanjin" : $returnTxt = "한진택배"; break;
        case "kr.hdexp" : $returnTxt = "합동택배"; break;
        case "kr.homepick" : $returnTxt = "홈픽"; break;
        case "kr.honamlogis" : $returnTxt = "한서호남택배"; break;
        case "kr.ilyanglogis" : $returnTxt = "일양로지스"; break;
        case "kr.kdexp" : $returnTxt = "경동택배"; break;
        case "kr.kunyoung" : $returnTxt = "건영택배"; break;
        case "kr.logen" : $returnTxt = "로젠택배"; break;
        case "kr.lotte" : $returnTxt = "롯데택배"; break;
        case "kr.slx" : $returnTxt = "SLX"; break;
        case "kr.swgexp" : $returnTxt = "성원글로벌카고"; break;
        case "nl.tnt" : $returnTxt = "TNT"; break;
        case "un.upu.ems" : $returnTxt = "EMS"; break;
        case "us.fedex" : $returnTxt = "Fedex"; break;
        case "us.ups" : $returnTxt = "UPS"; break;
        case "us.usps" : $returnTxt = "USPS"; break;
		case null : $returnTxt = "-"; break;

		default : $returnTxt = $Code; break;
    }

    return $returnTxt;
}