ACC.productDetails = {
	bindAll: function () {
		this.events();
	},
	events: function (){
		$(document).on('click', '.js-navigatePdp', function(e){
			e.preventDefault();
			$('#pdpData').html('');
			let productName = $(this).data('product');
			$.each(productDetails.products, function (data) {
				ACC.productDetails.getobjectValue(this, productName);
			});
			$('#menuBlock li').each (function(e){
					$(this).find('a.js-category').removeClass("active");
			});
		});
	},
	getobjectValue: function (obj, name) {
		let pdpContentTemplate  = document.getElementById("pdpContentTemplate").innerHTML;
		let pdpTemplate = Handlebars.compile(pdpContentTemplate);
		let pdpProducthtml;
			$.each(obj, function (key, product) {
				if (key == name){
					pdpProducthtml    = pdpTemplate(product[0]);
					$("#pdpData").append(pdpProducthtml);
					$(".contentDiv").hide();
					$(".js-productDetails").fadeIn();
				}
			});
	}
};

$(document).ready(function () {
	ACC.productDetails.bindAll();
});
