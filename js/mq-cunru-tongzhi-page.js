var mqCrTab = $("#crBtnTab");//存入tab
var mqJyTab = $("#jyBtnTab");//交易tab
var mqCrDiv = $("#mq-cunru");//存入div
var mqJyDiv = $("#mq-jiaoyi-tab");//交易div
var mqCuZh = $("#mq-cunru_zhanghu");//存入账户
var mqCrQdDiv = $("#mq-cunru-qd");//存入确定页面
var mqCrIsNo = $("#mq-cr-isNo");//存入是否成功页面
var mqCrUpdata = $("#mq-updata-ck");//修改

mqCrQdDiv.css("display","none");
mqCrIsNo.css("display","none");
mqJyDiv.css("display","none");
mqCrUpdata.css("display","none");

var vm = new Vue({
	el:"#mq-cr-content",
	data:{
		
	},
	ready:function(){
		
	},
	methods: {
		//点击存入tab
		djCunruTab: function() {
			mqJyTab.addClass("active");
			mqCrTab.removeClass("active");
			mqCrDiv.css("display","block");
			mqJyDiv.css("display","none");
		},
		//点击交易tab
		djJyTab: function() {
			mqCrTab.addClass("active");
			mqJyTab.removeClass("active");
			mqCrDiv.css("display","none");
			mqJyDiv.css("display","block")
		},
		//当点击存入选项后“下一步”时候
		djCrNextBtn: function() {
			mqCuZh.css("display","none");
			mqCrQdDiv.css("display","block");
			mqCrUpdata.css("display","none");
		},
		//在确定账户信息时候，点击返回按钮
		djCrQdReturn: function() {
			mqCuZh.css("display","block");
			mqCrQdDiv.css("display","none");
		},
		//在确定账户信息时候，点击确定按钮
		djCrQdConfirm: function() {
			mqCrQdDiv.css("display","none");
			mqCrIsNo.css("display","block");
		},
		//点击a标签
		djCrQdReturnTip:function(){
			mqCuZh.css("display","block");
			mqCrQdDiv.css("display","none");
			mqCrUpdata.css("display","none");
			mqCrIsNo.css("display","none");
		},
		//点击修改
		djUpdataDeal: function() {
			mqJyTab.addClass("active");
			mqCrTab.removeClass("active");
			mqCuZh.css("display","none");
			mqCrDiv.css("display","block");
			mqCrQdDiv.css("display","none");
			mqCrUpdata.css("display","block");
			mqJyDiv.css("display","none");
			mqCrIsNo.css("display","none");
		}
	}
});
