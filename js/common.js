
$(function() {
	
	
	var timer = null;
	$(".nav-left .left-item:eq(0)").mouseover(function(){
		clearTimeout(timer);
		$(".nav-left > div:eq(0)").css('color', '#1dc3ed');
		$('.nav-menu').css('display', 'block');
	})

	$(".nav-left > div:eq(0)").mouseout(function() {
		timer = setTimeout(function() {
			$(".nav-left > div:eq(0)").css('color', 'white');
			$('.nav-menu').css('display', 'none');
		},200);
	})

	// 一级导航
	$(".menu-one ul li").mouseover(function(){
			var _index=$(this).index();
			setTimeout(function () {
				$(".menu-one ul li").eq(_index).attr('class', 'menu-one-active').siblings().attr('class', '');
		        $('.menu-tow > div').eq(_index).css('display','block').siblings().css('display','none');
		    }, 200);	
		}
	)

	var subTimer = null;
	// 二级导航
	$(".menu-three ul li").mouseover(function(){
			var _index=$(this).index();
			subTimer = setTimeout(function () {
				$(".menu-three ul li").eq(_index).attr('class', 'menu-three-active').siblings().attr('class', '');
				$('.menu-four > div').eq(_index).css('display','block').siblings().css('display','none');
			}, 150);	
		}
	)

	$(".menu-three ul li").mouseout(function(){
		clearTimeout(subTimer);
	})
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

function getExplorerInfo() {
	var explorer = window.navigator.userAgent.toLowerCase() ;
	//ie 
	if (explorer.indexOf("msie") >= 0) {
		var ver=explorer.match(/msie ([\d.]+)/)[1];
		return {type:"IE",version:ver};
	}
	//firefox 
	else if (explorer.indexOf("firefox") >= 0) {
		var ver=explorer.match(/firefox\/([\d.]+)/)[1];
		return {type:"Firefox",version:ver};
	}
	//Chrome
	else if(explorer.indexOf("chrome") >= 0){
		var ver=explorer.match(/chrome\/([\d.]+)/)[1];
		return {type:"Chrome",version:ver};
	}
	//Opera
	else if(explorer.indexOf("opera") >= 0){
		var ver=explorer.match(/opera.([\d.]+)/)[1];
		return {type:"Opera",version:ver};
	}
	//Safari
	else if(explorer.indexOf("Safari") >= 0){
		var ver=explorer.match(/version\/([\d.]+)/)[1];
		return {type:"Safari",version:ver};
	}
}
 var types = getExplorerInfo().type;
 var version = getExplorerInfo().version;
 if(types === 'IE') {
 	if(version === '8.0' || version === '7.0' || version === '6.0') {
 		alert("IE浏览器版本过低，请到指定网站去下载相关版本"); 
 		window.open("http://outdatedbrowser.com/zh-cn");  
 	}
 }