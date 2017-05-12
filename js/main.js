// 页面交互效果
$(function() {
	var timer;
	var timers;
	var timerOut;
	$(".hd").mouseover(function(){
		clearTimeout(timer);
		$('.hd > div').attr('class', 'content-bg content-bg-hover');
	})
	$(".hd").mouseout(function(){
		timer = setTimeout(function () {
				$('.hd > div').attr('class', 'content-bg');
		}, 200);
	})

	$(".nav-left .left-item:eq(0)").mouseover(function(){
		var _index=$(this).index();
		if(_index === 0){
			$('.nav-menu').css('display', 'block');
		}
		
	})

	$(".nav-left > div").mouseout(function() {
		var _index=$(this).index();
		if(_index === 0){
			$('.nav-menu').css('display', 'none');
		}
	})

	// 一级导航
	$(".menu-one ul li").mouseover(function(){
			var _index=$(this).index();
			setTimeout(function () {
				$(".menu-one ul li").eq(_index).attr('class', 'menu-one-active').siblings().attr('class', '');
				// console.log($(this).index());
		        $('.menu-tow > div').eq(_index).css('display','block').siblings().css('display','none');
		    }, 200);
			
		}
	)

	// 二级导航
	$(".menu-three ul li").mouseover(function(){
			var _index=$(this).index();
			setTimeout(function () {
				$(".menu-three ul li").eq(_index).attr('class', 'menu-three-active').siblings().attr('class', '');
				$('.menu-four > div').eq(_index).css('display','block').siblings().css('display','none');
			}, 200);	
		}
	)
	// 解决方案交互
	var solveHover ;
	$(".solvePlan-container li").mouseover(function(){
		clearTimeout(solveHover);
		var _index=$(this).index();
		solveHover = setTimeout(function () {
			$(".solvePlan-container li").eq(_index).attr("class", "cart-item cart-active").siblings().attr('class', 'cart-item');
		}, 200);
	})

	var ss = 0;
	$('#s-left').click(function() {
		if(ss !== -400) {
			ss += -400;
            $("#items").animate({"left": ss},500);
		}
	})
	$('#s-right').click(function() {
		if(ss !== 0) {
			ss += 400;
            $("#items").animate({"left": ss},500);
		}
	})
    
})
