$(document).ready(function(){
	
	// 获得回到顶部按钮
	var topcontrol = $('#top');

	// 获得按钮对象
	var nav = $('.float_nav');

	// 回到顶部按钮单击
	topcontrol.click(function(event) {
		
		$('html,body').animate({scrollTop:0}, 1000);
	});

	// 滚动条事件
	$(window).scroll(function(event) {
		
		// 滚动条卷曲的大小
		var sTop = $(window).scrollTop();

		// 动态显示隐藏按钮
		if (sTop >= 1000) {
			nav.fadeIn('normal');
		} else {
			nav.fadeOut('normal');
		}

		// 滚动监听高亮导航
		function highLight(target) {
			$('.float_nav a').removeClass('hover');
			$(target).addClass('hover');
		}

		var mp = $('#mp');
		var wz = $('#wz');
		var nz = $('#nz');
		var xx = $('#xx');
		var xb = $('#xb');

		var mpPos = {
			start:mp.offset().top,
			end:mp.offset().top + mp.outerHeight()
		}

		var wzPos = {
			start:wz.offset().top,
			end:wz.offset().top + wz.outerHeight()
		}

		var nzPos = {
			start:nz.offset().top,
			end:nz.offset().top + nz.outerHeight()
		}

		var xxPos = {
			start:xx.offset().top,
			end:xx.offset().top + xx.outerHeight()
		}

		var xbPos = {
			start:xb.offset().top,
			end:xb.offset().top + xb.outerHeight()
		}


		if (sTop >= mpPos.start && sTop < mpPos.end) {
			highLight('.y_float_mp');
		} else if (sTop >= wzPos.start && sTop < wzPos.end) {
			highLight('.y_float_wz');
		} else if (sTop >= nzPos.start && sTop < nzPos.end) {
			highLight('.y_float_nz');
		} else if (sTop >= xxPos.start && sTop < xxPos.end) {
			highLight('.y_float_xx');
		} else if (sTop >= xbPos.start && sTop < xbPos.end) {
			highLight('.y_float_xb');
		} else {
			$('.float_nav a').removeClass('hover');
		}
		
	});

	// 导航链接滑动到锚点
	$('.float_nav a').click(function(event) {
		
		// 获得对应区块的相对于网页原点的偏移量
		var top = $(this.hash).offset().top;

		$('html,body').animate({scrollTop:top}, 1000);

		return false;
	});
});