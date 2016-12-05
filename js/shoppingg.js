$(document).ready(function(){

	var as = $('#tuxiang').find('a');
	
	as.click(function(event) {

		function Product(id,src,price,num){
			this.id = id;
			this.src = src;			
			this.price = price;
			this.num = num;
		}
		var id = $(this).attr('id');
		var src = $(this).find('img').attr('src');
		var price = $(this).find('p').text();
		var num = 1;
		var product = new Product(id,src,price,num);
	
		var proStr = JSON.stringify(product);
	
		cookie.add(id,proStr);

		setTimeout(function() {
			alert('该商品已经加入购物车中啦！');
		},500);
	});
	
		var a = cookie.getAll();
		// console.log(a);

		// $.each(a, function(index, val) {

		// 	var el = eval("(" + val + ")");
		// 	alert(el.id);
		// 	alert(el.src);
		// 	alert(el.price);

			
		// });
	

	

			
	
	

});