/*
ACC.productupdate = {
	bindAll: function () {
	//	this.events();
	},

	checkQuantity: function(id) {
		clearTimeout(timeoutid);
		var btnObj = $("#" + id);
		var parentObj = $(btnObj).parent();
		var qtyObj =  $(btnObj).parent().find('.qty');
		var qtyValue = $.trim($(qtyObj).val());
		var productsAvailable = $(btnObj).data('availableproducts') - $(btnObj).data('basketadded');
		if (qtyValue == ''){
			$(parentObj).find('span.errorMsg').html('please enter quantity').css('display','block');
			var timeoutid = setTimeout(function() {$(parentObj).find('span.errorMsg').fadeOut();}, 5000);
		}
		else {
			if (qtyValue > productsAvailable){
				$(parentObj).find('span.errorMsg').html('Your requested quantity is not available').css('display','block');
				var timeoutid = setTimeout(function() {$(parentObj).find('span.errorMsg').fadeOut();}, 5000);
			}
			else {
				$(parentObj).find('span.errorMsg').html('').css('display','none');
				this.updateQuantity (id, qtyValue);
				this.updatePrice (id, qtyValue);
			}
		}
	},

	updateQuantity: function(productId, quantity){
		var qty = parseInt(quantity);
		var array = productId.split("_");
		var categoryId = array[0];
		$.each(productObject.products, function (key, data) {
			$.each(data[categoryId], function (idx, product) {
				if (product.id == productId){
					var basketQty = parseInt(product.basketadded) + qty;
					product.basketadded = basketQty;
					var btnObj = $("#" + productId);
					var parentObj = $(btnObj).closest('ul');
					var availableQty = parseInt(product.quantity);
					product.quantity = availableQty - qty;
					$(parentObj).find('span.availableQty').html(product.quantity);
					var chkBasketCount = parseInt($('.count').html());
					$('.count').html(chkBasketCount + qty);
					$(btnObj).data('basketadded', basketQty);
					//console.log($(btnObj).data('basketadded')
					//console.log(product);
				}
			});
		});

	},

	updatePrice: function(productId, quantity){
		var qty = parseInt(quantity);
		var array = productId.split("_");
		var categoryId = array[0];
		$.each(productObject.products, function (key, data) {
				$.each(data[categoryId], function (idx, product) {
				if (product.id == productId){
					var price = product.price;
					price = parseFloat(price.replace( /,/g,''));
					price = price * qty;
					var oldPrice = $("#miniBasketPrice").html();
					oldPrice = parseFloat(oldPrice.replace( /,/g,''));
					var newPrice = oldPrice + price;
					//newPrice = parseFloat(newPrice.replace( /,/g,''));
					$("#miniBasketPrice").html(newPrice.toFixed(2));
				}
			});
		});
	}
};

$(document).ready(function () {
	ACC.productupdate.bindAll();
});

*/
