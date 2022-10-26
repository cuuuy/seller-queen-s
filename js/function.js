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