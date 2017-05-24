
$(function() {

	// 检测滚动条位置
	window.onscroll = function () {
        var scrollTop = document.body.scrollTop;
        // console.log(scrollTop);
        if (scrollTop >= 394) {
            $('.cloud-head').attr('class', 'cloud-head c-fixed');
            $('.cloud-product-menu').css('display', 'block');
            $('.cloud-btn').css('display', 'block');
            $('.cloud-menu-box li:eq(0)').attr('class', 'c-m-b-li c-m-b-active').siblings().attr('class', 'c-m-b-li');
        } else {
            $('.cloud-product-menu').css('display', 'none');
            $('.cloud-btn').css('display', 'none');
            $('.cloud-head').attr('class', 'cloud-head');
            $('.cloud-menu-box li:eq(0)').attr('class', 'c-m-b-li').siblings().attr('class', 'c-m-b-li');
        }
        if (scrollTop >= 1200) {
        	$('.cloud-menu-box li:eq(1)').attr('class', 'c-m-b-li c-m-b-active').siblings().attr('class', 'c-m-b-li');
        } 
        if(scrollTop >= 1800) {
        	$('.cloud-menu-box li:eq(2)').attr('class', 'c-m-b-li c-m-b-active').siblings().attr('class', 'c-m-b-li');
        } 
        if(scrollTop >= 2300) {
        	$('.cloud-menu-box li:eq(3)').attr('class', 'c-m-b-li c-m-b-active').siblings().attr('class', 'c-m-b-li');
        }
    }

    // 应用场景 交互效果
	$('.apply-tab li').click(function() {
		var _index=$(this).index();
		if(_index === 0) {
			$(this).attr('class', 'apply-tab-li a-tab-active-0').siblings().attr('class', 'apply-tab-li');
		} else if(_index ===1||_index===2) {
			$(this).attr('class', 'apply-tab-li a-tab-active-1').siblings().attr('class', 'apply-tab-li');
		} else {
			$(this).attr('class', 'apply-tab-li a-tab-active-2').siblings().attr('class', 'apply-tab-li');
		}
		$('.apply-tab-content > div').eq(_index).css('display', 'block').siblings().css('display', 'none');
	});

	$('.cloud-menu-box li').click(function () {
		var _index=$(this).index();
		$(this).attr('class', 'c-m-b-li c-m-b-active').siblings().attr('class', 'c-m-b-li');
	});


	// 控制导航栏显示
	$(".cloud-product-menu").mouseover(function(){
		$('.cloud-nav-menu').css('display', 'block');
	})

	$(".cloud-product-menu").mouseout(function() {
		$('.cloud-nav-menu').css('display', 'none');
	})
	// 一级导航
	$(".cloud-menu-one ul li").mouseover(function(){
			var _index=$(this).index();
			setTimeout(function () {
				$(".cloud-menu-one ul li").eq(_index).attr('class', 'cloud-menu-one-active').siblings().attr('class', '');
		        $('.cloud-menu-tow > div').eq(_index).css('display','block').siblings().css('display','none');
		    }, 200);
			
		}
	)

	// 二级导航
	$(".cloud-menu-three ul li").mouseover(function(){
			var _index=$(this).index();
			setTimeout(function () {
				$(".cloud-menu-three ul li").eq(_index).attr('class', 'cloud-menu-three-active').siblings().attr('class', '');
				$('.cloud-menu-four > div').eq(_index).css('display','block').siblings().css('display','none');
			}, 200);	
		}
	)


})
