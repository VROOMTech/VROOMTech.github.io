"use strict";

window.onload = function(){
	$("#loading").fadeOut(0);

	$("#ghub").hover(
		function(){
			$("#ghub_title").css("opacity", "100")
		}, function(){
			$("#ghub_title").css("opacity", "0");
		});

	$("#landing_next").click(function(){
		console.log("scroll nao!");
		$('html,body').animate({scrollTop:$("#about_section").offset().top}, 1500);
	});
	$("#about_next").click(function(){
		$('html,body').animate({scrollTop:$("#links_section").offset().top}, 1500);
	});
	$("#email_link").click(function(){
		$( this ).text("vroomtech@gmail.com");
	});
}