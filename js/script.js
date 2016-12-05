window.onload = function() {
	/*
		轮播效果
	*/

	// 轮播容器
	var container = document.getElementById('container');
	// 图片列表
	var list = document.getElementById('list');
	// 切换按钮组
	var nav_trriger = document.getElementById('nav_trriger').getElementsByTagName('li');
	// 左右箭头
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');

	// 单幅图片宽度
	var imageWidth = 1190;
	// 图片数量
	var imageCount = list.getElementsByTagName('img').length;
	// 当前索引
	var currIndex = 0;
	// 动画同步标识
	var isAnimate = false;

	// 左箭头单击事件
	prev.onclick = function() {

		//判断动画是否进行中
		if (isAnimate)
			return;

		// 索引递增
		currIndex --;

		if (currIndex < 0)
			currIndex = imageCount - 3;

		animate(imageWidth);//运动		
	}

	// 右箭头单击事件
	next.onclick = function() {

		//判断动画是否进行中
		if (isAnimate)
			return;

		// 索引递减
		currIndex ++;

		if (currIndex > imageCount - 3)
			currIndex = 0;

		animate(-imageWidth); //运行		
	}

	// 遍历切换按钮组
	for (var i = 0;i < nav_trriger.length;i ++) {

		(function(index){

			nav_trriger[i].onclick = function() {	

				//判断动画是否进行中
				if (isAnimate)
					return;		

				var offset = imageWidth * (currIndex - index); //计算偏移量

				currIndex = index;//记录当前索引		

				animate(offset); //运动								
			}

		})(i);
	}

	/*运动函数*/
	function animate(offset) {		

		// 计算出新的位置
		var newLeft = parseInt(list.style.left) + offset;

		// 运动参数
		var time = 800;//动画过渡时间
		var interval = 80;//每隔多少毫秒执行一次
		var speed = offset / (time / interval); //每次移动的像素数

		/*go函数*/
		function go() {

			// 获得当前位置
			var left = parseInt(list.style.left);

			// 判断是否到达目标位置
			if (speed >= 0 && left >= newLeft || speed <= 0 && left <= newLeft) {
				// 终止定时器
				clearInterval(timerId);
				// 动画终止
				isAnimate = false;
				//防止误差，直接设置到目标位置
				left = list.style.left = newLeft + 'px';

				// 判断是否到达替身图
				if (parseInt(left) == 0) {					
					list.style.left = -imageWidth * (imageCount - 2) + 'px';
				}

				if ( parseInt(left) == -imageWidth * (imageCount - 1) ) {
					list.style.left = -imageWidth + 'px';
				}

				return;
			}

			// 递增递减位置
			list.style.left = left + speed + 'px';
		}

		// 定时器
		var timerId = setInterval(go,interval);	
		// 动画进行中
		isAnimate = true;

		highlight();//高亮
	}

	/*高亮函数*/
	function highlight() {

		// 去掉所有高亮
		for (var i = 0;i < nav_trriger.length;i ++) {
			nav_trriger[i].className = '';
		}		

		// 当前按钮高亮
		nav_trriger[currIndex].className = 'on';

	}

	// 自动播放函数
	function autoPlay() {
		next.click(); //产生用户单击右箭头事件	
	}

	// 自动播放的定时器
	var timerId = setInterval(autoPlay,2000);

	// 鼠标移上终止自动播放
	container.onmouseenter = function() {
		clearInterval(timerId);
	}

	// 鼠标离开重新启动自动播放
	container.onmouseleave = function() {
		timerId = setInterval(autoPlay,2000);
	}

	/*
		跳转页面效果
	*/
	// var nav_trriger = document.getElementById('nav_trriger').getElementsByTagName('li');
	

	
	//所有标题对象 
	var titles = document.getElementById('tianhuan').getElementsByTagName('li');


	//所有内容对象
	var contents = document.getElementById('tuxiang').getElementsByClassName('pr_list');


	// 标题和内容的个数必须相等
	if (titles.length != contents.length)
		return;

	for (var i = 0;i < titles.length;i ++) {
		
		
		// 设置自定义属性tid
		titles[i].setAttribute('tid',i);

		// 标题鼠标移上事件
		titles[i].onmouseover = function() {


			// 读取当前标题的tid属性
			var tid = this.getAttribute('tid');

			// 所有标题失去高亮，所有内容都隐藏
			for (var j = 0;j < titles.length;j ++) {
				titles[j].className = '';
				contents[j].style.display = 'none';
			}

			// 当前标题高亮
			this.className = 'select';
			// 对应的内容显示
			contents[tid].style.display = 'block';
		}

	}
}