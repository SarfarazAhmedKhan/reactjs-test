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
		el.innerHTML = '<span style="font-family: \'parentpassadmin\'">' + entity + '</span>' + html;
	}
	var icons = {
		'usd-account-password': '&#xe900;',
		'usd-account': '&#xe901;',
		'usd-activities': '&#xe902;',
		'usd-administrators': '&#xe903;',
		'usd-apple': '&#xe904;',
		'usd-arrow-down-table': '&#xe905;',
		'usd-arrow-down': '&#xe906;',
		'usd-arrow-up-table': '&#xe907;',
		'usd-arrow-up': '&#xe908;',
		'usd-baby': '&#xe909;',
		'usd-baby2': '&#xe90a;',
		'usd-calendar': '&#xe90b;',
		'usd-category': '&#xe90c;',
		'usd-chat': '&#xe90d;',
		'usd-check-circle': '&#xe90e;',
		'usd-check': '&#xe90f;',
		'usd-clock': '&#xe910;',
		'usd-close': '&#xe911;',
		'usd-close2': '&#xe912;',
		'usd-clothing': '&#xe913;',
		'usd-cloud': '&#xe914;',
		'usd-comments': '&#xe915;',
		'usd-cost': '&#xe916;',
		'usd-dashboard': '&#xe917;',
		'usd-delete': '&#xe918;',
		'usd-dots': '&#xe919;',
		'usd-edit': '&#xe91a;',
		'usd-educational': '&#xe91b;',
		'usd-electronics': '&#xe91c;',
		'usd-facebook': '&#xe91d;',
		'usd-freebies': '&#xe91e;',
		'usd-furniture': '&#xe91f;',
		'usd-home-items': '&#xe920;',
		'usd-host': '&#xe921;',
		'usd-link': '&#xe922;',
		'usd-logout': '&#xe923;',
		'usd-map-pin': '&#xe924;',
		'usd-map-pin2': '&#xe925;',
		'usd-other': '&#xe926;',
		'usd-pdf': '&#xe927;',
		'usd-resources': '&#xe928;',
		'usd-search': '&#xe929;',
		'usd-sort': '&#xe92a;',
		'usd-toggle-menu-open': '&#xe92b;',
		'usd-toggle-menu': '&#xe92c;',
		'usd-toys': '&#xe92d;',
		'usd-translate': '&#xe92e;',
		'usd-upload': '&#xe92f;',
		'usd-users': '&#xe930;',
		'usd-view-password-cut': '&#xe931;',
		'usd-view-password': '&#xe932;',
		'usd-warning': '&#xe933;',
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
		c = c.match(/usd-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
