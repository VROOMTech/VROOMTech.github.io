"use strict";

window.onload = function(){
	$("#loading").fadeOut(500);

	$("#ghub").hover(
		function(){
			$("#ghub_title").css("opacity", "100")
		}, function(){
			$("#ghub_title").css("opacity", "0");
		}); 
}