　
define(['star'], function (){
　　　　　$(document).ready(function(){
		// 计算页面与视觉稿的比例
		setRatio();

		// 初始化滑动组件
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'vertical',
		    // initialSlide: 2,
		    onTransitionEnd: function(swiper){
	            var index = swiper.activeIndex;
	            $('.page').removeClass('active');
	            $('.page' + (index + 1) ).addClass('active');
	            if (swiper.isEnd) {
	          	    $('.icon-arrow').hide().removeClass('animate');
	            }else {
	          	    $('.icon-arrow').show().addClass('animate');
	            }
	        }
	    });
	    mySwiper.lockSwipes();

		// 进度条
		var baseSrc = './src/image/',
			progress = $('.progress'),
			sourceArr = [
				baseSrc + 'p1/p1_bg1.png',
				baseSrc + 'p1/p1_bg2.png',
				baseSrc + 'p1/g1-s72b16aee1b.png',
				baseSrc + 'p1/g2-s93f7a15d3a.png',
				baseSrc + 'p1/g3-s8451fe7af9.png',
				baseSrc + 'p1/g4-s8924acd8ea.png',
				baseSrc + 'p2/p2_bg.png',
				baseSrc + 'p2/p2_sight_bg.png',
				baseSrc + 'p2/p2_top.png',
				baseSrc + 'p2/g1-sc4170a4451.png',
				baseSrc + 'p2/g2-s7a90db7b58.png',
				baseSrc + 'p2/g3-s788d9b496d.png',
				baseSrc + 'p3/p3_circle.png',
				baseSrc + 'p3/g1-se530512306.png',
				baseSrc + 'p3/g2-sbc95832dfa.png',
				baseSrc + 'p4/laodPic1.jpg',
				baseSrc + 'p4/laodaPic2.jpg',
				baseSrc + 'p4/p4_top_bg.png',
				baseSrc + 'p4/g1-s11616b4086.png',
				baseSrc + 'p5/p5_top_bg.png',
				baseSrc + 'p5/p5_top_qie.png',
				baseSrc + 'p5/g1-sea4c61eedf.png',
				baseSrc + 'p6/g1-s3d1d2eecfa.png',
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
					$("#page1").addClass("active");

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
		var dialog = new dialogObj($('.more_btn'));

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








