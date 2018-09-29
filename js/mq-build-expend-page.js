var mqExpend = $("#mq-expend"); //支取通知存款tab
var mqDeal = $("#mq-deal"); //交易列表tab
var mqExpendTab = $("#mq-expend-tab"); //支取通知存款内容
var mqDealTab = $("#mq-deal-tab"); //交易列表内容
var mqExpendTabData = $("#mq-expend-tab-data"); //支取数据div
var mqExpendTabDataPage = $("#mq-expend-tab-affirm"); //支取数据确定div
var mqExpendNextBtn = $("#mq-expend-btn"); //支取页面下一步按钮 
var mqExpendAffirmBtn = $("#mq-expend-affirm-btn"); //支取确定页面确定按钮
var mqExpendCancelBtn = $("#mq-expend-cancel-btn"); //支取确定页面返回按钮
var mqExpendTabAffirmMinute = $("#mq-expend-tab-affirm-minute"); //支取确定页面详细内容
var mqUpdateExpendTab = $("#mq-update-expend-tab");//交易修改块

mqExpend.addClass("active");
mqDealTab.css("display", "none");
mqExpendTabDataPage.css("display", "none");
mqExpendTabAffirmMinute.css("display", "none");
mqUpdateExpendTab.css("display", "none");

/*mqExpend.classList.add("active");//给支取添加类
mqDealTab.style.display = "none";
mqExpendTabDataPage.style.display = "none";*/
//当点击支取时候
/*mqExpend.on("click", function() {
	console.log("2222")
	mqExpend.addClass("active");
	mqDeal.removeClass("active");
	mqExpendTab.css("display", "block");
	mqDealTab.css("display", "none");
});*/

/*mqExpend.onclick= function() {
	mqExpend.classList.add("active");
	mqDeal.classList.remove("active");
	mqExpendTab.style.display = "block";
	mqDealTab.style.display = "none";
}*/

//当点击交易的时候
/*mqDeal.on("click", function() {
	console.log("1111")
	mqExpend.removeClass("active");
	mqExpendTab.css("display", "none");
	mqDealTab.css("display", "block");
	mqDeal.addClass("active");
});*/
/*mqDeal.onclick = function() {
	mqExpend.classList.remove("active");
	mqExpendTab.style.display = "none";
	mqDealTab.style.display = "block";
	mqDeal.classList.add("active");
}*/

//当点击下一步的时候
mqExpendNextBtn.on("click", function() {
	mqExpendTabData.css("display", "none");
	mqExpendTabDataPage.css("display", "block");
})
/*mqExpendNextBtn.onclick = function() {
	mqExpendTabData.style.display = "none";
	mqExpendTabDataPage.style.display = "block";
}*/

//当点击确定页面的返回按钮
mqExpendCancelBtn.on("click", function() {
	mqExpendTabData.css("display", "block");
	mqExpendTabDataPage.css("display", "none");
})
/*mqExpendCancelBtn.onclick = function() {
	mqExpendTabData.style.display = "block";
	mqExpendTabDataPage.style.display = "none";
}*/

//当点击确定页面的确定按钮
mqExpendAffirmBtn.on("click", function() {
	mqExpendTabDataPage.css("display", "none");
	mqExpendTabAffirmMinute.css("display", "block");
});

/**
 * vue数据
 * mq-ningxin
 */

var vm = new Vue({
	el: "#mq-myBox",
	data: {
		"subTab": [], //子账户
		"informTab": [], //通知
		"zgsSelect": [], //总账户
		"isShow": 0,
		//集团ID
		"ztID": "",
		"subTabQuery": [], //根据总账户查询子账户
		"informTabQuery": [], //根据子账户查询通知
		"isSelect": "", //子账户序列号
		"isInfSelect": "", //通知序列号
		"infSelectInput": "", //通知input
		"ztIndex": "", //集团Index
		"subIndex": "", //子账号Index
		"infIndex": "", //通知Index
		"qdzh": {
			"zhNub": "",
			"hm": "",
			"subNub": "",
			"subYe": "",
			"tzType": "",
			"lv": "",
			"zqsxNub": "",
			"zqje": "",
			"zqDate": ""
		},
		//		交易列表
		//选择内容
		"dealContentTab": [],
		"isCheckContent": [],
		"isCheck": false,
	},
	ready: function() {
		$.ajax({
			type: "get",
			url: "../../../mq-data.json",
			async: true,
			success: function(data) {
				vm.subTab = data.subTab;
				vm.informTab = data.informTab;
				vm.zgsSelect = data.zgsSelect;
			}
		});

		$.ajax({
			type: "get",
			url: "../../../mq-deal.json",
			async: true,
			success: function(data) {
				vm.dealContentTab = data;
			}
		});
	},
	watch: {
		ztID: function() {
			this.subTabQuery = [];
			for(var j = 0; j < this.zgsSelect.length; j++) {
				if(this.zgsSelect[j].zgsId == this.ztID) {
					this.qdzh.zhNub = this.zgsSelect[j].zhNbu;
					this.qdzh.hm = this.zgsSelect[j].zgsName;
				}
			}

			for(var i = 0; i < this.subTab.length; i++) {
				if(this.subTab[i].zgsId == this.ztID) {
					this.subTabQuery.push(this.subTab[i]);
				}
			}

		},
		isSelect: function() {
			this.informTabQuery = [];

			for(var i = 0; i < this.informTab.length; i++) {
				if(this.informTab[i].subNub == this.isSelect) {
					this.informTabQuery.push(this.informTab[i]);
				}
			}

			for(var j = 0; j < this.subTabQuery.length; j++) {
				if(this.subTabQuery[j].subNub == this.isSelect) {
					this.qdzh.subNub = this.subTabQuery[j].subNub;
					this.qdzh.subYe = this.subTabQuery[j].subBalance;
					this.qdzh.tzType = this.subTabQuery[j].tongzhi;
					this.qdzh.lv = this.subTabQuery[j].lilv;
				}
			}
		},
		isInfSelect: function() {
			this.infSelectInput = "";
			for(var i = 0; i < this.informTabQuery.length; i++) {
				if(this.informTabQuery[i].iftId == this.isInfSelect) {
					this.infSelectInput = this.informTabQuery[i];
				}
			}
			this.qdzh.zqsxNub = this.infSelectInput.iftId;
			this.qdzh.zqje = this.infSelectInput.tzje;
			this.qdzh.zqDate = this.infSelectInput.zqDate;
		},
		isCheckContent: function() {
			var dealContentTabLen = this.dealContentTab.length;
			var isCheckContentLen = this.isCheckContent.length;
			if(dealContentTabLen == isCheckContentLen) {
				this.isCheck = true;
			} else {
				this.isCheck = false;
			}
		}
	},
	methods: {
		//当点击支取时候
		mqExpendDiv: function() {
			mqExpend.addClass("active");
			mqDeal.removeClass("active");
			mqExpendTab.css("display", "block");
			mqDealTab.css("display", "none");
		},
		//当点击交易的时候
		mqDealDiv: function() {
			mqExpend.removeClass("active");
			mqExpendTab.css("display", "none");
			mqDealTab.css("display", "block");
			mqDeal.addClass("active");
		},
		selectTab: function() {
			vm.isShow = 1;
		},
		selectUlData: function() {
			vm.isShow = 0;
		},
		//当点击继续时候回到首页
		djHome: function() {
			mqExpendTabAffirmMinute.css("display", "none");
			mqExpendTabData.css("display", "block");
			this.ztID = "";
			this.subTabQuery = [];
			this.informTabQuery = [];
			this.infSelectInput = [];
		},
		selectTab: function() {
			vm.isShow = 1;
		},
		selectUlData: function() {
			vm.isShow = 0;
		},
		//交易页面，当点击全选时
		selectAll: function() {
			var dealContentTabLen = this.dealContentTab.length;
			var isCheckContentLen = this.isCheckContent.length;
			if(dealContentTabLen == isCheckContentLen) {
				this.isCheckContent = [];
			} else {
				this.isCheckContent = [];
				for(var i = 0; i < dealContentTabLen; i++) {
					this.isCheckContent.push(this.dealContentTab[i].subId);
				}
			}

		},
		//交易页面，当删除单独一条时
		/*delIndex: function(index) {
//			this.dealContentTab.splice(index, 1);
			pcAlert({
				content: "确定删除吗？", //弹框内容
				confirm: function() {
					vm.dealContentTab.splice(this.dealDelIndex, 1);
				}
			});
		},
		//交易页面，当删除多选时
		delAll: function() {
			pcAlert({
				content: "确定批量删除吗？", //弹框内容
				confirm: function() { //点击左边按钮之后执行的方法
					vm.isCheckContent.forEach(function(checkData, checkIndex) {
				vm.dealContentTab.forEach(function(itemData, itemIndex) {
					if(checkData == itemData.subId) {
						vm.dealContentTab.splice(vm.dealContentTab.indexOf(itemData), 1);
						vm.isCheckContent = [];
					}
				});
			});
				},
				cancel: function() { //点击右边按钮之后执行的方法

				}
			})
			
		},
		
		//交易页面，当点击修改时
		updateDeal: function() {
			pcAlert({
				content: "确定修改吗？", //弹框内容
				confirm: function() {
					vm.mqExpendDiv();
					mqExpendTabDataPage.css("display", "none");
					mqExpendTabAffirmMinute.css("display", "none");
					mqUpdateExpendTab.css("display", "none");
					mqExpendTabData.css("display", "block");
				}
			});
			
		}*/
		
		//交易页面，当删除单独一条时
		delIndex: function(index) {
			$("#tc_d").css("display", "block");
			$(".butConfirm").unbind("click").on("click",function(){
                $('#tc_d').css({'display':'none'});
				vm.dealContentTab.splice(index, 1);			})
			
		},
		//交易页面，当删除多选时
		delAll: function() {
			
			$("#tc_d").css("display", "block");
			$(".butConfirm").click(function(){	
				$('#tc_d').css({'display':'none'});
				vm.isCheckContent.forEach(function(checkData, checkIndex) {
				vm.dealContentTab.forEach(function(itemData, itemIndex) {
					if(checkData == itemData.subId) {
						vm.dealContentTab.splice(vm.dealContentTab.indexOf(itemData), 1);
						vm.isCheckContent = [];
					}
				});
			});
					
			})
		},
		//交易页面，当点击修改时
		updateDeal: function() {
			
			$("#tc_c").css("display", "block");
			$(".butSure").click(function(){	
				vm.mqExpendDiv();
				$('#tc_c').css({'display':'none'});
				mqExpendTabDataPage.css("display", "none");
				mqExpendTabAffirmMinute.css("display", "none");
				mqUpdateExpendTab.css("display", "none");
				mqExpendTabData.css("display", "block");
			})
			
		}
	}
});



	
$('.gz_close,.gclose').click(function(){
    	$('#tc_c').css({'display':'none'});
    	$('#tc_d').css({'display':'none'});
    });