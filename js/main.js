//scrollify
$(function () {
	
	//animate
	function scroll(to) {
		$("html,body").animate({
			scrollTop: $(to).offset().top
		}, 1e3, "swing")
	}

	$("a[rel]").on("click", function (a) {
		a.preventDefault(), scroll($(this).attr("rel"))
	});
	//lettering
	$("#helloTitle, #effect").lettering();

});
$(document).ready(function () {
	//bigtext
	$(".big").bigtext();
	$.scrollify({
		section: ".section",
		updateHash: false,
		afterResize: function () {
			$.scrollify.update();
		}
	});

});