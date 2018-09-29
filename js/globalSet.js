$(document).ready(function(){
	//判断导航是否有三级菜单,如没有，清除二级菜单横向条
	var navDl = $(".sy_nav .sy_bar dl");
	for (var i = 0; i < navDl.length; i++) {
		var navDd = $(navDl[i]).children("dd").length;
		if (navDd < 2) {
			$(navDl[i]).children("dt").css("border-bottom", "none");
			$(navDl[i]).children("dt").mouseover(function() {
				$(this).css({
					"cursor": "pointer",
					"color": "#348CE4"
				})
			})
			$(navDl[i]).children("dt").mouseout(function() {
				$(this).css({
					"color": "#000000"
				})
			})
		}

	}

	//开始选择头像
	$('#touxiang').hover(function() {
			$('#shangchuantouxiang').css({
				'display': 'block'
			});
			$("#userImg").attr("src", "");
		})
		//关闭图片选择框
	$('.imgCancel').on("click", function() {
			$('#shangchuantouxiang').css({
				'display': 'none'
			});
		})
		//点击确定显示图片
	$(".imgSure").on('click', function() {
			var srcImg = $("#userImg")[0].src;
			$('#shangchuantouxiang').css({
				'display': 'none'
			});
			$("#touxiang img").attr("src", srcImg);
		})
		//显示系统消息
	$('#sy_sys_info').hover(function() {
			$('.sy_sysmess').css({
				'display': 'block'
			});
		})
		//隐藏系统消息
	$('.sy_sysmess').mouseleave(function() {
		$(this).css({
			'display': 'none'
		});
	})
	$('.sy_sys_details').click(function() {
		$('.sy_sysmess').css({
			"display": "none"
		});
		$('.systeminfo').css({
			'width': '800'
		});
		$('.lookinfo').css({
			'display': 'block'
		});
/*		$('.systeminfo').css({
			"margin-left": -($('#tc_cont').width() / 2),
			"top": 100
		});*/
		popchange();
	});
	$('.gz_close,.gclose').click(function() {
		$('.tanchu').css({
			'display': 'none'
		});
	});

})


//隔行变色  表格 隔行变色
function gexingbianse() {
	var tbl = document.getElementById("ss");
	var rows = tbl.rows.length;
	for (var i = 0; i < rows; i++) {
		if (i % 2 == 0) {
			tbl.rows[i].style.backgroundColor = "#f9f9f9";
		}
	}
}

function gexingbianse2() {
	var tbl = document.getElementById("s2");
	var rows = tbl.rows.length;
	for (var i = 0; i < rows; i++) {
		if (i % 2 == 0) {
			tbl.rows[i].style.backgroundColor = "#f9f9f9";
		}
	}
}

function gexingbianse3() {
	var tbl = document.getElementById("s3");
	var rows = tbl.rows.length;
	for (var i = 0; i < rows; i++) {
		if (i % 2 == 0) {
			tbl.rows[i].style.backgroundColor = "#f9f9f9";
		}
	}
}
//选择头像
function getFileUrl(sourceId) {
	var url;
	if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE 
		url = document.getElementById(sourceId).value;
	} else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox 
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	} else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome 
		url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
	}
	return url;
}

//将本地图片显示到浏览器上
function preImg(sourceId, targetId) {
	var url = getFileUrl(sourceId);
	var imgPre = document.getElementById(targetId);
	imgPre.src = url;
}

//导航跳转
function goto(trans) {
    console.log(2,trans)
	switch (trans) {
		case 'setting_quanxian':
			location.href = "../setting/authority_setting.html";
			break;
		case 'setting_xinxi':
			location.href = "../setting/operator_information_maintenance.html";
			break;
		case 'setting_change':
			location.href = "../setting/operator_information_change.html";
			break;
		case 'setting_fuhe':
			location.href = "../setting/review_process_setting.html";
			break;
		case 'setting_xiane':
			location.href = "../setting/transaction_limit_setting.html";
			break;
		case 'setting_guide':
			location.href = "../系统设置向导/few_reviewA.html";
			break;
		case 'fh_quanxian':
			location.href = "../setting/admin_review_a.html";
			break;
	}
}
//首页弹出框
function popchange(){
		var vh=$(window).height();
		var vw=$(window).width();
		var nw=$(".systeminfo").outerWidth();
		var nh=$(".systeminfo").outerHeight();
		$(".systeminfo").css({'left':(vw-nw)/2+"px",'top':(vh-nh)/2+"px"});
	}