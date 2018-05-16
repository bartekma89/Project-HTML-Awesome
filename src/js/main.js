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

	function showButtonText() {
		if ($(window).width() > 768) {
			return $('#more .text').text('more');
		} else {
			return $('#more .text').text('+');
		}
	}

	showButtonText();

	$(window).resize(function() {
		showButtonText();
	});
})($);
