$(document).ready(function() {
	function updateSpinner(obj) {
		var contentObj = $(obj).parents('.order-form__passengers').find('.order-form__passengers-input');


		var value = parseInt(contentObj.val());
		if($(obj).hasClass('input-number-more')) {
			value++;
		} else {
			if(!(value <= 1)) {
				value--;
			}
		}
		contentObj.val(value);
	}

	$('.spin').click(function(event) {
		updateSpinner($(this));
	});
	$('.order-form__passengers-input').blur(function(event) {
		if (!$(this).val() || $(this).val() == 0)
			$(this).val('1');
	});

	$('.order-form__date-input').datepicker({});


});