　
define(['star'], function (){
　　　　　$(document).ready(function(){
		// 计算页面与视觉稿的比例
		setRatio();

		// 初始化滑动组件
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'vertical',
		    onSlideChangeEnd: function(swiper){
	          var index = swiper.activeIndex;
	          $('.screen').removeClass('active');
	          $('.screen' + (index + 1) ).addClass('active');
	          if (mySwiper.isEnd) {
	          	$('.icon-arrow').hide().removeClass('animate');
	          }else {
	          	$('.icon-arrow').show().addClass('animate');
	          }
	        }
	    });
	    mySwiper.lockSwipes();

		// 进度条
		var baseSrc = './assests/image/',
			progress = $('.progress'),
			sourceArr = [
				baseSrc + 'screen1/bg1.png',
				baseSrc + 'screen1/bg2.png'
			]; //需要加载的资源列表
		var loader = new mo.Loader(sourceArr, {
			loadType : 1,
			minTime : 100,
			onLoading : function(count,total){
				progress.text('loading... '+Math.floor(count/total*100)+'%');
			},
			onComplete : function(time){
				setTimeout(function() {
					// 初始化星星
					star = new starObj();
					star.init();
					$("#screen1").addClass("active");

					mySwiper.slideNext();
					setTimeout(function() {
						mySwiper.removeSlide(0);
					mySwiper.unlockSwipes();
					}, 300);

					// 箭头
					$('.icon-arrow').show().addClass('animate');

				}, 500);
			}
		});


		// 第四屏的弹出框
		var dialog = new dialogObj($('.more'));

		// 下一屏
		$('.icon-arrow').click(function(){
			mySwiper.slideNext();
		});

	});

	$(window).resize(function() {
		setRatio();
	})

	function setRatio() {
		deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 640 ) deviceWidth = 640;
		$('html').css({'font-size': deviceWidth / 6.4 + 'px'});
		
		$('.spriteImg').css('background-size', $('.spriteImg').width() * (deviceWidth / 640) + 'px');
	}

});








