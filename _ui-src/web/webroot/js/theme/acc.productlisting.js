ACC.productListing = {
	bindAll: function () {
		this.events();
	},
	events: function (){
	},
	loadPlpProducts: function(id) {
		$('#ProductLists').html('');
		for (let i = 0; i < categoryList.length; i++) {
			ACC.productListing.getCategoryList (categoryList[i], id);
		}
	},
	getCategoryList: function (data, id) {
		let plpProducts  = document.getElementById("loadPlpProducts").innerHTML;
		let plpTemplate = Handlebars.compile(plpProducts);
		let plpProducthtml;
		$.each(productObject.products, function (key, dataObj) {
				$.each(dataObj[data], function (key1, product) {
					product.type = data;
					if (id == 'all'){
						plpProducthtml    = plpTemplate(product, data);
						$("#ProductLists").append(plpProducthtml);
					} else {
						if ((product.id).indexOf(id) >= 0){
							plpProducthtml    = plpTemplate(product, data);
							$("#ProductLists").append(plpProducthtml);
						}
					}
				});
		});
	},

	loadProductData: function () {

	}

};

$(document).ready(function () {
	ACC.productListing.bindAll();
});
