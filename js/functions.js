;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		//Magnific Popup
			$('.btn-open-popup').magnificPopup({
			  type:'inline',
			  midClick: true 
			});
	});

})(jQuery, window, document);
