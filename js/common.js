
$(function() {

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
})

function pageScrollTop() {
    var scrollTop = document.body.scrollTop;
    if (scrollTop !== 0){
        window.scrollBy(0,-100);
        scrolldelay = setTimeout('pageScrollTop()',20);
    }
}
function pageScrollBottom() {
    document.body.scrollTop=document.body.scrollHeight;
}

function pageScrollHeight(high) {
    var scrollH = document.body.scrollTop;
    var cha = Math.abs(parseInt(high) - parseInt(scrollH));
    if (scrollH < high && scrollH !== high){
        window.scrollBy(0,100);
        if(cha < 100) {
            scrollH = high;
        }
        setTimeout('pageScrollHeight('+ high +')',20);
    } else if (scrollH > high && scrollH !== high) {
        window.scrollBy(0,-100);
        if(cha < 100) {
            document.body.scrollTop = high;
        } else {
            setTimeout('pageScrollHeight('+ high +')',20);
        }
    }
}