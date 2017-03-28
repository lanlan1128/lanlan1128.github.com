// 星星排列
var starObj = function() {
	this.stars = [];   // 存储星星
	this.x;    // 星星的坐标
	this.y;
};
starObj.prototype.num = 23;
starObj.prototype.init = function() {
	this.x = [123, 188, 412, 185, 386, 458, 384, 336, 313, 68, 448, 548, 171, 24, 128, 584, 460, 478, 222, 477, 42, 27, 498];
	this.y = [62, 130, 84, 624, 606, 471, 486, 136,  661, 542, 222, 486, 248, 232, 443, 140, 556, 56, 502, 132, 146, 374, 422];

	for(var i = 0; i < this.num; i++) {
		this.stars[i] = new Image();
		this.stars[i].src = './assests/image/screen1/star' + (i+1) + '.png'; 
 		this.stars[i].onload = function() {
			this.style.width =  this.width * deviceWidth / 640 + 'px';

			// 星星闪烁
			var t = Math.random() * 10;
			this.style.animationDelay =  t + 's';
			this.className = 'star imgEle';
 		}
 		this.stars[i].style.left = this.x[i] * deviceWidth / 640 + 'px';
		this.stars[i].style.top = (this.y[i] - 128) * deviceWidth / 640 + 'px';
		document.getElementById('screen1').appendChild(this.stars[i]);
	}
}
