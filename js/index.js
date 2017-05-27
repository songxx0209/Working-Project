// 页面交互效果
$(function() {
	var you = 'song';
	// 解决方案交互
	var solveHover ;
	$(".solvePlan-container li").mouseover(function(){
		clearTimeout(solveHover);
		var _index=$(this).index();
		solveHover = setTimeout(function () {
			$(".solvePlan-container li").eq(_index).attr("class", "cart-item cart-active").siblings().attr('class', 'cart-item');
		}, 200);
	})
	// 稳定云服务
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
