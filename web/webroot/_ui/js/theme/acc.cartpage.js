/*
ACC.cartPage = {
	bindAll: function () {
		this.events();
	},
	events: function (){
		$("#applyVoucher").click(function (e){
			e.preventDefault();
			var existingVoucher = $(this).data('usedvoucher');
			var voucherCode = $("#voucherid").val();
			if (existingVoucher == ''){
				var voucherobj;
				var voucherExists = false;
				$.each(productObject.products, function (key, data) {
					var obj = data.voucher;
					$.each(obj, function (key1, data1) {
						if (data1.code == voucherCode){
							voucherExists = true;
							voucherobj = obj;
							ACC.cartPage.validateVoucher(data1);
						}
					});
				});
				if (voucherExists == false) {
					$('.vouchererror').html('Voucher not exists');
					$('.vouchererror').fadeIn();
					setTimeout(function() {$('.vouchererror').fadeOut();}, 5000);
				}
			} else {
				$('.vouchererror').html('Voucher already used. Please remove existing voucher');
				$('.vouchererror').fadeIn();
				setTimeout(function() {$('.vouchererror').fadeOut();}, 5000);
			}
		});
	},

	validateVoucher: function(obj){
		var baskettotal = $("#nettotal").html();
		baskettotal = parseFloat(baskettotal.replace( /,/g,''));
		var min = obj.minimumvalue;
		min = parseFloat(min.replace( /,/g,''));
		var discount = obj.value;
		discount = parseFloat(discount.replace( /,/g,''));
		if (obj.used == "yes"){
			$('.vouchererror').html('This voucher already applied');
			$('.vouchererror').fadeIn();
			setTimeout(function() {$('.vouchererror').fadeOut();}, 5000);
		} else {
			if (baskettotal >= min){
				baskettotal = baskettotal - discount;
				$("#nettotal").html(baskettotal.toFixed(2));
				$("#miniBasketPrice").html($("#nettotal").html());
				$("#discountPrice").html(discount.toFixed(2));
				obj.used = "yes";
				$("#applyVoucher").data('usedvoucher', obj.code);
				$('.vouchererror').html('Voucher updated');
				$('.vouchererror').fadeIn();
				setTimeout(function() {$('.vouchererror').fadeOut();}, 5000);
			}
			else {
				$('.vouchererror').html(obj.vouchererror);
				$('.vouchererror').fadeIn();
				setTimeout(function() {$('.vouchererror').fadeOut();}, 5000);
			}
		}
	},

	loadCartPage: function() {
		var num = 0;
		allProductJsonObj = [];
		priceArray = [];
		for (var i = 0; i < categoryList.length; i++) {
			$.each(productObject.products, function (key, data) {
				$.each(data[categoryList[i]], function (key1, data1) {
					if (data1.basketadded > 0) {
						var qty = parseInt(data1.basketadded);
						var price = data1.price;
						price = parseFloat(price.replace( /,/g,''));
						var productprice = price * qty;
						productprice = productprice.toFixed(2);
						data1.productPrice = productprice;
						allProductJsonObj[num] = data1;
						priceArray.push(productprice);
					}
					num += 1;
				});
			});
		}
		var template = $("#loadCartPage").html();
		$("#basketProducts").html(_.template(template));
		this.subTotal(priceArray);
	},

	subTotal(obj){
		var totalprice = 0;
		for (var i = 0; i < obj.length; i++){
			var price = obj[i];
			price = parseFloat(price.replace( /,/g,''));
			totalprice = totalprice + price;
		}
		$("#subtotal").html(totalprice.toFixed(2));
		$("#nettotal").html(totalprice.toFixed(2));
	}
};

$(document).ready(function () {
	ACC.cartPage.bindAll();
});
*/
