
$(document).ready(
function() {
	$("div ul").css("background-color", "yellow");
	$("li > ul").css("color", "red");
	$("#Item1_1 ~ li").css("color", "blue");
});
