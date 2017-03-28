// 弹框
var dialogObj = function($tirggerObj) {
	var $dialog = $('.dialog');
	
	$tirggerObj.click(function(){
		var $Infoparent = $(this).parents('.loadList');
		var imgSrc = $Infoparent.find('.laodaPic').attr('src'),
			tit = $Infoparent.find('.tit').text();
			text = $Infoparent.find('.content').text();

		$dialog.find('img').attr('src', imgSrc);
		$dialog.find('.tit').text(tit);
		$dialog.find('.content').text(text);
		$dialog.show();


	});
	$dialog.find('.close_btn').click(function() {
		$dialog.hide();
	})
} 