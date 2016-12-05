window.onload = function() {

	// 获得对象
	var menu = document.getElementById('menu');
	var head = document.getElementById('menu').getElementsByClassName('head');
	var count = document.getElementById('menu').getElementsByClassName('count');

	var nametxt = document.getElementById('loginForm').getElementsByClassName('nametxt');
	var passtxt = document.getElementById('loginForm').getElementsByClassName('passtxt');
	var othertxt = document.getElementById('loginForm').getElementsByClassName('othertxt');
	var sub = document.getElementById('loginForm').getElementsByClassName('submit');


	// 循环遍历标题元素
	for (var i = 0;i < head.length;i ++) {

		// 设置标题的自定义属性
		head[i].setAttribute('pid',i);

		// 循环添加标题的单击事件
		head[i].onclick = function() {

			// 取出自定义属性值
			var pid = this.getAttribute('pid');

			// 获得对应内容对象
			var currCount = count[pid];
			var currHead = head[pid];

			// 动态显示隐藏对应的内容
			if (currCount.style.display == 'none') {
				for (var j = 0;j < count.length;j ++) {
					count[j].style.display = 'none';
					head[j].style.background = '#fff';
					head[j].style.color = '#666';

				}

				// 显示内容
				currCount.style.display = 'block';
				currHead.style.background = '#e5004f';
				currHead.style.color = '#fff';
			}		
		}
	}

	// 产生随机验证码
	var code = new Array();
	function random(){
		var str = '';
		for(var i = 0; i <=3; i ++){
			code[i] = parseInt((90 - 55 + 1) * Math.random() + 55);
			if(code[i] >= 55 && code[i] <= 64){
				code[i] -= 7;
			}
			code[i] = String.fromCharCode(code[i]);
			
		}
		var randomCode = code.join(" ");
		$("#random-letter div span").text(randomCode);
	}
	random();
	
	$("#random-letter a").click(function(event) {
		random();
	});	
	// alert(document.cookie);

	// 验证表单是否为空
	sub[0].onclick = function() {
		if ((nametxt[0].value == '') || (passtxt[0].value == '') || (othertxt[0].value == '')) {
			layer.alert('亲，你还没有填完哦！');
			// return;
		}


		var params = document.cookie.split(',');
		var obj = {};
		//遍历数组元素
		for (var i = 0;i < params.length;i ++) {			
			// 按照等号分解成键值对
			var str = params[i].split('=');

			// 当做属性添加到对象中
			obj[str[0]] = str[1];
			
		}
		console.log(obj);
		// console.log(obj.username + ',' + obj.userpwd);
			// console.log(obj);
			// alert(obj.userpwd);
			// alert(obj.username);

		if (nametxt[0].value != obj.username) {
			layer.alert('用户名不存在！');
			return;
		} 
		
		console.log(othertxt[0].value + ',' + $("#random-letter div span").text());
		if (passtxt[0].value != parseInt(obj.userpwd)) {
			// alert(typeof(parseInt(obj.userpwd)));
			layer.alert('密码输入错误！');
			return;
		}

		if (othertxt[0].value != $("#random-letter div span").text()) {
			layer.alert('验证码错误！');
			return;
		}
		
		
		layer.alert('登陆成功！',function(){
			location.href = 'index.html';
		})
	}
}