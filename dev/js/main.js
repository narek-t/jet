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

	$('.order-form__table').on('click', '.spin', function(event) {
		updateSpinner($(this));
	});
	$('.order-form__passengers-input').blur(function(event) {
		if (!$(this).val() || $(this).val() == 0)
			$(this).val('1');
	});

	var ifDate = $('.order-form__date-input').length;

	if(ifDate) {
		$('.order-form__date-input').datepicker({
			format: 'dd/mm/yyyy',
			autoclose: true,
		});
	}

	

	$('.add-row').click(function(event) {
		event.preventDefault();
		var newRow = '<tr> <td class="order-form__origin-city"> <input type="text" placeholder="Город / Аэропорт" class="order-form__input order-form__city"/> </td><td class="order-form__destination-city"> <input type="text" placeholder="Город / Аэропорт" class="order-form__input order-form__city"/> </td><td class="order-form__date"> <input type="text" placeholder="Дата" class="order-form__input order-form__date-input"/> </td><td class="order-form__passengers"> <input type="number" value="1" min="1" step="1" pattern="[0-9]*" inputmode="numeric" class="order-form__input order-form__passengers-input"/> <div class="input-number-less spin"></div><div class="input-number-more spin"></div><a href="#" class="delete-row"></a></td></tr>';
		$('.order-form__table').append(newRow);
		var rowCount = $('.order-form__table tr').length -1;
		if(rowCount > 1) {
			$('.delete-row').addClass('active');
		}
		$('.order-form__date-input').datepicker({
			format: 'dd/mm/yyyy',
			autoclose: true,
		});
	});

	$('.more-desire').click(function(event) {
		event.preventDefault();
		$(this).hide();
		$('.order-form__desire').addClass('active');
	});

	$('.order-form__table').on('click', '.delete-row', function(event) {
		event.preventDefault();
		$(this).parents('tr').remove();
		var rowCount = $('.order-form__table tr').length -1;
		if(rowCount <= 1) {
			$('.delete-row').removeClass('active');
		}
	});

	$('.upcoming__table').DataTable({
		"paging":   false,
		"info":     false,
		"searching":false,
		responsive: true,
		"aoColumnDefs": [
          { 'bSortable': false, 'aTargets': [ 6 ] }
       ]
	});

	$('.transfer__table').DataTable({
		"paging":   false,
		"info":     false,
		"searching":false,
		responsive: true,
		"aoColumnDefs": [
          { 'bSortable': false, 'aTargets': [ 1, 2, 3, 4, 5 ] }
       ]
	});


	var ifTransferDate = $('.transfer__table-date').length;

	if(ifTransferDate) {
		$('.transfer__table-date').datepicker({
			format: 'dd.mm.yyyy',
			autoclose: true,
		});
	}

});