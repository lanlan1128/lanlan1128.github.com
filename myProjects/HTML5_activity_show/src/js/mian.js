require.config({
	baseUrl: "./lib/",
　　　　paths: {
　　　　　　"zepto": "zepto.min",
　　　　　　"swiper": "swiper-3.3.1.zepto.min",
	   "base": "../src/js/base",
	   "star": '../src/js/star',
	   "dialog": '../src/js/dialog'
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