/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'RS-Icons-Web\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-rs_arrange-compare': '&#xe600;',
		'icon-rs_arrange-grid': '&#xe601;',
		'icon-rs_arrange-list': '&#xe602;',
		'icon-rs_arrow-down': '&#xe603;',
		'icon-rs_arrow-left': '&#xe604;',
		'icon-rs_arrow-right': '&#xe605;',
		'icon-rs_arrow-up': '&#xe606;',
		'icon-rs_basket-empty': '&#xe607;',
		'icon-rs_basket': '&#xe608;',
		'icon-rs_box-cross': '&#xe609;',
		'icon-rs_box-tick': '&#xe60a;',
		'icon-rs_box': '&#xe60b;',
		'icon-rs_cal-iso': '&#xe60c;',
		'icon-rs_cal-rs': '&#xe60d;',
		'icon-rs_cal-sys': '&#xe60e;',
		'icon-rs_cal-uka': '&#xe60f;',
		'icon-rs_calendar': '&#xe610;',
		'icon-rs_chat': '&#xe611;',
		'icon-rs_chev-down': '&#xe612;',
		'icon-rs_chev-left': '&#xe613;',
		'icon-rs_chev-right': '&#xe614;',
		'icon-rs_chev-up': '&#xe615;',
		'icon-rs_cross': '&#xe616;',
		'icon-rs_delete': '&#xe617;',
		'icon-rs_delivery-collection': '&#xe618;',
		'icon-rs_delivery-no': '&#xe619;',
		'icon-rs_delivery': '&#xe61a;',
		'icon-rs_discontinued': '&#xe61b;',
		'icon-rs_edit': '&#xe61c;',
		'icon-rs_email': '&#xe61d;',
		'icon-rs_file-3d': '&#xe61e;',
		'icon-rs_file-missing': '&#xe61f;',
		'icon-rs_file-pdf': '&#xe620;',
		'icon-rs_file-video': '&#xe621;',
		'icon-rs_filter': '&#xe622;',
		'icon-rs_in-progress': '&#xe623;',
		'icon-rs_info': '&#xe624;',
		'icon-rs_link': '&#xe625;',
		'icon-rs_loading': '&#xe626;',
		'icon-rs_location': '&#xe627;',
		'icon-rs_out-of-stock': '&#xe628;',
		'icon-rs_packaging': '&#xe629;',
		'icon-rs_phone': '&#xe62a;',
		'icon-rs_plus': '&#xe62b;',
		'icon-rs_pointer-down': '&#xe62c;',
		'icon-rs_pointer-right': '&#xe62d;',
		'icon-rs_print': '&#xe62e;',
		'icon-rs_save': '&#xe62f;',
		'icon-rs_search': '&#xe630;',
		'icon-rs_settings': '&#xe631;',
		'icon-rs_share': '&#xe632;',
		'icon-rs_star-stroke': '&#xe633;',
		'icon-rs_star': '&#xe634;',
		'icon-rs_text-close': '&#xe635;',
		'icon-rs_text-edit': '&#xe636;',
		'icon-rs_text-open': '&#xe637;',
		'icon-rs_tick': '&#xe638;',
		'icon-rs_tools': '&#xe639;',
		'icon-rs_user': '&#xe63a;',
		'icon-rs_view': '&#xe63b;',
		'icon-rs_warning': '&#xe63c;',
		'icon-rs_zoom-in': '&#xe63d;',
		'icon-rs_zoom-out': '&#xe63e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
