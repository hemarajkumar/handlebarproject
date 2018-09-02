var jsonData;
var productListData;
var allProductJsonObj = {};
var categoryList = [];
var currencyObj;
var cartPageList = [];
var priceArray = [];
var productData = {"products":[{
"menutitle":[
{"title":"Shoes", "id":"cat01"},
{"title":"Clothing", "id":"cat02"},
{"title":"Handbags", "id":"cat03"},
{"title":"Accessories", "id":"cat04"}
],
"cat01":[
{"id":"cat01_01", "name":"Blair Black Leather Ankle Boots", "image":"web/webroot/_ui/images/shoe1.jpg", "roundel": "true", "roundelImg":"web/webroot/_ui/images/roundelbg.png"},
{"id":"cat01_02", "name":"Mary-Jane Green Velvet Flats", "image":"web/webroot/_ui/images/shoe2.jpg"},
{"id":"cat01_03", "name":"Sersha Navy Croc Effect Closed Courts", "price":"175.00", "image":"web/webroot/_ui/images/shoe3.jpg"}
],
"cat02":[
{"id":"cat02_01", "name":"Elspeth Red Dress", "price":"34.00", "image":"web/webroot/_ui/images/clothing1.jpg"},
{"id":"cat02_02", "name":"Ellora Blue Silk Culotte Jumpsuit", "image":"web/webroot/_ui/images/clothing2.jpg"},
{"id":"cat02_03", "name":"Adriana Red Skirt", "price":"19.00", "image":"web/webroot/_ui/images/clothing3.jpg"}
],
"cat03":[
{"id":"cat03_01", "name":"Melanie Taupe Black Leather Shoulder Bag", "image":"web/webroot/_ui/images/handbags1.jpg"},
{"id":"cat03_02", "name":"Brooke Navy Tote Bag", "price":"30.00", "image":"web/webroot/_ui/images/handbags2.jpg", "roundel": "true", "roundelImg":"web/webroot/_ui/images/roundelbg.png"},
{"id":"cat03_03", "name":"Maeve Black Leather Shoulder Bag", "image":"web/webroot/_ui/images/handbags3.jpg"}
],
"cat04":[
{"id":"cat04_01", "name":"Penelope Tangerine Croc Effect Purse", "price":"49.99", "image":"web/webroot/_ui/images/accessories1.jpg"},
{"id":"cat04_02", "name":"Porthia Wine Croc Effect Card Holder", "price":"39.99", "image":"web/webroot/_ui/images/accessories2.jpg"},
{"id":"cat04_03", "name":"Indi Leopard Print Cosmetic Bag", "price":"270.00", "image":"web/webroot/_ui/images/accessories3.jpg", "roundel": "true", "roundelImg":"web/webroot/_ui/images/roundelbg.png"},
{"id":"cat04_04", "name":"Zahara Blue Suede Belt", "price":"540.00", "image":"web/webroot/_ui/images/accessories4.jpg"}
],
"vouchererror":[
{"errormsg":"Voucher already applied.","successmsg":"Voucher updated in your basket","renmovedvoucher":"Your voucher removed","novoucher":"There is no voucher available. Please check the voucher code"}
],
"voucher":[
{"code":"abcd05", "minimumvalue":"5.00", "value":"5:00", "vouchererror":"Voucher applicable only if your cart total is minimum 5:00", "used":"no"},
{"code":"abcd10", "minimumvalue":"50.00", "value":"10.00", "vouchererror":"Voucher will be applicable only your cart total is above 50.00", "used":"no"},
{"code":"abcd15", "minimumvalue":"75.00", "value": "15:00", "mandatoryproducts":"cat01-cat02", "vouchererror":"Voucher will be applicable only your cart total is above 75.00", "mandatoryerror":"You should add following products in your basket for using this voucher", "used":"no"}],
"basketerror":[{"product":"product removed from the  basket", "products removed":"products removed from basket"}]
}]}

var productDetails = {"products":[{
		"cat01_01":[{
		"name":"Blair Black Leather Ankle Boots",
		"price":"100.00",
		"was":"149.99",
	 "image":"web/webroot/_ui/images/shoe-bigimage.jpg",
	 "quantity":"5",
	 "roundel": "true",
	 "roundelImg":"web/webroot/_ui/images/roundelbg.png",
	 "desctiption":"product description ........"}]
 },
{
"cat01_02":[{
"name":"Mary-Jane Green Velvet Flats",
"price":"125.00",
"image":"web/webroot/_ui/images/shoe-bigimage.jpg",
"quantity":"0",
"desctiption":"product description ........"}]
},
{"cat01_03":[{
"name":"Sersha Navy Croc Effect Closed Courts",
"price":"99.99",
"was":"129.99",
"image":"web/webroot/_ui/images/shoe-bigimage.jpg",
"quantity":"5",
"desctiption":"product description ........"}]
},
{
"cat02_01":[{
"name":"Elspeth Red Dress",
"price":"34.00",
"was":"49.99",
"image":"web/webroot/_ui/images/clothing-bigimage.jpg",
"quantity":"5",
"desctiption":"product description ........"}]
 },
{
"cat02_02":[{
"name":"Ellora Blue Silk Culotte Jumpsuit",
"price":"125.00",
"image":"web/webroot/_ui/images/clothing-bigimage.jpg",
"quantity":"0",
"desctiption":"product description ........"}]
},
{"cat02_03":[{
"name":"Adriana Red Skirt",
"price":"99.99",
"was":"129.99",
"image":"web/webroot/_ui/images/clothing-bigimage.jpg",
"quantity":"5",
"desctiption":"product description ........"}]
},{
"cat03_01":[{
"name":"Melanie Taupe Black Leather Shoulder Bag",
"price":"34.00",
"was":"49.99",
"image":"web/webroot/_ui/images/handbags-bigimage.jpg",
"quantity":"5",
"desctiption":"product description ........"}]
 },
{
"cat03_02":[{
"name":"Brooke Navy Tote Bag",
"price":"125.00",
"image":"web/webroot/_ui/images/handbags-bigimage.jpg",
"quantity":"0",
"roundel": "true",
"roundelImg":"web/webroot/_ui/images/roundelbg.png",
"desctiption":"product description ........"}]
},
{"cat03_03":[{
"name":"Maeve Black Leather Shoulder Bag",
"price":"99.99",
"was":"129.99",
"image":"web/webroot/_ui/images/handbags-bigimage.jpg",
"quantity":"5",
"desctiption":"product description ........"}]
},{
"cat04_01":[{
"name":"Penelope Tangerine Croc Effect Purse",
"price":"164.00",
"was":"199.99",
"image":"web/webroot/_ui/images/accessories-bigimage.jpg",
"quantity":"5",
"desctiption":"product description ........"}]
 },
{
"cat04_02":[{
"name":"Porthia Wine Croc Effect Card Holder",
"price":"125.00",
"image":"web/webroot/_ui/images/accessories-bigimage.jpg",
"quantity":"15",
"desctiption":"product description ........"}]
},
{"cat04_03":[{
"name":"Indi Leopard Print Cosmetic Bag",
"price":"99.99",
"was":"129.99",
"image":"web/webroot/_ui/images/accessories-bigimage.jpg",
"quantity":"25",
"roundel": "true",
"roundelImg":"web/webroot/_ui/images/roundelbg.png",
"desctiption":"product description ........"}]
},
{"cat04_04":[{
"name":"Zahara Blue Suede Belt",
"price":"99.99",
"was":"129.99",
"image":"web/webroot/_ui/images/shoe1.jpg",
"quantity":"0",
"desctiption":"product description ........"}]
}
]}

var productObject;
productObject = jQuery.extend(true, {}, productData);
productDetails = jQuery.extend(true, {}, productDetails);

Handlebars.registerHelper('addtobagbtn', function(qty) {
	var btnText;
  if(qty > 0) {
  	return new Handlebars.SafeString("<button type=\"button\" class=\"btn btn-primary pdp-productinfo__addBasket\">Add to Basket</button>");
  } else {
		return new Handlebars.SafeString("<button type=\"button\" class=\"btn btn-secondary pdp-productinfo__addBasket\">Out of stock</button>");
	}
});

Handlebars.registerHelper('nowprice', function(price, was) {
		if (was == 'true') {
			return new Handlebars.SafeString("Now: <i>&#163;" + price + "</i>");
		} else {
			return new Handlebars.SafeString("&#163;" + price);
		}
});

Handlebars.registerHelper('wasprice', function(price) {
			return new Handlebars.SafeString("Was: <i>&#163;" + price + "</i>");
});

function IsNumeric(obj, event){
	var keynum;
	var keychar;
	var numcheck;
	if(window.event) // IE
	{
		keynum = event.keyCode;
	}
	else if(event.which) // Netscape/Firefox/Opera
	{
		keynum = event.which;
	}
	keychar = String.fromCharCode(keynum);
	numcheck = /\d/;
	if (keynum == 96 && obj.value == ""){return false;}
	if (keynum == 48 && obj.value == ""){return false;}
	if (keynum == 8 || keynum == 36 || keynum == 46 || keynum == 37 || keynum == 39 || keynum == 9 || (keynum >= 96 && keynum <= 105)){return}
	return numcheck.test(keychar);
}

$(document).ready(function () {
	$('#load-minibasket-popover').popover( {
			 content: '<div id="ajax-popover"><div class="spinner">Loading...</div></div>',
			 html: true,
			 placement: 'bottom'
		});
		$('#load-minibasket-popover').popover('show');
});
