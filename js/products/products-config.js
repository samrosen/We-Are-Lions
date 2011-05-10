$(document).ready(function() {

	// Product Thumbnail Title
	$("div.item-container").hover(
	  function () {
	    $(this).find('h4').fadeTo("fast", 1);
	  }, 
	  function () {
	    $(this).find('h4').fadeTo("fast", 0);
	  }
	);

	// Enter Product Detail View
	$('div.item-container').click(function () {
		$(this).addClass('active');
		$(this).parent().addClass('product-detail-view'); 
		$(this).children('div.item-more-info').hide().fadeTo(300, 1);
	});
	
	// Exit Product Detail View
	$('div.item-details a.show-all-items').click(function () {
		$('div.item-container').removeClass('active');
		$('div#product-list-container').removeClass('product-detail-view');
		$(this).offsetParent().fadeTo(1, 0);
		return false;
	});

	// Product Detail Slideshow
	$('ul.item-slideshow').cycle({
		prev:   '.previous', 
	    next:   '.next', 
		speed:  400,
	    timeout: 0
	});
	
	// Slideshow Navigation
	$("ul.item-slideshow, div.item-more-info a").hover(
	  function () {
	    $(this).parent().addClass('controls-visible');
	  }, 
	  function () {
	    $(this).parent().removeClass('controls-visible');
	  }
	);
	
});