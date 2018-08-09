var jsonData;
var productListData;
var allProductJsonObj = {};
var categoryList = new Array();
var currencyObj;
var cartPageList = [];
var priceArray = [];
var productData = {"products":[{
"menutitle":[
{"title":"Women's Footwear", "id":"cat01"},
{"title":"Men's Footwear", "id":"cat02"},
{"title":"Women's Casualwear", "id":"cat03"},
{"title":"Men's Casualwear", "id":"cat04"},
{"title":"Womens's Formalwear", "id":"cat05"},
{"title":"Men's Formalwear", "id":"cat06"}
],
"cat01":[
{"id":"cat01_01", "name":"Almond Toe Court Shoes, Patent Black", "price":"1.00", "image":"images/noImage.gif", "quantity":"5", "basketadded":"0"},
{"id":"cat01_02", "name":"Suede Shoes, Blue", "price":"42.00", "image":"images/noImage.gif", "quantity":"4", "basketadded":"0"}
],
"cat02":[
{"id":"cat02_01", "name":"Leather Driver Saddle Loafers, Tan", "price":"34.00", "image":"images/noImage.gif", "quantity":"12", "basketadded":"0"},
{"id":"cat02_02", "name":"Flip Flops, Red", "price":"19.00", "image":"images/noImage.gif", "quantity":"6", "basketadded":"0"},
{"id":"cat02_03", "name":"Flip Flops, Blue", "price":"19.00", "image":"images/noImage.gif", "quantity":"0", "basketadded":"0"}
],
"cat03":[
{"id":"cat03_01", "name":"Button Cardigan, Black", "price":"167.00", "image":"images/noImage.gif", "quantity":"6", "basketadded":"0"},
{"id":"cat03_02", "name":"Cotton Shorts, Medium Red", "price":"30.00", "image":"images/noImage.gif", "quantity":"5", "basketadded":"0"}
],
"cat04":[
{"id":"cat04_01", "name":"Fine Stripe Short Sleeve Shirt, Grey", "price":"49.99", "image":"images/noImage.gif", "quantity":"9", "basketadded":"0"},
{"id":"cat04_02", "name":"Fine Stripe Short Sleeve Shirt, Green", "price":"39.99", "image":"images/noImage.gif", "was":"49.99", "quantity":"3", "basketadded":"0"}
],
"cat05":[
{"id":"cat05_01", "name":"Bird Print Dress, Black", "price":"270.00", "image":"images/noImage.gif", "quantity":"10", "basketadded":"0"},
{"id":"cat05_02", "name":"Mid Twist Cut-Out Dress, Pink", "price":"540.00", "image":"images/noImage.gif", "quantity":"5", "basketadded":"0"}
],
"cat06":[
{"id":"cat06_01", "name":"Sharkskin Waistcoat, Charcoal", "price":"75.00", "image":"images/noImage.gif", "quantity":"2", "basketadded":"0"},
{"id":"cat06_02", "name":"Lightweight Patch Pocket Blazer, Deer", "price":"175.00", "image":"images/noImage.gif", "quantity":"1", "basketadded":"0"}
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


var productObject;
productObject = jQuery.extend(true, {}, productData);



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
	if (keynum == 8 || keynum == 36 || keynum == 46 || keynum == 37 || keynum == 39 || keynum == 9 || (keynum >= 96 && keynum <= 105)){return};
	return numcheck.test(keychar);
}



$(document).ready(function() {
	//$('input[name="qty"]').numeric();
});