(function(jQuery) {
	$('#nav-toggle').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.overlay').toggleClass('open');
	});

	$('#Vector_Smart_Object').on('click', function(event) {
		event.preventDefault();
		const $this = $(this);
		$this.addClass('doRotate');
		setTimeout(function() {
			$this.removeClass('doRotate');
		}, 1000);
	});

	$('#more .text').text('+');
})($);
