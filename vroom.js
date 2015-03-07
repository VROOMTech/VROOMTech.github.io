"use strict";

window.onload = function(){
	$("#ghub").hover(
		function(){
			$("#ghub_title").css("opacity", "100")
		}, function(){
			$("#ghub_title").css("opacity", "0");
		}); 

}