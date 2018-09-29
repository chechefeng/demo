//$(function(){
//	/*操作人员 公共*/
//	$(".czry .czry_box .czry_box_block").click(function(event) {
//		$(this).addClass('czry_box_block_active').siblings('div').removeClass('czry_box_block_active')
//	});
//
//	
//	$(".tab_a .tab_a_content .tab_xiaogou_box_block").click(function(){
//		$(this).addClass("tab_xiaogou_box_block_active").parent().siblings().children(".tab_xiaogou_box_block").removeClass("tab_xiaogou_box_block_active");
//	})
//
//	//选项卡切换
//	$(".tab_a .tab_a_title a").eq(0).addClass("tab_a_title_active");
//	$(".tab_a .tab_a_content table").eq(0).show();
//	$(".tab_a .tab_a_title a").click(function(){
//		$(this).addClass("tab_a_title_active").siblings().removeClass("tab_a_title_active")
//		$(".tab_a .tab_a_content table").eq($(this).index()).show().siblings("table").hide();
//	})
//})

$(function(){
	/*操作人员 公共*/
	$(".czry .czry_box .czry_box_block").click(function(event) {
		$(this).addClass('czry_box_block_active').siblings('div').removeClass('czry_box_block_active')
	});

	
	$(".tab_a .tab_a_content .tab_xiaogou_box_block").click(function(){
		//$(this).addClass("tab_xiaogou_box_block_active").parent().siblings().children(".tab_xiaogou_box_block").removeClass("tab_xiaogou_box_block_active");
		$(this).children('.gou').toggle(0, function () {  
	        if($(this).is(":hidden")){
	        	$(this).parent().removeClass('tab_xiaogou_box_block_active')
			}else{
				$(this).parent().addClass('tab_xiaogou_box_block_active')
			}  
	    });  
	})

	//选项卡切换
	$(".tab_a .tab_a_title a").eq(0).addClass("tab_a_title_active");
	$(".tab_a .tab_a_content table").eq(0).show();
	$(".tab_a .tab_a_title a").click(function(){
		$(this).addClass("tab_a_title_active").siblings().removeClass("tab_a_title_active")
		$(".tab_a .tab_a_content table").eq($(this).index()).show().siblings("table").hide();
	})


	$(".fuhe .fuhe_box .tsyw_s .tsyw_box .tsyw_box_block").click(function(event){
		$(this).children('.gou').toggle(0, function () {  
	        if($(this).is(":hidden")){
	        	$(this).parent().removeClass('tsyw_box_block_active')
			}else{
				$(this).parent().addClass('tsyw_box_block_active')
			}  
	    });  
	});

	
	//初始化 特殊业务
	$(".tsyw .tsyw_s .tsyw_box .tsyw_box_block").click(function(event){
		$(this).children('.gou').toggle(0, function () {  
	        if($(this).is(":hidden")){
	        	$(this).parent().removeClass('tsyw_box_block_active')
			}else{
				$(this).parent().addClass('tsyw_box_block_active')
			}  
	    });  
	});


	$(".yewufuhemoshi_box_box div.left").click(function(){
	    $(this).addClass('yewufuhemoshi_box_box_active_danren').siblings('div.right').removeClass('yewufuhemoshi_box_box_active_duoren');
	    $(this).find('img.zuanzhongzhuangtai').removeClass('dis-none');
	    $(this).siblings('div.right').find('img.zuanzhongzhuangtai').addClass('dis-none');
        
	})
	   $(".yewufuhemoshi_box_box div.right").click(function(){
         $(this).addClass('yewufuhemoshi_box_box_active_duoren').siblings('div.left').removeClass('yewufuhemoshi_box_box_active_danren');
         $(this).find('img.zuanzhongzhuangtai').removeClass('dis-none');
         $(this).siblings('div.left').find('img.zuanzhongzhuangtai').addClass('dis-none');
    })



})


function NoToChinese(num) { 
if (!/^\d*(\.\d*)?$/.test(num)) { alert("Number is wrong!"); return "Number is wrong!"; } 
var AA = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); 
var BB = new Array("", "拾", "佰", "仟", "萬", "億", "点", ""); 
var a = ("" + num).replace(/(^0*)/g, "").split("."), k = 0, re = ""; 
for (var i = a[0].length - 1; i >= 0; i--) { 
switch (k) { 
case 0: re = BB[7] + re; break; 
case 4: if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0])) 
re = BB[4] + re; break; 
case 8: re = BB[5] + re; BB[7] = BB[5]; k = 0; break; 
} 
if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re; 
if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re; k++; 
} 

if (a.length > 1) //加上小数部分(如果有小数部分) 
{ 
re += BB[6]; 
for (var i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)]; 
} 
return re; 
} 