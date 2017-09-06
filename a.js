jQuery(document).ready(function($) {
	clicked = false;
	$('div').on('mousedown', function(event) {
		console.log("mouseDown");
		clicked = true;
		$('div').on('mousemove', function(event) {
			if (clicked)
				console.log(event.pageX, event.pageY);
		});
		$('div').on('mouseup', function(event) {
			console.log("release");
			clicked = false;
		});
	});
});