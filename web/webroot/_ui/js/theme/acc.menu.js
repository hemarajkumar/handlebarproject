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
		$(".category").click(function (e){
			$('.categoryTitle').html($(this).html());
			var thisObj = $(this);
			var catid = $(thisObj).data('category');
			$(".contentDiv").hide();
			$("#ProductListing").fadeIn();
			$('#menuBlock li').each (function(e){
				$(this).find('a.category').removeClass("active");
			});
			$(thisObj).addClass("active");
			ACC.productListing.loadModule(catid);
			$(".contentDiv").hide();
			$("#ProductListing").fadeIn();
		});
		$('.logo').click(function (e){
			$(".contentDiv").hide();
			$("#HomePage").fadeIn();
		});
		
		$("#showAll").click(function(e){
			$('.categoryTitle').html($(this).html());
			e.preventDefault();
			ACC.productListing.loadAllProducts();
			$(".contentDiv").hide();
			$("#ProductListing").fadeIn();
		});
		
		$(".minicartbg").click(function(e){
			e.preventDefault();
			var count = parseInt($(".count").html());
			if (count > 0){
				ACC.cartPage.loadCartPage();
				$(".contentDiv").hide();
				$("#cartPage").fadeIn();
			}
		});
		
	}
};

$(document).ready(function () {
	ACC.Menu.bindAll();
});