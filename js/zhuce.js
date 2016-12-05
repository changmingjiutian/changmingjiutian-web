window.onload = function() {
	function $(_id) {
		return document.getElementById(_id);
	}	

	// 验证用户名是否符合要求
	var username = $('username');
	username.onchange = function () {			
		var nameReg = /^[a-z][a-z0-9_]{5,11}$/g;	
		var flag1 = nameReg.test(username.value);	
		if(!flag1) {
			layer.alert('用户名输入错误');
			
			username.value = '';
			username.focus();
						
		}		
	}

	// 验证密码是否符合要求
	var userpwd = $('userpwd');
	userpwd.onchange = function() {			
		var pwdReg = /^\d{6,8}$/g;
		var flag2 = pwdReg.test(userpwd.value);

		if(!flag2) {
			layer.alert('密码输入错误');
			userpwd.value = '';	
			userpwd.focus();
						
		}			
	}

	// 验证二次密码是否符合要求
	var userpwd2 = $('userpwd2');
	userpwd2.onchange = function() {
		if (userpwd2.value != userpwd.value) {
			layer.alert('二次输入密码错误');
			userpwd2.value = '';
			userpwd2.focus();

						
		}
	}

	// 验证手机号码是否符合要求
	var mobile = $('mobile');
	mobile.onchange = function() {			
		var mobReg = /^1[3578]\d{9}$/g;
		var flag3 = mobReg.test(mobile.value);

		if(!flag3) {
			layer.alert('手机号输入错误');
			mobile.value = '';
			mobile.focus();

		
			
		}
	}

	// 验证邮箱是否符合要求
	var email = $('email');
	email.onchange = function() {
		var emReg = /^[a-z0-9_]+@\w+(\.[a-z]{2,3}){1,2}$/g;
		var flag4 = emReg.test(email.value);

		if (!flag4) {
			layer.alert('邮箱格式不正确');
			email.value = '';
			email.focus();

			
		}
	}


	var button = $('button');
	//获取按钮单击事件 
	button.onclick = function(e) {

		// 判断文本框是否为空
		if( $('username').value == '' || $('userpwd').value == '' || $('userpwd2').value == ''
		|| $('mobile').value == '' ||$('email').value == '' ){
			
			return;
		} else{
			var username = $('username').value;
			var userpwd = parseInt($('userpwd').value);
			console.log(username + ',' + userpwd);
			// alert(typeof(userpwd));
			
			document.cookie = 'username=' + username + ',userpwd=' + userpwd;
			

			layer.alert('注册成功，开始登录吧！！',function(){
			location.href = 'denglu.html';
			})
			
		}

			
	}

}