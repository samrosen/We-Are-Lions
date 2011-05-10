$(document).ready(function() {

	// Contact Default Text
	$('#contact-form input, #contact-form textarea').focus(function () {
		if ($(this).val() == $(this).attr("title")) {
			$(this).val("");
		}
	}).blur(function () {
		if ($(this).val() == "") {
			$(this).val($(this).attr("title"));
		}
	});

	// Contact Form Validation & Send
	jQuery.validator.addMethod("notEqual", function(value, element, param) {
	  return this.optional(element) || value !== param;
	}, "Please choose a value!");

	$('#contact-form').validate({
		errorLabelContainer: $("#contact-form div.error"),
		rules: {
		        personname: {
		            required: true,
		            notEqual: "Name"
				},
				email: {
		            required: true,
					email: true,
		            notEqual: "Email"
				},
				comment: {
		            required: true,
		            notEqual: "Comment"
				}
		    },
		messages: {
				personname: '<span>Hey whats your name?</span>',
				email: '<span>Whats your email address?.</span>',
				comment: '<span>You should leave a comment.</span>'
				},
		submitHandler: function(form) {
			jQuery(form).ajaxSubmit(function() { 
			   $('div#form-success').fadeTo(1, 0).css('visibility', 'visible').hide();
	           $('#contact-form').fadeTo("fast", 0).slideUp('slow', function() {
				    $('div#form-success').fadeTo("slow", 1);
				  });
			   
	        });
		}
	});

});