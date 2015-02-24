$(document).ready(function(){
	$("#fixed-banner").hide();
	$(window).scroll(function(){
	    if ($(window).scrollTop() > 240){
			$("#fixed-banner").show();
			$("#banner").hide();
			$('#content').css('margin-top','240px');
			$('body').css('padding-top','75px');
	    }

        if ($(window).scrollTop() <= 240){
			$("#fixed-banner").hide();
			$("#banner").show();	        		
			$('#content').css('margin-top','0px');
			$('body').css('padding-top','0px');
        }
	});

	$('.nav li a').click(function(){
		var anchor = $($(this).attr('href'));
		var scroll_to = (anchor.offset().top) - 50;
		$('html,body').animate({scrollTop: scroll_to},'slow');
		return false;
	});

	$('.brand').click(function(){
		$('html,body').animate({scrollTop: 0},'slow');
		return false;
	});	
	var title_idx = 0;
	var titles = ['Developer','Advisor','Imagineer'];
	setInterval(function () {
		var idx = $('#nav-title').attr('data-idx');
		if(idx == 2) idx = 0;
		else idx++;
		var title = titles[idx];
		$('#nav-title').text(title);
		$('#nav-title').attr('data-idx',idx);
		}, 
		3000);
});