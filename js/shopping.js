$(document).ready(function(){


	function totalcalc(){
		var totalprice = 0;
		for(i = 0;i < $('.c-th-sum').length;i ++){
			totalprice += parseInt($('.c-th-sum').eq(i).html()*$('.pro-nums').eq(i).val());
		}
		$('.total').html('￥' + totalprice + '.00'); 	
		$('.all').html('￥' + totalprice + '.00');
		$('.pay').html('￥' + totalprice + '.00');
		

	}

	var a = cookie.getAll();
	
	var html = '';
	var Pri = 0;
	$.each(a, function(index, val) {
		try{
			var el = eval("(" + val + ")");	
		}catch(e){
			return true;
		}
		console.log(val);		
		
		// alert(el.id);
		// alert(el.src);
		// alert(el.price);	
		// alert(el.num);	
		
		html += '	<div class="AProduct">';
		html += '		<div class="c-th-chk">';
		html += '			<div>';
		html += '				<input type="checkbox" class="J-willing">';
		html += '			</div>';
		html += '		</div>';
		html += '		<div class="c-th-item">';
		html += '			<div class="property">';
		html += '				<div class="pro-img">';
		html += '					<a href="#">';
		html += '						<img src=" ' + el.src + ' " alt="">';
		html += '					</a>';
		html += '				</div>';
		html += '				<p class="pro-title">';
		html += '';
		html += '				</p>';
		html += '			</div>';
		html += '		</div>';
		html += '		<div class="c-th-price">';
		html += '			<div class="pro-price">';
		html += '				<strong>';
		html += '					<b> ' + el.price + ' </b>';
		html += '				</strong>';
		html += '			</div>';
		html += '		</div>';
		html += '		<div class="c-th-amount">';
		html += '			<div class="pro-number">';
		html += '				<a href="javascript:;" title="减少" class="nums-red">-</a>';
		html += '				<input type="text" class="pro-nums" disabled value=" ' + el.num + ' ">';
		html += '				<a href="javascript:;" title="增加" class="nums-add">+</a>';
		html += '			</div>';
		html += '		</div>';
		html += '		<div class="c-th-sum">';
		html += '			' + el.price.slice(1,9) + ' ';
		html += '		</div>';
		html += '		<div class="c-th-op">';
		html += '			<div class="decidetime">';
		html += '				<a href="javascript:;" vid="'+ el.id +'" class="pro-remove">';
		html += '					删除';
		html += '				</a>';
		html += '			</div>';
		html += '		</div>';
		html += '	</div>';

	});
	
	$('.CommodityList').html(html);
	totalcalc();
	$('.nums-add').click(function(event) {
		//数字增加部分
		var proNum = $(this).prev('input');
		var num = proNum.val();
		num ++;
		proNum.val(num);

		//总价计算部分
		totalcalc();

	});
	
	$('.nums-red').click(function(event) {
		var proNum = $(this).next('input');
		var num = proNum.val();

		num --;
		if (num <= 0) {
			alert('该商品不能少于一件！');
			
			return false;
		}
		proNum.val(num);		

		//总价计算部分
		totalcalc(); 	
	});	

	$('.pro-remove').click(function(event) {
		
		$(this).parents('.AProduct').remove();
		cookie.del($(this).attr('vid'))
		
		//总价计算部分
		totalcalc(); 
	});

	$('.Accounts').click(function(event) {
		
		alert('购买成功！');
	});

});