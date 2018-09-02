ACC.Menu = {
	bindAll: function () {
		this.loadMenu();
		this.loadEvents();
	},
	loadMenu: function (){
		$.each(productObject.products, function (key, data) {
			jsonData = data.menutitle;
		});
		var template = $("#menuList").html();
		$("#menuBlock").html(_.template(template));
	},
	loadEvents: function (){





		$('.logo').click(function (e){
			$(".contentDiv").hide();
			$("#HomePage").fadeIn();
		});


		$(".js-category").click(function (e){
			e.preventDefault();
			var thisObj = $(this);
			var catid = $(thisObj).data('category');
			$('#menuBlock li').each (function(e){
					$(this).find('a.js-category').removeClass("active");
			});
			if (catid != 'all'){
				$(thisObj).addClass("active");
		  }
			ACC.productListing.loadPlpProducts(catid);
			$(".contentDiv").hide();
			$(".js-productListing").fadeIn();
		});

	}
};

$(document).ready(function () {
	ACC.Menu.bindAll();
});
