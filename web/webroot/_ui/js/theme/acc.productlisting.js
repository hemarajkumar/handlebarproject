ACC.productListing = {
	bindAll: function () {
		this.events();
	},
	events: function (){
		
	},
	loadModule: function(id) {
		$.each(productObject.products, function (key, data) {
			jsonData = data[id];
			var template = $("#loadProducts").html();
			$("#ProductLists").html(_.template(template));
		});
	},
	
	loadAllProducts: function (){
		allProductJsonObj = [];
		var num = 0;
		for (var i = 0; i < categoryList.length; i++) {
			$.each(productObject.products, function (key, data) {
				$.each(data[categoryList[i]], function (key1, data1) {
					allProductJsonObj[num] = data1;
					num += 1;
				});
			});
		}
		var template = $("#loadAllProducts").html();
		$("#ProductLists").html(_.template(template));
	}
};

$(document).ready(function () {
	ACC.productListing.bindAll();
});