require.config({
	baseUrl: "./assests/lib/",
　　　　paths: {
　　　　　　"zepto": "zepto.min",
　　　　　　"swiper": "swiper-3.3.1.zepto.min",
	   "base": "../js/base",
	   "star": '../js/star',
	   "dialog": '../js/dialog'
　　　　},
	shim: {
		'zepto': {
		　　　　　　exports: '$'
		　},
		'star': {
		　　　　　　exports: 'star'
		　},
		'dialog': {
		　　　　　　exports: 'dialog'
		　},
		'base': {
			deps: ['zepto', 'swiper', 'motion-loader', 'star', 'dialog'],
			exports: 'base'
		}
	}
});

require(['base'], function (base){
　　　　
});